'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeJapaneseYen,
  BarChart3,
  Bot,
  Calculator,
  CheckCircle2,
  Clock,
  Download,
  FileSearch,
  FileText,
  LineChart,
  Mail,
  MessageSquareText,
  Settings2,
  Sparkles,
  Users,
} from 'lucide-react';

type WorkType = {
  id: string;
  label: string;
  rate: number;
  description: string;
  candidates: string[];
  examples: string[];
  capabilities: string[];
  flow: FlowStep[];
};

type Issue = {
  id: string;
  label: string;
  bonus: number;
};

type Industry = {
  id: string;
  label: string;
  multiplier: number;
  workTypes: WorkType[];
  issues: Issue[];
};

type FlowStep = {
  icon: typeof MessageSquareText;
  title: string;
  body: string;
};

type PayMode = 'hourly' | 'monthly' | 'annual';

const PAY_MODES: { id: PayMode; label: string; unit: string; min: number; max: number; step: number; defaultValue: number }[] = [
  { id: 'hourly', label: '時給', unit: '円/時', min: 1000, max: 6000, step: 100, defaultValue: 2500 },
  { id: 'monthly', label: '月給', unit: '万円/月', min: 18, max: 90, step: 1, defaultValue: 40 },
  { id: 'annual', label: '年収', unit: '万円/年', min: 250, max: 1200, step: 10, defaultValue: 600 },
];

const sharedFlow = {
  support: [
    { icon: MessageSquareText, title: '受付を集約', body: 'LINE・メール・フォーム' },
    { icon: Bot, title: '一次回答', body: 'FAQ・条件確認を自動化' },
    { icon: FileText, title: '記録化', body: '対応履歴を自動整理' },
    { icon: Mail, title: '通知', body: '担当者へ自動連携' },
  ],
  report: [
    { icon: FileSearch, title: 'データ収集', body: '日報・売上・顧客情報' },
    { icon: Bot, title: '要約・分析', body: 'AIが論点を整理' },
    { icon: BarChart3, title: 'レポート化', body: '表・文章の下書き' },
    { icon: Mail, title: '共有', body: '週次報告を自動配信' },
  ],
  data: [
    { icon: FileText, title: '入力元を整理', body: 'PDF・メール・フォーム' },
    { icon: Bot, title: '抽出', body: '必要項目をAIで判定' },
    { icon: Settings2, title: '転記', body: '台帳・シートへ連携' },
    { icon: CheckCircle2, title: '確認', body: '漏れや重複を検知' },
  ],
  knowledge: [
    { icon: FileSearch, title: '資料を集約', body: '社内資料・マニュアル' },
    { icon: Bot, title: '検索回答', body: 'AIが根拠つきで回答' },
    { icon: MessageSquareText, title: '質問窓口', body: '社内チャットで利用' },
    { icon: LineChart, title: '改善', body: 'よく聞かれる内容を更新' },
  ],
} satisfies Record<string, FlowStep[]>;

const INDUSTRIES: Industry[] = [
  {
    id: 'food',
    label: '飲食・店舗運営',
    multiplier: 0.92,
    workTypes: [
      {
        id: 'reservation',
        label: '予約・問い合わせ対応',
        rate: 0.48,
        description: '電話、LINE、Googleフォームなどの確認・返信',
        candidates: ['予約・問い合わせ一次対応', 'シフト共有・欠員連絡', '日報・売上報告の集計'],
        examples: ['LINE予約の一次返信を自動化', 'キャンセル・変更連絡を担当者へ通知', '営業時間外の問い合わせを翌朝用に整理'],
        capabilities: ['LINE連携', 'FAQ自動回答', '予約候補整理', '担当者通知', '対応履歴保存', 'よくある質問の更新'],
        flow: sharedFlow.support,
      },
      {
        id: 'store-report',
        label: '日報・売上集計',
        rate: 0.54,
        description: '店舗日報、売上転記、週次レポート作成',
        candidates: ['売上・客数レポート作成', '店舗日報の自動整理', '発注・在庫確認の補助'],
        examples: ['各店舗の日報を週次レポートへ自動集約', '売上・客数の変化を要約', '確認漏れのある日報を自動検知'],
        capabilities: ['Google Sheets連携', '日報集計', 'グラフ作成', '週次要約', '異常値検知', 'メール配信'],
        flow: sharedFlow.report,
      },
      {
        id: 'staff-admin',
        label: 'スタッフ連絡・事務',
        rate: 0.36,
        description: '連絡、共有、確認、マニュアル検索',
        candidates: ['スタッフ連絡の自動整理', '社内マニュアル検索', '定型連絡の自動通知'],
        examples: ['スタッフからの質問にマニュアル根拠つきで回答', '共有事項を店舗別に自動配信', '欠員連絡を優先度つきで整理'],
        capabilities: ['社内FAQ化', 'チャット窓口', '通知自動化', 'マニュアル検索', '未読確認', '定型文生成'],
        flow: sharedFlow.knowledge,
      },
    ],
    issues: [
      { id: 'phone-line', label: '電話やLINEの確認・返信が営業時間中に割り込む', bonus: 0.05 },
      { id: 'store-report-delay', label: '日報や売上集計が手作業で遅れがち', bonus: 0.05 },
      { id: 'shift-contact', label: 'シフト・欠員・共有事項の連絡が散らばる', bonus: 0.03 },
      { id: 'manual-search', label: 'マニュアルや過去対応を探すのに時間がかかる', bonus: 0.03 },
    ],
  },
  {
    id: 'it',
    label: 'IT・情報通信',
    multiplier: 1.0,
    workTypes: [
      {
        id: 'support-ticket',
        label: '問い合わせ・チケット対応',
        rate: 0.46,
        description: '問い合わせの分類、一次回答、担当振り分け',
        candidates: ['問い合わせ分類・一次回答', '社内ナレッジ検索', '障害報告・週次レポート'],
        examples: ['問い合わせを内容別に分類して担当へ振り分け', '既存FAQから一次回答を作成', '対応履歴から改善テーマを抽出'],
        capabilities: ['チケット分類', '一次回答生成', '担当者振り分け', 'ナレッジ検索', '対応履歴分析', 'Slack通知'],
        flow: sharedFlow.support,
      },
      {
        id: 'weekly-report',
        label: '進捗・レポート作成',
        rate: 0.5,
        description: '議事録、進捗、KPI、週次資料の作成',
        candidates: ['会議メモから週次報告作成', 'KPIレポート下書き', 'タスク棚卸しの自動化'],
        examples: ['議事録から決定事項とTODOを抽出', '週次の進捗報告を自動作成', 'KPI変化のコメントを下書き'],
        capabilities: ['議事録要約', 'TODO抽出', 'KPIコメント', '週次資料生成', 'タスク棚卸し', 'Notion/Sheets連携'],
        flow: sharedFlow.report,
      },
      {
        id: 'knowledge-base',
        label: '社内ナレッジ検索',
        rate: 0.42,
        description: '仕様書、議事録、Slack履歴の検索・回答',
        candidates: ['社内資料の検索回答', 'FAQ・手順書の整備', '問い合わせ履歴の再利用'],
        examples: ['社内資料を横断検索して根拠つき回答', '過去の判断履歴を要約', '頻出質問をFAQ候補として抽出'],
        capabilities: ['RAG構築', '社内検索', '根拠つき回答', 'FAQ更新', '履歴要約', '権限設計'],
        flow: sharedFlow.knowledge,
      },
    ],
    issues: [
      { id: 'ticket-repeat', label: '似た問い合わせへの返信が繰り返し発生する', bonus: 0.05 },
      { id: 'meeting-report', label: '議事録・週次報告・進捗整理に時間がかかる', bonus: 0.05 },
      { id: 'knowledge-scattered', label: '仕様や判断履歴がSlack・Docsに分散している', bonus: 0.04 },
      { id: 'handoff', label: '担当者への振り分けや確認が属人化している', bonus: 0.03 },
    ],
  },
  {
    id: 'construction',
    label: '建設・工事',
    multiplier: 0.96,
    workTypes: [
      {
        id: 'site-report',
        label: '現場報告・写真整理',
        rate: 0.5,
        description: '現場写真、日報、報告書の整理',
        candidates: ['現場日報の自動整理', '写真・書類の分類', '安全書類の作成補助'],
        examples: ['現場写真と日報を案件別に整理', '報告書の下書きを自動作成', '安全書類の不足項目をチェック'],
        capabilities: ['写真分類', '日報要約', '報告書下書き', '案件台帳更新', '不足項目チェック', '週次共有'],
        flow: sharedFlow.report,
      },
      {
        id: 'estimate-docs',
        label: '見積・書類作成',
        rate: 0.44,
        description: '見積、請求、発注、協力会社連絡',
        candidates: ['見積書・請求書の下書き', '協力会社への定型連絡', '案件台帳の更新'],
        examples: ['見積依頼メールから案件台帳を更新', '請求書作成に必要な項目を抽出', '協力会社への確認文面を自動生成'],
        capabilities: ['メール解析', '帳票下書き', '台帳更新', '協力会社連絡', '抜け漏れ確認', 'PDF情報抽出'],
        flow: sharedFlow.data,
      },
      {
        id: 'project-contact',
        label: '案件連絡・確認',
        rate: 0.38,
        description: '顧客、協力会社、社内の確認連絡',
        candidates: ['案件連絡の自動整理', '確認事項の抜け漏れ防止', '進捗共有の自動通知'],
        examples: ['案件ごとの確認事項を自動リスト化', '未回答の連絡をリマインド', '進捗共有メールを自動作成'],
        capabilities: ['連絡整理', 'TODO抽出', 'リマインド', '進捗通知', '議事録要約', '担当者振り分け'],
        flow: sharedFlow.support,
      },
    ],
    issues: [
      { id: 'site-photo', label: '現場写真や日報の整理が後回しになる', bonus: 0.05 },
      { id: 'docs-heavy', label: '見積・請求・安全書類などの作成負荷が大きい', bonus: 0.05 },
      { id: 'partner-contact', label: '協力会社や顧客との確認連絡が多い', bonus: 0.04 },
      { id: 'project-ledger', label: '案件情報が台帳・メール・紙に分かれている', bonus: 0.03 },
    ],
  },
  {
    id: 'recruiting',
    label: '人材・採用',
    multiplier: 1.05,
    workTypes: [
      {
        id: 'candidate-screening',
        label: '応募者対応・一次選考',
        rate: 0.58,
        description: '応募者返信、書類確認、面談調整',
        candidates: ['応募者一次対応', '書類スクリーニング補助', '面談日程調整の自動化'],
        examples: ['応募者への一次返信を自動作成', '応募書類から確認項目を抽出', '面談候補日を整理して案内'],
        capabilities: ['応募者返信', '書類要約', '条件確認', '日程調整', '選考ステータス更新', '担当者通知'],
        flow: sharedFlow.support,
      },
      {
        id: 'job-posting',
        label: '求人票・資料作成',
        rate: 0.46,
        description: '求人票、スカウト文、提案資料の作成',
        candidates: ['求人票・スカウト文作成', '候補者提案資料の下書き', '採用レポート作成'],
        examples: ['求人要件から求人票を下書き', '候補者に合わせたスカウト文を作成', '採用活動の週次レポートを自動生成'],
        capabilities: ['求人票作成', 'スカウト文生成', '提案資料下書き', '採用レポート', '文面AB案', '媒体別調整'],
        flow: sharedFlow.report,
      },
      {
        id: 'candidate-data',
        label: '候補者データ整理',
        rate: 0.52,
        description: '応募情報、進捗、面談メモの整理',
        candidates: ['応募者データの自動整理', '選考進捗の可視化', '面談メモの要約'],
        examples: ['応募者情報を一覧へ自動整形', '面談メモから懸念点を抽出', '選考進捗の停滞を通知'],
        capabilities: ['応募者台帳更新', '面談メモ要約', '進捗可視化', '重複検知', '次アクション通知', 'レポート生成'],
        flow: sharedFlow.data,
      },
    ],
    issues: [
      { id: 'candidate-reply', label: '応募者への返信や日程調整が追いつかない', bonus: 0.05 },
      { id: 'screening', label: '書類確認や一次スクリーニングに時間がかかる', bonus: 0.05 },
      { id: 'job-docs', label: '求人票・スカウト文・提案資料の作成が多い', bonus: 0.04 },
      { id: 'candidate-status', label: '候補者情報や進捗が分散している', bonus: 0.03 },
    ],
  },
  {
    id: 'real-estate',
    label: '不動産',
    multiplier: 1.0,
    workTypes: [
      {
        id: 'property-inquiry',
        label: '反響・問い合わせ対応',
        rate: 0.5,
        description: '物件問い合わせ、条件確認、内見調整',
        candidates: ['反響一次対応', '内見日程調整', '物件条件の自動整理'],
        examples: ['物件問い合わせに一次返信', '希望条件を整理して担当へ共有', '内見候補日を自動案内'],
        capabilities: ['反響一次対応', '条件ヒアリング', '内見調整', '担当者通知', '追客メモ作成', 'CRM連携'],
        flow: sharedFlow.support,
      },
      {
        id: 'property-docs',
        label: '物件資料・契約書類',
        rate: 0.44,
        description: '物件資料、契約関連、説明書類の作成',
        candidates: ['物件資料の下書き', '契約書類の確認補助', '顧客向けメール作成'],
        examples: ['物件情報から紹介文を作成', '契約書類の確認観点を整理', '顧客向け案内メールを下書き'],
        capabilities: ['物件紹介文', '資料下書き', '契約確認補助', 'メール作成', 'PDF整理', '説明文生成'],
        flow: sharedFlow.report,
      },
      {
        id: 'customer-ledger',
        label: '顧客・物件台帳整理',
        rate: 0.52,
        description: 'CRM、物件情報、追客履歴の更新',
        candidates: ['顧客台帳の自動更新', '追客履歴の要約', '物件情報の整理'],
        examples: ['追客履歴を要約してCRMへ反映', '物件情報を一覧化', '次回連絡が必要な顧客を抽出'],
        capabilities: ['CRM更新', '追客履歴要約', '物件台帳整理', '次アクション抽出', '重複チェック', 'リマインド'],
        flow: sharedFlow.data,
      },
    ],
    issues: [
      { id: 'lead-response', label: '反響対応や条件確認の初動に時間がかかる', bonus: 0.05 },
      { id: 'viewing-schedule', label: '内見調整や追客連絡が属人化している', bonus: 0.04 },
      { id: 'property-docs', label: '物件資料や契約関連書類の作成が多い', bonus: 0.04 },
      { id: 'property-data', label: '顧客・物件・追客情報が分散している', bonus: 0.03 },
    ],
  },
  {
    id: 'other',
    label: 'その他',
    multiplier: 0.94,
    workTypes: [
      {
        id: 'general-support',
        label: '問い合わせ・受付対応',
        rate: 0.44,
        description: 'メール、フォーム、電話メモ、一次返信',
        candidates: ['問い合わせ一次対応', 'よくある質問の自動回答', '担当者振り分け'],
        examples: ['フォーム問い合わせを内容別に分類', 'よくある質問へ一次返信', '担当者へ要約つきで通知'],
        capabilities: ['問い合わせ分類', '一次返信', '担当者振り分け', 'FAQ化', '通知連携', '履歴保存'],
        flow: sharedFlow.support,
      },
      {
        id: 'general-report',
        label: '資料・レポート作成',
        rate: 0.48,
        description: '報告書、議事録、集計、資料の下書き',
        candidates: ['資料・レポート作成', '議事録・要約', 'データ集計の自動化'],
        examples: ['議事録から報告書を下書き', '毎月の集計を自動レポート化', '資料のたたき台を作成'],
        capabilities: ['議事録要約', '資料下書き', '集計自動化', 'レポート生成', '表作成', 'メール配信'],
        flow: sharedFlow.report,
      },
      {
        id: 'general-data',
        label: 'データ入力・転記',
        rate: 0.56,
        description: 'フォーム、CSV、台帳、システム間の転記',
        candidates: ['データ入力・転記', '台帳更新', '情報整理・検索'],
        examples: ['フォーム内容を台帳へ自動転記', 'CSVの表記揺れを整理', '入力漏れや重複をチェック'],
        capabilities: ['データ抽出', '転記自動化', '台帳更新', '表記揺れ補正', '重複検知', 'エラー通知'],
        flow: sharedFlow.data,
      },
    ],
    issues: [
      { id: 'repeat-work', label: '毎月・毎週の定型作業に時間がかかっている', bonus: 0.05 },
      { id: 'manual-input', label: '入力・転記・確認作業が手作業で残っている', bonus: 0.05 },
      { id: 'mail-form', label: 'メールやフォームからの確認・返信が多い', bonus: 0.04 },
      { id: 'info-search', label: '必要な情報を探すのに時間がかかる', bonus: 0.03 },
    ],
  },
];

function formatYen(amount: number): string {
  if (amount >= 10000) {
    const man = amount / 10000;
    const rounded = Math.round(man * 10) / 10;
    const display =
      rounded % 1 === 0
        ? rounded.toLocaleString()
        : rounded.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return `${display}万円`;
  }
  return `${amount.toLocaleString()}円`;
}

function toHourlyRate(mode: PayMode, value: number): number {
  if (mode === 'monthly') return (value * 10000) / 160;
  if (mode === 'annual') return (value * 10000) / 1920;
  return value;
}

function displayPayValue(mode: PayMode, value: number): string {
  if (mode === 'hourly') return `${value.toLocaleString()}円`;
  return `${value.toLocaleString()}万円`;
}

export default function ROISimulator() {
  const [participantCount, setParticipantCount] = useState(3);
  const [industryId, setIndustryId] = useState(INDUSTRIES[0].id);
  const [selectedWorkType, setSelectedWorkType] = useState(INDUSTRIES[0].workTypes[0].id);
  const [hoursPerPerson, setHoursPerPerson] = useState(8);
  const [payMode, setPayMode] = useState<PayMode>('hourly');
  const [payValue, setPayValue] = useState(PAY_MODES[0].defaultValue);
  const [checkedIssues, setCheckedIssues] = useState<string[]>(INDUSTRIES[0].issues.slice(0, 2).map((issue) => issue.id));
  const [customIssue, setCustomIssue] = useState('');

  const currentIndustry = INDUSTRIES.find((industry) => industry.id === industryId) ?? INDUSTRIES[0];
  const currentWorkType = currentIndustry.workTypes.find((workType) => workType.id === selectedWorkType) ?? currentIndustry.workTypes[0];
  const currentPayMode = PAY_MODES.find((mode) => mode.id === payMode) ?? PAY_MODES[0];
  const hourlyRate = toHourlyRate(payMode, payValue);

  const reductionRate = useMemo(() => {
    const issueBonus = currentIndustry.issues
      .filter((issue) => checkedIssues.includes(issue.id))
      .reduce((sum, issue) => sum + issue.bonus, 0);
    const customBonus = customIssue.trim() ? 0.02 : 0;
    return Math.min((currentWorkType.rate + issueBonus + customBonus) * currentIndustry.multiplier, 0.82);
  }, [checkedIssues, currentIndustry, currentWorkType.rate, customIssue]);

  const calculate = useCallback(() => {
    const totalHoursMonthly = participantCount * hoursPerPerson;
    const reducedHoursMonthly = totalHoursMonthly * reductionRate;
    const remainingHoursMonthly = Math.max(totalHoursMonthly - reducedHoursMonthly, 0);
    const costReductionMonthly = reducedHoursMonthly * hourlyRate;
    const costReductionAnnual = costReductionMonthly * 12;
    const paybackMonths = Math.max(1.2, Math.min(8.8, 1800000 / Math.max(costReductionMonthly, 1)));
    const focusHours = Math.round(reducedHoursMonthly);
    return { totalHoursMonthly, reducedHoursMonthly, remainingHoursMonthly, costReductionMonthly, costReductionAnnual, paybackMonths, focusHours };
  }, [hourlyRate, hoursPerPerson, participantCount, reductionRate]);

  const {
    totalHoursMonthly,
    reducedHoursMonthly,
    remainingHoursMonthly,
    costReductionMonthly,
    costReductionAnnual,
    paybackMonths,
    focusHours,
  } = calculate();

  const annualMan = Math.round((costReductionAnnual / 10000) * 10) / 10;
  const monthlySalaryDisplay = formatYen(hourlyRate * 160);
  const annualSalaryDisplay = formatYen(hourlyRate * 1920);
  const recommendations = currentWorkType.candidates.slice(0, 3);
  const examples = currentWorkType.examples.slice(0, 3);

  const handleIndustryChange = (value: string) => {
    const nextIndustry = INDUSTRIES.find((industry) => industry.label === value) ?? INDUSTRIES[0];
    setIndustryId(nextIndustry.id);
    setSelectedWorkType(nextIndustry.workTypes[0].id);
    setCheckedIssues(nextIndustry.issues.slice(0, 2).map((issue) => issue.id));
    setCustomIssue('');
  };

  const handlePayModeChange = (mode: PayMode) => {
    const nextMode = PAY_MODES.find((item) => item.id === mode) ?? PAY_MODES[0];
    setPayMode(nextMode.id);
    setPayValue(nextMode.defaultValue);
  };

  const toggleIssue = (id: string) => {
    setCheckedIssues((current) => (
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    ));
  };

  const downloadReport = () => {
    const report = [
      'WaiWai AI 簡易診断レポート',
      '',
      `業種: ${currentIndustry.label}`,
      `対象人数: ${participantCount.toLocaleString()}人`,
      `対象業務: ${currentWorkType.label}`,
      `業務説明: ${currentWorkType.description}`,
      `1人あたり月間作業時間: 約${hoursPerPerson.toLocaleString()}時間`,
      `月間対象業務時間: 約${Math.round(totalHoursMonthly).toLocaleString()}時間`,
      `削減率目安: 約${Math.round(reductionRate * 100)}%`,
      `月間削減時間: 約${Math.round(reducedHoursMonthly).toLocaleString()}時間`,
      `月間削減額: 約${formatYen(Math.round(costReductionMonthly))}`,
      `年間削減額: 約${formatYen(Math.round(costReductionAnnual))}`,
      `投資回収目安: 約${paybackMonths.toFixed(1)}ヶ月`,
      '',
      '優先候補:',
      ...recommendations.map((item, index) => `${index + 1}. ${item}`),
    ].join('\n');

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'waiwai-ai-simulation-report.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-0">
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.45),transparent_18%),radial-gradient(circle_at_70%_64%,rgba(37,99,235,0.28),transparent_28%),linear-gradient(135deg,#020617_0%,#08224a_48%,#021025_100%)]" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[58%] opacity-90 lg:block" aria-hidden="true">
          <div className="absolute right-[-10%] top-6 h-64 w-[740px] rotate-[-12deg] rounded-[999px] border border-cyan-300/25" />
          <div className="absolute right-[-8%] top-14 h-44 w-[680px] rotate-[-9deg] rounded-[999px] border border-blue-300/25" />
          <div className="absolute right-0 top-24 h-px w-[760px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
          <div className="absolute right-0 top-36 h-px w-[680px] bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
          <div className="absolute right-24 top-20 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_28px_12px_rgba(34,211,238,0.75)]" />
          <div className="absolute right-72 top-40 h-2 w-2 rounded-full bg-blue-200 shadow-[0_0_20px_8px_rgba(96,165,250,0.6)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 pb-32 pt-14 sm:px-6 sm:pb-36 sm:pt-18 lg:px-0">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-blue-200">Cost Simulator</p>
            <h2 className="text-[38px] font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-[56px]">
              AI導入で、
              <br />
              どの業務を
              <br />
              どれくらい<span className="text-blue-300">減らせるか。</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-blue-100/85 sm:text-base sm:leading-8">
              業種と対象業務を選ぶと、よくある課題・優先候補・活用プランが切り替わります。まだ何をAI化できるか分からない場合は、無料相談で一緒に整理できます。
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
              {['業種と業務を選ぶ', '人数と単価を入れる', '優先候補を見る'].map((step, index) => (
                <div key={step} className="contents">
                  <div>
                    <p className="text-xl font-black text-blue-300">0{index + 1}</p>
                    <p className="mt-1 text-xs font-black text-blue-100">{step}</p>
                  </div>
                  {index < 2 && <ArrowRight className="h-4 w-4 text-blue-200/70" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-[1120px] px-5 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_34px_100px_-64px_rgba(15,23,42,0.9)]">
          <div className="grid lg:grid-cols-[390px_1fr]">
            <div className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mb-6">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-700">Simple Input</p>
                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">対象業務について</h3>
                <p className="mt-2 text-xs font-bold leading-5 text-slate-500">
                  会社全体ではなく、AI化したい業務に関わる人数と時間を入力してください。
                </p>
              </div>

              <div className="mb-5 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <p className="flex items-center gap-2 text-sm font-black text-slate-950">
                  <Calculator className="h-4 w-4 text-blue-700" />
                  何がAI化できるか分からない方へ
                </p>
                <p className="mt-2 text-xs font-bold leading-5 text-slate-600">
                  入力せずに無料相談でも大丈夫です。業務の棚卸しから一緒に整理します。
                </p>
                <a href="/contact" className="mt-3 inline-flex items-center gap-2 text-xs font-black text-blue-700">
                  まずは無料相談へ
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="space-y-5">
                <OptionGrid
                  icon={<Settings2 className="h-5 w-5" />}
                  label="業種"
                  value={currentIndustry.label}
                  options={INDUSTRIES.map((industry) => industry.label)}
                  onChange={handleIndustryChange}
                />
                <WorkTypeChooser
                  icon={<Sparkles className="h-5 w-5" />}
                  label="主にAI化したい業務"
                  value={currentWorkType.id}
                  options={currentIndustry.workTypes}
                  onChange={setSelectedWorkType}
                />
                <NumberField
                  icon={<Users className="h-5 w-5" />}
                  label="この業務に関わる人数"
                  description="会社全体ではなく、対象業務を担当している人数を入力してください。"
                  value={participantCount}
                  min={1}
                  max={500}
                  onChange={setParticipantCount}
                />

                <div>
                  <p className="mb-1 text-sm font-black text-slate-950">業種でよくある課題</p>
                  <p className="mb-3 text-xs font-bold text-slate-500">該当するものを選ぶと、削減見込みと優先候補に反映されます。</p>
                  <div className="space-y-3">
                    {currentIndustry.issues.map((issue) => (
                      <label key={issue.id} className="flex cursor-pointer items-start gap-3 text-sm font-bold leading-6 text-slate-700">
                        <input
                          type="checkbox"
                          checked={checkedIssues.includes(issue.id)}
                          onChange={() => toggleIssue(issue.id)}
                          className="mt-1 h-4 w-4 rounded border-slate-300 accent-blue-700"
                        />
                        <span>{issue.label}</span>
                      </label>
                    ))}
                  </div>
                  <textarea
                    value={customIssue}
                    onChange={(event) => setCustomIssue(event.target.value)}
                    placeholder="その他、気になる業務があれば入力"
                    className="mt-4 min-h-20 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="grid gap-4 border-t border-slate-200 pt-5">
                  <CompactSlider
                    id="roi-hours"
                    label="対象業務に1人がかける月間時間"
                    helper={`${currentWorkType.label}に、担当者1人あたり毎月どれくらい使っているか`}
                    value={hoursPerPerson}
                    min={2}
                    max={80}
                    step={2}
                    unit="時間"
                    onChange={setHoursPerPerson}
                  />

                  <div>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-sm font-black text-slate-950">人件費の入力方法</p>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{currentPayMode.label}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {PAY_MODES.map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => handlePayModeChange(mode.id)}
                          className={`min-h-10 rounded-lg border px-2 text-xs font-black transition ${
                            payMode === mode.id
                              ? 'border-blue-700 bg-blue-700 text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200'
                          }`}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <CompactSlider
                    id="roi-pay"
                    label={`平均${currentPayMode.label}`}
                    value={payValue}
                    min={currentPayMode.min}
                    max={currentPayMode.max}
                    step={currentPayMode.step}
                    unit={currentPayMode.unit}
                    onChange={setPayValue}
                    formatDisplay={(value) => displayPayValue(payMode, value)}
                  />
                  <p className="rounded-lg bg-slate-50 px-3 py-2 text-[11px] font-bold leading-5 text-slate-500">
                    換算目安: <span className="text-blue-700">時給 約{Math.round(hourlyRate).toLocaleString()}円</span> / 月給 約{monthlySalaryDisplay} / 年収 約{annualSalaryDisplay}
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-slate-950 px-6 text-sm font-black text-white shadow-[0_18px_38px_-20px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  この内容で相談する
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-slate-50/60 p-5 sm:p-7">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-700">Result Summary</p>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">診断結果サマリー</h3>
                </div>
                <button
                  type="button"
                  onClick={downloadReport}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 text-xs font-black text-blue-700 transition hover:bg-blue-100"
                >
                  <Download className="h-4 w-4" />
                  レポートをダウンロード
                </button>
              </div>

              <div className="rounded-lg bg-slate-950 p-5 text-white sm:p-6">
                <div className="grid gap-5 sm:grid-cols-[1fr_190px] sm:items-center">
                  <div>
                    <p className="text-xs font-black text-blue-200">年間削減見込み</p>
                    <p className="mt-2 text-6xl font-black leading-none tracking-tight text-blue-300 sm:text-7xl">
                      {annualMan.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                      <span className="ml-1 text-2xl text-white">万円</span>
                    </p>
                  </div>
                  <div className="border-t border-white/20 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                    <p className="text-xs font-black text-blue-200">投資回収期間の目安</p>
                    <p className="mt-2 text-3xl font-black">
                      約 {paybackMonths.toFixed(1)}
                      <span className="ml-1 text-base">ヶ月</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-0 overflow-hidden rounded-lg border border-slate-200 bg-white sm:grid-cols-2">
                <Metric icon={<Clock className="h-5 w-5" />} label="月間削減時間" value={`約 ${Math.round(reducedHoursMonthly).toLocaleString()} 時間`} sub={`${Math.round(totalHoursMonthly).toLocaleString()}時間中の目安`} />
                <Metric icon={<BadgeJapaneseYen className="h-5 w-5" />} label="月間コスト削減" value={`約 ${formatYen(Math.round(costReductionMonthly))}`} sub="人件費換算" />
              </div>

              <div className="mt-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-bold leading-6 text-slate-600">
                  削減時間は、対象業務の現在の月間作業時間に、業務の自動化しやすさ・課題数・業種特性を掛けて算出した概算です。削減した約{focusHours.toLocaleString()}時間は、接客・営業・改善など人が判断すべき仕事へ戻す前提で見ています。
                </p>
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-sm font-black text-slate-950">近い活用事例</p>
                  <p className="text-xs font-bold text-slate-500">{currentIndustry.label} / {currentWorkType.label}</p>
                </div>
                <div className="divide-y divide-slate-100">
                  {examples.map((item, index) => (
                    <div key={item} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 py-3 text-sm">
                      <span className="font-black text-blue-700">0{index + 1}</span>
                      <span className="font-black text-slate-800">{item}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-500">
                        事例
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-sm font-black text-slate-950">WaiWai AIでできること</p>
                  <p className="text-xs font-bold text-slate-500">選択内容に合わせて自動更新</p>
                </div>
                <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {currentWorkType.capabilities.map((item) => (
                    <div key={item} className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-black text-blue-900">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                  {currentWorkType.flow.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`${currentWorkType.id}-${item.title}`} className="contents">
                        <div className="rounded-lg border border-blue-100 bg-white p-4 text-center">
                          <Icon className="mx-auto h-6 w-6 text-blue-700" />
                          <p className="mt-3 text-xs font-black text-slate-950">{item.title}</p>
                          <p className="mt-1 text-[10px] font-bold leading-4 text-slate-500">{item.body}</p>
                        </div>
                        {index < currentWorkType.flow.length - 1 && <ArrowRight className="mx-auto hidden h-5 w-5 text-blue-700 sm:block" />}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-5 text-center text-sm font-bold leading-7 text-slate-600">
                  {currentWorkType.label}の確認・判断・記録をAIで肩代わりし、人がやるべき判断や顧客対応に時間を戻します。
                </p>
              </div>

              <div className="mt-4 grid gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 shrink-0 text-blue-700" />
                  <p className="text-sm font-black text-slate-950">何をAI化すべきか、無料で一緒に整理します</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-blue-800"
                >
                  無料で相談する
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-3">
          {[
            ['代表が直接対応', '設計からヒアリング、実装まで代表自ら手を動かします。'],
            ['小さく始めて、すぐ改善', '大きなシステムではなく、効果が見えやすい業務から着手します。'],
            ['再現性のある仕組み化', '属人化せず、社内にノウハウが残る形で構築します。'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
              <CheckCircle2 className="h-6 w-6 text-blue-700" />
              <p className="mt-4 text-sm font-black text-slate-950">{title}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldLabel({ icon, label, description }: { icon: React.ReactNode; label: string; description?: string }) {
  return (
    <div className="mb-2">
      <p className="flex items-center gap-2 text-sm font-black text-slate-950">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-700">{icon}</span>
        {label}
      </p>
      {description && <p className="mt-2 pl-11 text-xs font-bold leading-5 text-slate-500">{description}</p>}
    </div>
  );
}

function OptionGrid({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <FieldLabel icon={icon} label={label} />
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`min-h-11 rounded-lg border px-3 text-left text-xs font-black transition ${
              value === option
                ? 'border-blue-700 bg-blue-700 text-white shadow-[0_10px_24px_-18px_rgba(29,78,216,0.9)]'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkTypeChooser({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: WorkType[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <FieldLabel icon={icon} label={label} />
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`w-full rounded-lg border px-4 py-3 text-left transition ${
              value === option.id
                ? 'border-blue-700 bg-blue-50 shadow-[0_10px_24px_-22px_rgba(29,78,216,0.9)]'
                : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50'
            }`}
          >
            <span className="block text-sm font-black text-slate-950">{option.label}</span>
            <span className="mt-1 block text-[11px] font-bold leading-5 text-slate-500">{option.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function NumberField({
  icon,
  label,
  description,
  value,
  min,
  max,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  description?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <FieldLabel icon={icon} label={label} description={description} />
      <div className="grid grid-cols-[44px_1fr_44px] overflow-hidden rounded-lg border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="min-h-12 border-r border-slate-200 text-xl font-black text-slate-500 transition hover:bg-slate-50"
          aria-label="人数を減らす"
        >
          -
        </button>
        <div className="flex items-center justify-center gap-2 px-3">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isFinite(next)) onChange(Math.min(max, Math.max(min, Math.round(next))));
            }}
            className="h-12 w-20 text-center text-lg font-black tabular-nums text-slate-950 outline-none"
          />
          <span className="text-sm font-black text-slate-500">人</span>
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="min-h-12 border-l border-slate-200 text-xl font-black text-blue-700 transition hover:bg-blue-50"
          aria-label="人数を増やす"
        >
          +
        </button>
      </div>
    </div>
  );
}

function CompactSlider({
  id,
  label,
  helper,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  formatDisplay,
}: {
  id: string;
  label: string;
  helper?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  formatDisplay?: (value: number) => string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;
  const displayValue = formatDisplay ? formatDisplay(value) : `${value.toLocaleString()}${unit}`;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <div>
          <label htmlFor={id} className="text-sm font-black text-slate-950">
            {label}
          </label>
          {helper && <p className="mt-1 text-[11px] font-bold leading-5 text-slate-500">{helper}</p>}
        </div>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-black tabular-nums text-blue-700">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-blue-700"
        style={{
          background: `linear-gradient(to right, #1d4ed8 0%, #1d4ed8 ${percentage}%, #dbeafe ${percentage}%, #dbeafe 100%)`,
        }}
      />
    </div>
  );
}

function Metric({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="border-b border-slate-200 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        {icon}
      </div>
      <p className="text-[11px] font-black text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-[11px] font-bold text-slate-400">{sub}</p>
    </div>
  );
}
