export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  image: {
    src: string;
    alt: string;
  };
};

export type ContentCard = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type OfficialLinkContent = {
  label: string;
  href: string;
  note: string;
};

export type SiteContent = {
  hero: HeroContent;
  features: ContentCard[];
  life: ContentCard[];
  officialLink: OfficialLinkContent;
};

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "Kamiyama Marugoto Kosen",
    title: "つくる力で、未来を動かす。",
    description:
      "神山まるごと高専は、テクノロジー・デザイン・起業家精神を横断して学ぶ実践型の学校です。暮らしに近い問いから出発し、仲間とともに価値を形にしていきます。",
    primaryCtaLabel: "公式サイトを見る",
    primaryCtaHref: "https://kamiyama.ac.jp/",
    image: {
      src: "/images/placeholders/hero-campus.svg",
      alt: "学びの雰囲気を表したキャンパスイメージ",
    },
  },
  features: [
    {
      title: "教室を越えるプロジェクト型学習",
      description:
        "課題は社会にあるテーマから設計。授業で得た知識をそのまま実装に結びつけ、試作と改善を繰り返して学びます。",
      image: {
        src: "/images/placeholders/feature-project.svg",
        alt: "プロジェクト制作のイメージ",
      },
    },
    {
      title: "多様な専門が交わるチーム活動",
      description:
        "プログラミング、デザイン、ビジネスの視点を持つ学生が協働し、1つのアイデアをサービスとして成立させる経験を重ねます。",
      image: {
        src: "/images/placeholders/feature-collab.svg",
        alt: "学生のコラボレーションのイメージ",
      },
    },
    {
      title: "地域とつながる実証フィールド",
      description:
        "神山の環境そのものを学びの舞台に、実際の利用者と向き合いながらプロダクトを磨くプロセスを体験します。",
      image: {
        src: "/images/placeholders/feature-field.svg",
        alt: "地域連携のフィールドワークイメージ",
      },
    },
  ],
  life: [
    {
      title: "朝のチェックインで一日を設計",
      description:
        "その日の目標をチームで共有してから学習スタート。短い対話を通じて、個人とチームの集中をそろえていきます。",
      image: {
        src: "/images/placeholders/life-morning.svg",
        alt: "朝のミーティングイメージ",
      },
    },
    {
      title: "放課後は探究とクラブの時間",
      description:
        "授業外でも、ものづくりや地域活動に取り組む場が充実。興味から始まる挑戦が、次の学びのエネルギーになります。",
      image: {
        src: "/images/placeholders/life-club.svg",
        alt: "放課後の活動イメージ",
      },
    },
    {
      title: "寮や地域で育つコミュニティ",
      description:
        "暮らしと学びが近い環境だからこそ、学年を越えた交流が自然に生まれます。日常の会話が新しいアイデアの種になります。",
      image: {
        src: "/images/placeholders/life-community.svg",
        alt: "コミュニティの様子を示すイメージ",
      },
    },
  ],
  officialLink: {
    label: "募集要項や最新情報を公式サイトで確認する",
    href: "https://kamiyama.ac.jp/",
    note: "リンク先 URL は src/data/siteContent.ts でいつでも差し替えできます。",
  },
};
