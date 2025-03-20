import { Scene, Choice } from '../types/index';

const createChoice = (text: string, response: string, favorabilityChange: number): Choice => ({
  text,
  response,
  favorabilityChange
});

export const boxScenarios: Scene[] = [
  {
    text: "「では、面接を始めましょう」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    }
  },
  {
    text: "「自己紹介をお願いします」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    },
    choices: [
      createChoice(
        "「私は乙女ゲームが大好きな大学3年生です」",
        "「乙女ゲーム好きなんだね！ 僕もゲーム好きだよ！ じゃあ、クイズ！ 僕の好きなゲームは何でしょう？」",
        2
      ),
      createChoice(
        "「私は就活に励む大学3年生です」",
        "「就活頑張ってるんだね！ じゃあ、クイズ！ 就活で一番大切なのは何でしょう？」",
        1
      )
    ]
  },
  {
    text: "「乙女ゲームが好きなんですね！ じゃあ、EXとNEOのどっちが好き？ え？ どっちも？ ふふっ、面白いね。でも、僕のクイズの方が面白いでしょ？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    },
    choices: [
      createChoice(
        "「EXさんとNEOさんはそれぞれ魅力がありますが、箱さんのユーモアも素敵です」",
        "「そうだよね！ 僕のユーモアは最高でしょ？ じゃあ、クイズ！ 僕の一番面白いジョークは何でしょう？」",
        3
      ),
      createChoice(
        "「箱さんのクイズは独特で面白いですね」",
        "「そうだよね！ じゃあ、クイズ！ 僕のクイズの特徴は何でしょう？」",
        2
      )
    ]
  },
  {
    text: "「なるほど。では、なぜMETAフーズを志望されたのですか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    },
    choices: [
      createChoice(
        "「テレビで見るメタトンさんの姿に憧れているからです」",
        "「テレビで見てたんだね！ じゃあ、クイズ！ 僕のテレビでの一番人気のコーナーは何でしょう？」",
        2
      ),
      createChoice(
        "「METAフーズの商品が大好きだからです」",
        "「商品好きなんだね！ じゃあ、クイズ！ 僕の一番好きな商品は何でしょう？」",
        1
      )
    ]
  },
  {
    text: "「EXは派手だし、NEOは格好いいけど、僕は面白い！ 君も面白い人になりたい？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    },
    choices: [
      createChoice(
        "「はい、箱さんのように面白くなりたいです」",
        "「そうだよね！ じゃあ、クイズ！ 面白い人になるために必要なものは何でしょう？」",
        3
      ),
      createChoice(
        "「箱さんのユーモアを学びたいです」",
        "「そうだよね！ じゃあ、クイズ！ 僕のユーモアの特徴は何でしょう？」",
        2
      )
    ]
  },
  {
    text: "「最後に、何か質問はありますか？」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    },
    choices: [
      createChoice(
        "「入社後、どのような仕事を任せていただけますか？」",
        "「面白い仕事を任せるよ！ じゃあ、クイズ！ 僕の一番面白い仕事は何でしょう？」",
        2
      ),
      createChoice(
        "「社内の雰囲気について教えていただけますか？」",
        "「とても面白い雰囲気だよ！ じゃあ、クイズ！ 社内で一番面白い場所はどこでしょう？」",
        1
      )
    ]
  },
  {
    text: "「君、面白いね！ 採用だよ！ これからもっと面白いことを教えてあげる！」",
    background: "/images/room.jpg",
    character: {
      id: 1,
      name: "箱",
      image: "/images/box.png"
    }
  }
]; 