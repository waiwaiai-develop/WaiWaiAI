export interface NewsItem {
    id: string;
    date: string;
    label: 'NEWS' | 'BLOG';
    title: string;
    link: string | null;
}

export const newsData: NewsItem[] = [
    { id: '1', date: '2026.02.15', label: 'NEWS', title: '本社移転のお知らせ', link: null },
    { id: '2', date: '2026.02.10', label: 'BLOG', title: 'AAAI-2026 参加報告', link: null },
    { id: '3', date: '2026.01.28', label: 'BLOG', title: 'OpenEvals × Langfuseで始めるAIエージェントのマルチターン評価', link: null },
    { id: '4', date: '2026.01.15', label: 'NEWS', title: '資金調達の実施について', link: null },
];
