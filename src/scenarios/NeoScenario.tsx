import { Scenario } from '../types';

export const neoScenarios: Scenario[] = [
  {
    text: "「では、面接を始めましょう」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    }
  },
  {
    text: "「自己紹介をお願いします」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    },
    choices: [
      "「私は乙女ゲームが大好きな大学3年生です」",
      "「私は就活に励む大学3年生です」"
    ]
  },
  {
    text: "「...乙女ゲームか。君は美しいものに惹かれるのだな。では、私の姿はどう思う？ 殺戮兵器として作られた、この不完全な存在を」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    },
    choices: [
      "「あなたの姿は美しいと思います。強さと優しさを併せ持つ、特別な存在です」",
      "「あなたは箱やEXとは違う、独自の魅力を持っています」"
    ]
  },
  {
    text: "「なるほど。では、なぜMETAフーズを志望されたのですか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    },
    choices: [
      "「テレビで見るメタトンさんの姿に憧れているからです」",
      "「METAフーズの商品が大好きだからです」"
    ]
  },
  {
    text: "「...君は私をどう思う？ 箱やEXのように華やかな舞台に立つことも、人々を笑顔にすることもできない、ただの兵器を」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    },
    choices: [
      "「あなたにはあなただけの価値があります。強さと優しさを併せ持つ、特別な存在です」",
      "「箱やEXとは違う、独自の魅力を持っています」"
    ]
  },
  {
    text: "「最後に、何か質問はありますか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    },
    choices: [
      "「入社後、どのような仕事を任せていただけますか？」",
      "「社内の雰囲気について教えていただけますか？」"
    ]
  },
  {
    text: "「...君の言葉は、私の心に響いた。少しだけ、自分を好きになれそうだ」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    }
  },
  {
    text: "「採用だ。君には私のそばにいてほしい」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンNEO",
      image: "/images/metaton_neo.png"
    }
  }
]; 