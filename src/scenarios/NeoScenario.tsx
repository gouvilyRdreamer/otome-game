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

export const createNeoScenarios = (playerName: string): Scene[] => {
  return [
    {
      text: `「こんにちは。メタトンNEOです。」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: 'メタトンNEO',
        image: "/images/metaton_neo.png"
      }
    },
    {
      text: "「では、面接を始めましょう」",
      background: "/images/room.jpg",
      character: {
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
      }
    },
    {
      text: "「自己紹介をお願いします」",
      background: "/images/room.jpg",
      character: {
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
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
            "「ヒント：僕の格好良さに関係があるよ！」"
          ],
          1,
          3
        )
      ]
    },
    {
      text: "「乙女ゲームが好きなんですね！ じゃあ、EXと箱のどっちが好き？ え？ どっちも？ ふふっ、面白いね。でも、僕のクイズの方が面白いでしょ？」",
      background: "/images/room.jpg",
      character: {
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
      },
      choices: [
        createChoice(
          "「EXさんと箱さんはそれぞれ魅力がありますが、NEOさんの格好良さも素敵です」",
          [
            "「そうだよね！ 僕の格好良さは最高でしょ？ じゃあ、クイズ！ 僕の一番格好いいポーズは何でしょう？」",
            "「ヒント：僕のテレビ番組でよく使うポーズだよ！」"
          ],
          3,
          4
        ),
        createChoice(
          "「NEOさんのクイズは独特で面白いですね」",
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
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
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
      text: "「EXは派手だし、箱は面白いけど、僕は格好いい！ 君も格好よくなりたい？」",
      background: "/images/room.jpg",
      character: {
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
      },
      choices: [
        createChoice(
          "「はい、NEOさんのように格好よくなりたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 格好よくなるために必要なものは何でしょう？」",
            "「ヒント：僕のトレードマークだよ！」"
          ],
          3,
          6
        ),
        createChoice(
          "「NEOさんのクイズを学びたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のクイズの特徴は何でしょう？」",
            "「ヒント：僕の格好良さに関係があるよ！」"
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
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
      },
      choices: [
        createChoice(
          "「入社後、どのような仕事を任せていただけますか？」",
          [
            "「格好いい仕事を任せるよ！ じゃあ、クイズ！ 僕の一番格好いい仕事は何でしょう？」",
            "「ヒント：僕の特技を活かした仕事だよ！」"
          ],
          2,
          7
        ),
        createChoice(
          "「社内の雰囲気について教えていただけますか？」",
          [
            "「とても格好いい雰囲気だよ！ じゃあ、クイズ！ 社内で一番格好いい場所はどこでしょう？」",
            "「ヒント：僕のオフィスだよ！」"
          ],
          1,
          7
        )
      ]
    },
    {
      text: "「君、格好いいね！ 採用だよ！ これからもっと格好いいことを教えてあげる！」",
      background: "/images/room.jpg",
      character: {
        id: 3,
        name: "メタトンNEO",
        image: "/images/metaton_neo.png"
      }
    }
  ];
}; 