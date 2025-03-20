import { Scene, Choice } from '../types/index';

const createChoice = (
  text: string, 
  responses: string[], 
  favorabilityChange: number,
  nextScene?: number
): Choice => ({
  text,
  responses,
  favorabilityChange,
  nextScene
});

export const createExScenarios = (playerName: string): Scene[] => {
  return [
    {
      text: `「${playerName}さん、こんにちは。メタトンEXです。」`,
      background: 'interview-room',
      character: {
        id: 1,
        name: 'メタトンEX',
        image: 'metaton-ex.png'
      }
    },
    {
      text: "「では、面接を始めましょう」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      }
    },
    {
      text: "「自己紹介をお願いします」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      },
      choices: [
        createChoice(
          "「私は乙女ゲームが大好きな大学3年生です」",
          [
            "「乙女ゲーム好きなんだね！ じゃあ、クイズ！ 僕の好きなゲームは何でしょう？」",
            "「ヒント：僕の名前に関係があるよ！」"
          ],
          2,
          3
        ),
        createChoice(
          "「私は就活に励む大学3年生です」",
          [
            "「就活頑張ってるんだね！」",
            "「じゃあ、クイズ！ 就活で一番大切なのは何でしょう？」",
            "「ヒント：僕の箱の中身を見てみて！」"
          ],
          1,
          3
        )
      ]
    },
    {
      text: "「乙女ゲームが好きなんですね！ じゃあ、箱とNEOのどっちが好き？ え？ どっちも？ ふふっ、面白いね。でも、僕のクイズの方が面白いでしょ？」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      },
      choices: [
        createChoice(
          "「箱さんとNEOさんはそれぞれ魅力がありますが、EXさんのユーモアも素敵です」",
          [
            "「そうだよね！ 僕のユーモアは最高でしょ？ じゃあ、クイズ！ 僕の一番面白いジョークは何でしょう？」",
            "「ヒント：僕のテレビ番組でよく使うネタだよ！」"
          ],
          3,
          4
        ),
        createChoice(
          "「EXさんのクイズは独特で面白いですね」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のクイズの特徴は何でしょう？」",
            "「ヒント：僕のキャラクター性に関係があるよ！」"
          ],
          2,
          4
        )
      ]
    },
    {
      text: "「なるほど。では、なぜMETAフーズを志望されたのですか？」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      },
      choices: [
        createChoice(
          "「テレビで見るメタトンさんの姿に憧れているからです」",
          [
            "「テレビで見てたんだね！ じゃあ、クイズ！ 僕のテレビでの一番人気のコーナーは何でしょう？」",
            "「ヒント：僕の特技を活かしたコーナーだよ！」"
          ],
          2,
          5
        ),
        createChoice(
          "「METAフーズの商品が大好きだからです」",
          [
            "「商品好きなんだね！ じゃあ、クイズ！ 僕の一番好きな商品は何でしょう？」",
            "「ヒント：僕のキャラクター商品だよ！」"
          ],
          1,
          5
        )
      ]
    },
    {
      text: "「箱は面白いし、NEOは格好いいけど、僕は派手！ 君も派手になりたい？」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      },
      choices: [
        createChoice(
          "「はい、EXさんのように派手になりたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 派手になるために必要なものは何でしょう？」",
            "「ヒント：僕のトレードマークだよ！」"
          ],
          3,
          6
        ),
        createChoice(
          "「EXさんのユーモアを学びたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のユーモアの特徴は何でしょう？」",
            "「ヒント：僕のテレビでのキャラクター性だよ！」"
          ],
          2,
          6
        )
      ]
    },
    {
      text: "「最後に、何か質問はありますか？」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      },
      choices: [
        createChoice(
          "「入社後、どのような仕事を任せていただけますか？」",
          [
            "「面白い仕事を任せるよ！ じゃあ、クイズ！ 僕の一番面白い仕事は何でしょう？」",
            "「ヒント：僕の特技を活かした仕事だよ！」"
          ],
          2,
          7
        ),
        createChoice(
          "「社内の雰囲気について教えていただけますか？」",
          [
            "「とても面白い雰囲気だよ！ じゃあ、クイズ！ 社内で一番面白い場所はどこでしょう？」",
            "「ヒント：僕のオフィスだよ！」"
          ],
          1,
          7
        )
      ]
    },
    {
      text: "「君、面白いね！ 採用だよ！ これからもっと面白いことを教えてあげる！」",
      background: "/images/room.jpg",
      character: {
        id: 2,
        name: "メタトンEX",
        image: "/images/metaton_ex.png"
      }
    }
  ];
}; 