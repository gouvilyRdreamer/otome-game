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
      id: 1,
      text: "「はじめまして！\nキミに会えるのを楽しみにしてたよ！」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 2,
      text: "「よっこいせ、っと」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      shouldFade: true
    },
    {
      id: 3,
      text: "（えっ？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 4,
      text: "（いま、どうやって、椅子に座って・・・？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 5,
      text: "（？？？？？？）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 6,
      text: "「さあ、始めようか。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 7,
      text: "「それじゃ、まずはキミの名前を教えてくれるかな？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 8,
      text: `「${playerName}ちゃんだね。よろしく」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 9,
      text: "「よろしくお願いします！」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 10,
      text: "（よ～し、がんばるぞ～！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 11,
      text: "（うう・・・　緊張する・・・）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 12,
      text: "「うんうん、緊張しちゃうよね～。ボク、カタっくるしいのは正直ニガテでさ。\n肩ひじ張らずに、リラックスしてね」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 13,
      text: "「じゃあちょっと雑談！」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 14,
      text: "「ボク、昔からお芝居が好きで、\n去年社内にサークルを作ったんだ」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 15,
      text: `「${playerName}ちゃんは、なにか趣味や特技ってある？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 16,
      text: "「趣味や特技は？」",
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
            "「へえ？そうなんだ。」",
            "「どんなジャンルが好きなの？」",
            "「・・・」",
            "「ボク、何かに打ち込んでいる子って好きだな」",
            "（・・・あれ、意外と怖くない、ヒト・・・？なのかな？）"
          ],
          2,
          17
        ),
        createChoice(
          "「就活に打ち込んでます、かね」",
          [
            "「就活頑張ってるんだね！」",
            `「でもそれって、${playerName}ちゃんがどうしてもやりたいこと？」`,
            "「えっと、それはその」",
            "「・・・」",
            "（う・・・！　マズったぁ・・・）"
          ],
          -1,
          17
        ),
        createChoice(
          "「ギャンブルですかね・・・」",
          [
            "「へえ？そうなんだ」",
            "「見かけによらず、思い切りのいいコなんだね」",
            "（よし！　企業研究が効いたみたい！）"
          ],
          3,
          17
        )
      ]
    },
    {
      id: 17,
      text: "（順調に答えられてるかな）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 18,
      text: "「落ち着いてきたかな？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 19,
      text: `「それじゃあ${playerName}ちゃんに質問！」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 20,
      text: `「さっきの続きだけど、${playerName}ちゃんが継続してがんばってることってあるかな？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 21,
      text: "「はい！私は・・・。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 22,
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
          23
        ),
        createChoice(
          "「マンガを読むのが好きです！」",
          [
            "「ん～、趣味はさっき聞いたかな」",
            "（う・・・！　マズったぁ・・・）"
          ],
          -1,
          23
        ),
        createChoice(
          "「いえ、特に・・・・・・・。」",
          [
            "「・・・」",
            "「本当に？」",
            "（う・・・！　マズったぁ・・・）"
          ],
          -1,
          23
        )
      ]
    },
    {
      id: 23,
      text: "（なかなか調子いいかも・・・！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 24,
      text: `「${playerName}ちゃんのことをもっと知りたいな」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 25,
      text: `「あ、そうだ。　${playerName}ちゃんは自分のどんなところが好き？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 26,
      text: `（私の長所、それはもちろん・・・）`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 27,
      text: "「キミの長所は？」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「諦めが悪いところ」",
          [
            "「ほう？」",
            "「往生際が悪いってこと？　いいじゃない」"
          ],
          2,
          28
        ),
        createChoice(
          "「そんなの無いです」",
          [
            "「ワオ！　それは困った！」",
            "「もっと自信を持って！」",
            "「ヒント：女の子は笑顔が一番」",
            "（うう・・・　もっと対策しておけばよかったぁ・・・）"
          ],
          1,
          28
        ),
        createChoice(
          "「ポジティブなところです！」",
          [
            "「いいね！」",
            "「うちはそういうコが多い。そしてよく働くね。\nキミはすぐに馴染めそうだ」"
          ],
          1,
          28
        )
      ]
    },
    {
      id: 28,
      text: "（この調子でいけば、もっといい感じになるかも・・・！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 29,
      text: `「${playerName}ちゃんは大学生だよね。」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 30,
      text: `「学生時代に一番がんばったことは、ズバリ、なに？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 31,
      text: `（出た・・・！ガクチカ・・・\nどうしよう・・・）`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 32,
      text: `「ガクチカを聞かせて！」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「いろんなことを頑張りました」",
          [
            "「そうなんだ　できればもうちょっと具体的に教えてほしかったなぁ。」",
            "（うう・・・　もっと対策しておけばよかったぁ・・・）"
          ],
          -1,
          33
        ),
        createChoice(
          "「アルバイトを頑張りました」",
          [
            "「」",
            "「」"
          ],
          1,
          33
        ),
        createChoice(
          "「サークル活動です！リーダーも務めました！」",
          [
            "「」",
            "「」"
          ],
          2,
          33
        )
      ]
    },
    {
      id: 33,
      text: "（う～ん、絶好調かも！）",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 34,
      text: `「うんうん、${playerName}ちゃんのこと、だんだんわかってきたよ」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 35,
      text: "「じゃあ、これで最後の質問」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 36,
      text: `「ほかの男に告白されたら、${playerName}ちゃんはどうする？」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 37,
      text: `「え・・・！？　ええっと、」\n（ほかの企業から内定をもらったら、私は・・・）`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 38,
      text: "「弊社は第何希望？正直に。」",
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      },
      choices: [
        createChoice(
          "「大変申し上げにくいのですが・・・・」",
          [
            "うん・・・そっか。",
            "ボクを選んでほしいけど、こればっかりは仕方ないよね。",
            "（うう・・・　もっと対策しておけばよかったぁ・・・）"
          ],
          0,
          39
        ),
        createChoice(
          "「持ち帰って検討させてください」",
          [
            "",
            ""
          ],
          0,
          39
        ),
        createChoice(
          "「御社が第一希望ですので、他はすべて断ります！」",
          [
            "",
            ""
          ],
          3,
          39
        )
      ]
    },
    {
      id: 39,
      text: `「今日はこれで終わり！　結果はあとでメールするよ。\n気を付けて帰ってね！」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 40,
      text: `「はい！ありがとうございました！」`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
    {
      id: 41,
      text: `（どうなったんだろう・・・）`,
      background: "/images/room.jpg",
      character: {
        id: 1,
        name: "箱",
        image: "/images/metaton_box.png"
      }
    },
  ];
}; 