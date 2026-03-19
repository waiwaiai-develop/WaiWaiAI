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
  {
    id: 'real-estate-ai-guide',
    title: '不動産AI活用ガイド',
    description:
      '不動産業界に特化したAI活用の実践ガイド。物件情報管理の自動化、顧客対応AI、マッチング最適化など、現場で即使えるノウハウを凝縮。',
    price: 4980,
    category: 'guide',
    tags: ['不動産', 'AI活用', 'DX'],
    stripePaymentLink: '#',
    features: [
      '物件情報の自動収集・整理システム設計',
      'AI顧客対応チャットボット導入ステップ',
      '物件マッチングAIの構築方法',
      '導入ROI計算シート付き',
    ],
    relatedBlogSlug: 'ai-real-estate',
  },
];

export const categoryLabels: Record<string, string> = {
  template: 'テンプレート',
  tool: 'ツール',
  guide: 'ガイド',
};
