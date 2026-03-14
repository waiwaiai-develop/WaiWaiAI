export interface AttributeOption {
    id: string;
    icon: string;
    label: string;
    sublabel: string;
}

export interface PainPointOption {
    id: string;
    icon: string;
    text: string;
}

export interface IndustryOption {
    id: string;
    icon: string;
    label: string;
}

export const attributes: AttributeOption[] = [
    { id: 'executive', icon: '🏢', label: '経営者・決裁者', sublabel: 'コスト削減・ROIが気になる' },
    { id: 'engineer', icon: '💻', label: 'エンジニア・技術者', sublabel: '技術選定・実現性が知りたい' },
    { id: 'business', icon: '📈', label: '事業部門・マーケ', sublabel: '業務効率化・自動化したい' },
    { id: 'explorer', icon: '🔍', label: 'まずは情報収集', sublabel: '気軽に聞いてみたい' },
];

export const painPointsByAttribute: Record<string, PainPointOption[]> = {
    executive: [
        { id: 'support-overload', icon: '💬', text: '問い合わせ対応が多すぎる' },
        { id: 'manual-errors', icon: '📊', text: '手作業が多くてミスが出る' },
        { id: 'high-cost', icon: '💸', text: '外注・人件費コストが高い' },
        { id: 'ai-interest', icon: '🤔', text: 'AIに興味あるけど何から始めれば…' },
    ],
    engineer: [
        { id: 'legacy-system', icon: '🔧', text: 'レガシーシステムの刷新が必要' },
        { id: 'ai-integration', icon: '🤖', text: 'AI/LLMを自社サービスに組み込みたい' },
        { id: 'automation', icon: '⚡', text: '手動デプロイ・運用を自動化したい' },
        { id: 'tech-selection', icon: '🧭', text: '技術選定で悩んでいる' },
    ],
    business: [
        { id: 'repetitive-tasks', icon: '🔄', text: '毎日同じ作業に時間を取られる' },
        { id: 'data-scattered', icon: '📋', text: 'データがバラバラで管理しづらい' },
        { id: 'customer-response', icon: '💬', text: '顧客対応に手が回らない' },
        { id: 'reporting', icon: '📊', text: 'レポート作成が大変' },
    ],
    explorer: [
        { id: 'what-is-ai', icon: '🤔', text: 'AIで何ができるのか知りたい' },
        { id: 'competitors', icon: '👀', text: '競合がAI使ってて気になる' },
        { id: 'cost-image', icon: '💰', text: '導入コストのイメージが欲しい' },
        { id: 'case-studies', icon: '📖', text: '他社の事例を見たい' },
    ],
};

export const industries: IndustryOption[] = [
    { id: 'it-web', icon: '🏢', label: 'IT・Web' },
    { id: 'manufacturing', icon: '🏭', label: '製造' },
    { id: 'retail-ec', icon: '🛒', label: '小売・EC' },
    { id: 'healthcare', icon: '🏥', label: '医療・介護' },
    { id: 'education', icon: '📚', label: '教育' },
    { id: 'finance', icon: '💰', label: '金融・保険' },
    { id: 'other', icon: '🔹', label: 'その他' },
];
