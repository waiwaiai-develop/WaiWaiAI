import fs from 'fs';
import path from 'path';

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface BlogPost extends BlogMeta {
  slug: string;
  readingTime: number;
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

function calculateReadingTime(raw: string): number {
  const text = raw.replace(/export\s+const\s+metadata\s*=[\s\S]*?};/g, '');
  const cleaned = text.replace(/[#*`\[\](){}|>!-]/g, '').replace(/\s+/g, '');
  return Math.max(1, Math.ceil(cleaned.length / 400));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const readingTime = calculateReadingTime(raw);
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return { slug, readingTime, ...mod.metadata };
  } catch {
    return null;
  }
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 3,
): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score:
        (p.category === category ? 3 : 0) +
        p.tags.filter((t) => tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function getAllCategories(posts: BlogPost[]): string[] {
  return [...new Set(posts.map((p) => p.category))];
}
