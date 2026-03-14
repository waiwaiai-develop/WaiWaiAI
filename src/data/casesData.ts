export interface CaseResult {
    iconName: 'Clock' | 'TrendingUp' | 'CheckCircle2';
    label: string;
    value: string;
    desc: string;
}

export interface CaseStudy {
    id: string;
    category: string;
    title: string;
    client: string;
    problem: string;
    solution: string;
    results: CaseResult[];
    tags: string[];
    color: string;
    bgColor: string;
    bgImage: string;
}

export const casesData: CaseStudy[] = [
    {
        id: "case-rag",
        category: 'AIエージェント構築',
        title: '社内ナレッジ検索AIの導入で、問い合わせ工数を月間200時間削減',
        client: 'コンサルティング・士業 様（従業員300名）',
        problem: '属人的なノウハウがファイルサーバーに散在。「あの資料どこだっけ？」という社内質問が1日平均50件発生し、熟練スタッフのコア業務を圧迫していた。',
        solution: '社内のあらゆるドキュメント（PDF, Word, 社内Wiki）を学習させた専用AIチャットボットを導入。質問に応じた根拠資料と共に即答するシステムをAzure OpenAI基盤で構築した。',
        results: [
            { iconName: 'Clock', label: '問い合わせ対応時間', value: '80%削減', desc: '月200時間の余白創出' },
            { iconName: 'TrendingUp', label: '新人の即戦力化', value: '期間半減', desc: 'オンボーディング工数大幅減' },
        ],
        tags: ['RAG', 'LLM', 'Azure OpenAI', 'Teams連携'],
        color: '',
        bgColor: '',
        bgImage: 'bg-gradient-to-br from-slate-900 to-blue-900'
    },
    {
        id: "case-matching",
        category: 'フルスクラッチ開発',
        title: 'DXプラットフォーム開発で、アナログ業務を撤廃し成約率2.5倍へ',
        client: '人材マッチング業 様（従業員150名）',
        problem: '求職者と企業のマッチングを毎朝エクセルと手作業で行っており、提案数が属人化・頭打ちになっていた。また、入力ミスによる機械損失も月数十万円規模で発生。',
        solution: '条件マッチングとレコメンド機能を搭載したWebアプリケーションをフルスクラッチで開発。顧客管理から契約書自動発行まで一気通貫で行える仕組みを構築。',
        results: [
            { iconName: 'TrendingUp', label: '月間成約率', value: '250% UP', desc: 'マッチング精度の劇的向上' },
            { iconName: 'CheckCircle2', label: 'データ入力ミス', value: '0件に', desc: 'ヒューマンエラー完全排除' },
        ],
        tags: ['React', 'Node.js', 'Next.js', 'AWS'],
        color: '',
        bgColor: '',
        bgImage: 'bg-gradient-to-br from-slate-800 to-indigo-900'
    }
];
