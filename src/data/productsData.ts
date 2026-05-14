export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'template' | 'tool' | 'guide';
  tags: string[];
  stripePaymentLink: string;
  image?: string;
  relatedBlogSlug?: string;
  features: string[];
}

export const productsData: Product[] = [
  {
    id: 'claude-md-templates',
    title: 'CLAUDE.md テンプレセット',
    description:
      'Claude Codeを最大限に活用するためのCLAUDE.mdテンプレート集。個人開発からチーム開発まで、プロジェクトタイプ別に最適化された設定を即座に導入できます。',
    price: 1980,
    category: 'template',
    tags: ['Claude Code', 'AI開発', 'テンプレート'],
    stripePaymentLink: '#',
    features: [
      'プロジェクトタイプ別テンプレート（Web/API/モバイル等）',
      'チーム開発用ルール＆コーディング規約テンプレ',
      'セキュリティルール・安全ガードレール付き',
      'カスタマイズガイド付きREADME',
    ],
    relatedBlogSlug: 'claude-code-development',
  },
  {
    id: 'obsidian-ai-knowledge',
    title: 'Obsidian × AI ナレッジ管理テンプレ',
    description:
      'ObsidianをAIエージェントの記憶基盤として活用するためのテンプレート。フォルダ構成、メモリ設計、エージェント連携の仕組みをすぐに導入できます。',
    price: 2980,
    category: 'template',
    tags: ['Obsidian', 'AI', 'ナレッジ管理'],
    stripePaymentLink: '#',
    features: [
      'AI最適化フォルダ構成テンプレート',
      'エージェント記憶管理の設計パターン集',
      'Obsidian × Claude Code 連携設定',
      'セカンドブレイン構築ガイド',
    ],
    relatedBlogSlug: 'solo-ceo-ai-agents',
  },
];

export const categoryLabels: Record<string, string> = {
  template: 'テンプレート',
  tool: 'ツール',
  guide: 'ガイド',
};
