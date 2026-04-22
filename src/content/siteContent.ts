export type NavItem = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
  style: "primary" | "secondary";
};

export type FeatureCard = {
  title: string;
  description: string;
  label: string;
};

export type CampusCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ratio: "4:3" | "1:1";
};

export const siteMeta = {
  shortName: "神山まるごと高専",
  title: "神山まるごと高専 | ワクワクで未来をつくる学びの場",
  description:
    "神山まるごと高専の魅力を1ページで紹介するLPです。理念、学び、キャンパスライフ、アクセスをまとめて確認できます。",
  ogImage: "images/og-default.svg"
};

export const navItems: NavItem[] = [
  { label: "理念と特徴", href: "#philosophy" },
  { label: "キャンパスライフ", href: "#campus-life" },
  { label: "アクセス", href: "#access" },
  { label: "見学・相談", href: "#cta" }
];

export const heroContent = {
  id: "top",
  badge: "2026 School Intro Landing Page",
  title: "好奇心が、社会を変える力になる。",
  lead:
    "神山まるごと高専は、テクノロジーと地域をつなぐ実践型の学び場。手を動かし、仲間と考え、未来を自分たちでデザインします。",
  highlightPills: [
    "プロジェクト中心の学び",
    "全国から集まる仲間",
    "地域とつながる実践"
  ],
  actions: [
    { label: "キャンパスライフを見る", href: "#campus-life", style: "primary" },
    { label: "アクセスを確認する", href: "#access", style: "secondary" }
  ] as HeroAction[],
  image: "images/hero-placeholder.svg",
  imageAlt: "神山の空と学びの雰囲気を表現した仮ビジュアル"
};

export const philosophySection = {
  id: "philosophy",
  eyebrow: "IDEA & VALUE",
  title: "学びの中心にあるのは、問いを立てる力。",
  description:
    "知識を覚えるだけではなく、社会の課題を見つけて解決へつなげる力を育てます。ここでは、神山まるごと高専らしさを4つに分けて紹介します。",
  features: [
    {
      label: "Feature 01",
      title: "ものづくりと社会実装を往復する",
      description:
        "授業やプロジェクトで作ったアイデアを、地域や企業との連携で実際の課題解決に活かします。"
    },
    {
      label: "Feature 02",
      title: "多様なバックグラウンドが交わる",
      description:
        "全国各地から集まる学生が協働し、互いの得意分野を持ち寄って新しい価値をつくります。"
    },
    {
      label: "Feature 03",
      title: "失敗を歓迎する学習文化",
      description:
        "試行錯誤を前提に、振り返りと改善を繰り返すことで、自走できるエンジニアリング思考を育みます。"
    },
    {
      label: "Feature 04",
      title: "暮らしと学びが地続き",
      description:
        "自然豊かな神山の環境で、日常の暮らしや地域交流そのものが学びの材料になります。"
    }
  ] as FeatureCard[]
};

export const campusLifeSection = {
  id: "campus-life",
  eyebrow: "CAMPUS LIFE",
  title: "毎日がプロジェクト。学びは教室の外にも広がる。",
  description:
    "講義、実験、地域活動、寮生活まで、キャンパスライフ全体が成長の場です。画像は仮素材なので、後から正式写真へ差し替えできます。",
  cards: [
    {
      title: "プロトタイピングスタジオ",
      description:
        "デジタルとフィジカルを横断しながら、チームで試作と改善を高速で回す学習スペース。",
      image: "images/campus-workshop.svg",
      imageAlt: "制作活動をイメージした仮ビジュアル",
      ratio: "4:3"
    },
    {
      title: "寮での共同生活",
      description:
        "生活の中で自然に生まれる対話が、授業とは別の気づきや協働のきっかけを生みます。",
      image: "images/campus-dorm.svg",
      imageAlt: "寮生活をイメージした仮ビジュアル",
      ratio: "1:1"
    },
    {
      title: "地域連携のフィールドワーク",
      description:
        "神山の人や企業とともに、リアルな課題に向き合う実践的なプロジェクトに取り組みます。",
      image: "images/campus-community.svg",
      imageAlt: "地域連携をイメージした仮ビジュアル",
      ratio: "4:3"
    }
  ] as CampusCard[]
};

export const accessSection = {
  id: "access",
  eyebrow: "ACCESS",
  title: "神山の自然と、都市からのアクセスが両立する立地。",
  description:
    "詳細住所や交通案内は正式情報に合わせて更新してください。ここでは差し替えやすさを優先した仮情報を配置しています。",
  campusName: "神山まるごと高専（仮表記）",
  address: "徳島県名西郡神山町（正式住所は要差し替え）",
  accessList: [
    "徳島阿波おどり空港から車で約60分（目安）",
    "徳島駅周辺から高速バス・車で約50分（目安）",
    "現地見学時は公共交通の時刻を事前確認してください"
  ],
  mapCaption: "地図画像または埋め込みマップをここに差し替え"
};

export const ctaSection = {
  id: "cta",
  eyebrow: "JOIN US",
  title: "まずは雰囲気を見に来ませんか？",
  description:
    "学校説明会や見学相談の導線をここに集約します。今回はスコープ外のためフォーム実装は行わず、外部リンク想定のCTAを配置しています。",
  primaryAction: {
    label: "説明会・見学の最新情報を見る",
    href: "https://kamiyama.ac.jp"
  },
  secondaryAction: {
    label: "トップへ戻る",
    href: "#top"
  }
};