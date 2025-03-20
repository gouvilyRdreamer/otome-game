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

export const createBoxScenarios = (playerName: string): Scene[] => {
  return [
    {
      text: "「はじめまして！\nキミに会えるのを楽しみにしてたよ！」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      text: "「よっこいせ、っと」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      text: "（えっ？箱・・・？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "（どうやって、椅子に座って・・・？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "（？？？？？？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「さあ、始めようか。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「それじゃ、まずはキミの名前を教えてくれるかな？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "（うう・・・　緊張する・・・）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「うんうん、緊張しちゃうよね～。ボク、かたっくるしいのは正直ニガテでさ。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「じゃあちょっと雑談！」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「ボク、昔からお芝居が好きで、\n去年社内にサークル作っちゃったんだよね」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: `「${playerName}ちゃんはなにか趣味とか特技ってあるかな？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「趣味や特技はありますか？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「マンガを読むのが好きです。」",
          [
            "「へえ、そうなんだ。」",
            "「どんなジャンルが好きなの？」",
            "「・・・」",
            "ボク、何かに打ち込んでいる子って好きだなぁ」",
            "（・・・あれ、意外と怖くない、ヒト・・・？なのかな？）"
          ],
          2,
          3
        ),
        createChoice(
          "「就活に打ち込んでます、かね」",
          [
            "「就活頑張ってるんだね！」",
            `「でもそれは、${playerName}ちゃんがどうしても「やりたい！」ことかな？」`,
            "（う・・・！　マズったぁ・・・）"
          ],
          -1,
          3
        ),
        createChoice(
          "「ギャンブルですかね・・・」",
          [
            "「え？そうなの？」",
            "「見かけによらない、思い切りのいいコなんだね」",
            "（よし！　企業研究が効いたみたい！）"
          ],
          3,
          3
        )
      ]
    },
    {
      text: "（順調に答えられてるかな）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「落ち着いてきたかな？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: `「それじゃあ${playerName}ちゃんに質問！」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: `「さっきの続きだけど、${playerName}ちゃんが継続してがんばってることってあるかな？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「はい！私は・・・。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「継続してがんばっていることは？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「運動不足解消のために散歩を・・・」",
          [
            "「いいね！　なにごとも健康第一だからね！」",
            "（よし！　企業研究が効いたみたい！）"
          ],
          2,
          4
        ),
        createChoice(
          "「マンガを読むのが好きです！」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のクイズの特徴は何でしょう？」",
            "「ヒント：僕のキャラクター性に関係があるよ！」"
          ],
          0,
          4
        ),
        createChoice(
          "「いえ、特に・・・・・・・。」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のクイズの特徴は何でしょう？」",
            "「ヒント：僕のキャラクター性に関係があるよ！」"
          ],
          -1,
          4
        )
      ]
    },
    {
      text: "「\n」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "（なかなか調子いいかも・・・！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「なるほど。では、なぜMETAフーズを志望されたのですか？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
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
      text: "（この調子でいけば、もっといい感じになるかも・・・！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「EXは派手だし、NEOは格好いいけど、僕は面白い！ 君も面白くなりたい？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「はい、箱さんのように面白くなりたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 面白くなるために必要なものは何でしょう？」",
            "「ヒント：僕のトレードマークだよ！」"
          ],
          3,
          6
        ),
        createChoice(
          "「箱さんのユーモアを学びたいです」",
          [
            "「そうだよね！ じゃあ、クイズ！ 僕のユーモアの特徴は何でしょう？」",
            "「ヒント：僕の箱の中身に関係があるよ！」"
          ],
          2,
          6
        )
      ]
    },
    {
      text: "（う～ん、絶好調かも！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/box.png"
      }
    },
    {
      text: "「最後に、何か質問はありますか？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
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
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    }
  ];
}; 