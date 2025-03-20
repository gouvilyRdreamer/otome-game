import { Scenario } from '../types';

export const exScenarios: Scenario[] = [
  {
    text: "「では、面接を始めましょう」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    }
  },
  {
    text: "「自己紹介をお願いします」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    },
    choices: [
      "「私は乙女ゲームが大好きな大学3年生です」",
      "「私は就活に励む大学3年生です」"
    ]
  },
  {
    text: "「乙女ゲームが好きなんですね！ 僕もエンターテイメントが大好きなんだ。でもね、NEOはああいうの苦手なんだよね。彼はもっと...」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    },
    choices: [
      "「NEOさんは独自の魅力を持っていますよ」",
      "「NEOさんも一緒に楽しめばいいのに」"
    ]
  },
  {
    text: "「なるほど。では、なぜMETAフーズを志望されたのですか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    },
    choices: [
      "「テレビで見るメタトンさんの姿に憧れているからです」",
      "「METAフーズの商品が大好きだからです」"
    ]
  },
  {
    text: "「君は僕のミューズになれるかな？ 僕と一緒に、もっと華やかな世界を作っていこう！」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    },
    choices: [
      "「はい、ぜひお手伝いさせてください！」",
      "「NEOさんも誘って、3人で一緒に作り上げていきましょう」"
    ]
  },
  {
    text: "「最後に、何か質問はありますか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    },
    choices: [
      "「入社後、どのような仕事を任せていただけますか？」",
      "「社内の雰囲気について教えていただけますか？」"
    ]
  },
  {
    text: "「素晴らしい！ 君は僕のミューズにぴったりだ！ 採用だよ！」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "メタトンEX",
      image: "/images/metaton_ex.png"
    }
  }
]; 