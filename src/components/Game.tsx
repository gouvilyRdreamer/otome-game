import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { createBoxScenarios } from '../scenarios/BoxScenario';
import { createExScenarios } from '../scenarios/ExScenario';
import { createNeoScenarios } from '../scenarios/NeoScenario';
import { Scene, Choice, Character } from '../types/index';

interface GameProps {
  onGameOver: () => void;
}

interface LocalScene {
  text: string;
  background: string;
  character?: Character;
  choices?: Choice[];
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GameFont';
    src: url('/fonts/rounded-x-mplus-1c-bold.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: 'GameFont', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
    font-weight: 400;
  }

  .favorability {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    color: #e74c3c;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  min-height: 150px;
  white-space: pre-line;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  button {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }
`;

const TextContent = styled.div`
  position: relative;
  display: inline-block;
`;

const DownArrow = styled.span`
  display: inline-block;
  color: #ff69b4;
  font-size: 16px;
  margin-left: 8px;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-1px);
    }
  }
`;

const CharacterImage = styled.img`
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  max-height: 400px;
`;

const Choices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const ChoiceButton = styled.button`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    transform: scale(1.02);
    border-color: #ff69b4;
    background: rgba(255, 105, 180, 0.2);
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
  }
`;

const InterviewerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const InterviewerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    border-color: #ff69b4;
    background: rgba(255, 105, 180, 0.2);
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
  }

  &.selected {
    border-color: #ff69b4;
    background: rgba(255, 105, 180, 0.3);
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }
`;

const InterviewerImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const InterviewerName = styled.div`
  color: white;
  font-size: 1.4em;
  text-align: center;
  font-weight: 700;
`;

const initialScenes: Scene[] = [
  {
    text: "私は絶賛就活中の大学3年生！\nじつは、第一希望の最終面接を控えてる・・・",
    background: "/images/campus.jpg"
  },
  {
    text: "META Foodsは、世界中の食品を取り扱う大手商社。",
    background: "/images/campus.jpg"
  },
  {
    text: "企業ホームページによると、最終面接は「社長面接」。",
    background: "/images/campus.jpg"
  },
  {
    text: "つまり、面接官は、なんとあの人気アイドル兼スゴ腕経営者の「メタトン」！",
    background: "/images/campus.jpg"
  },
  {
    text: "メタトンには3つの形態があって、求職者が好きな形態を選んで面接してもらえるらしい。",
    background: "/images/campus.jpg"
  },
  {
    text: "誰に面接してもらう？",
    background: "/images/campus.jpg",
    choices: [
      { text: "BOX METATON", responses: [""], favorabilityChange: 0, nextScene: 7 },
      { text: "METATON EX", responses: [""], favorabilityChange: 0, nextScene: 7 },
      { text: "METATON NEO", responses: [""], favorabilityChange: 0, nextScene: 7 }
    ]
  },
  {
    text: "緊張するなあ...",
    background: "/images/room.jpg"
  }
];

const Game: React.FC<GameProps> = ({ onGameOver }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [selectedInterviewer, setSelectedInterviewer] = useState<string | null>(null);
  const [currentInterviewerScene, setCurrentInterviewerScene] = useState(0);
  const [favorability, setFavorability] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [scenes, setScenes] = useState<Scene[]>(initialScenes);
  const [responseQueue, setResponseQueue] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [isNameInput, setIsNameInput] = useState(false);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      setIsNameInput(false);
      setCurrentInterviewerScene(prev => prev + 1);
    }
  };

  const handleTextBoxClick = () => {
    if (showResponse) {
      handleNextResponse();
    } else {
      const currentSceneData = getCurrentSceneData();
      if (currentSceneData?.choices) {
        // 選択肢がある場合は何もしない（選択肢を表示する）
        return;
      }
      
      // 名前入力シーンの場合
      if (currentSceneData?.text === "「それじゃ、まずはキミの名前を教えてくれるかな？」") {
        setIsNameInput(true);
        return;
      }
      
      // 面接シーン（currentScene >= 6）の場合
      if (currentScene >= 6) {
        const interviewerScenarios = getCurrentInterviewerScenarios();
        if (interviewerScenarios && currentInterviewerScene < interviewerScenarios.length - 1) {
          setCurrentInterviewerScene(prev => prev + 1);
        } else {
          setIsGameOver(true);
        }
      } else {
        // 通常のシーンの場合
        setCurrentScene(prev => prev + 1);
      }
    }
  };

  const handleChoice = (choiceIndex: number) => {
    const currentSceneData = getCurrentSceneData();
    if (!currentSceneData || !currentSceneData.choices) return;

    const choice = currentSceneData.choices[choiceIndex];
    if (!choice) return;

    if (currentScene === 5) {
      const interviewer = ["箱", "メタトンEX", "メタトンNEO"][choiceIndex];
      setSelectedInterviewer(interviewer);
      setCurrentInterviewerScene(0);  // 面接シーンの初期化
      setCurrentScene(6);  // 面接シーンに遷移
      return;
    }

    // 選択肢の反応をキューに追加
    if (choice.responses && choice.responses.length > 0) {
      setResponseQueue(choice.responses);
      setCurrentResponseIndex(0);
      setCurrentResponse(choice.responses[0]);
      setShowResponse(true);
      setSelectedChoiceIndex(choiceIndex);  // 選択した選択肢のインデックスを保存
    }

    // 好感度の更新
    setFavorability(prev => prev + choice.favorabilityChange);
  };

  const handleNextResponse = () => {
    if (currentResponseIndex < responseQueue.length - 1) {
      setCurrentResponseIndex(prev => prev + 1);
      setCurrentResponse(responseQueue[currentResponseIndex + 1]);
    } else {
      setShowResponse(false);
      setResponseQueue([]);
      const currentSceneData = getCurrentSceneData();
      
      // 面接シーン（currentScene >= 6）の場合
      if (currentScene >= 6) {
        const interviewerScenarios = getCurrentInterviewerScenarios();
        if (interviewerScenarios && currentInterviewerScene < interviewerScenarios.length - 1) {
          setCurrentInterviewerScene(prev => prev + 1);
        } else {
          setIsGameOver(true);
        }
      } else {
        // 通常のシーンの場合
        if (selectedChoiceIndex !== null && currentSceneData?.choices?.[selectedChoiceIndex]?.nextScene !== undefined) {
          setCurrentScene(currentSceneData.choices[selectedChoiceIndex].nextScene!);
        } else {
          setCurrentScene(prev => prev + 1);
        }
      }
      setSelectedChoiceIndex(null);  // 選択肢のインデックスをリセット
    }
  };

  const handleRestart = () => {
    setCurrentScene(0);
    setFavorability(0);
    setSelectedInterviewer("");
    setShowResponse(false);
    setCurrentResponseIndex(0);
    setSelectedChoiceIndex(null);
    setIsGameOver(false);
    setResponseQueue([]);
  };

  const getCurrentSceneData = (): LocalScene | null => {
    if (isGameOver) {
      return {
        text: favorability >= 10 
          ? `${playerName}さん、面接が終わりました。\n好感度: ${favorability}\n${selectedInterviewer}さんから「採用！」の声がかかりました！\nこれから一緒に楽しく働けそうですね！`
          : `${playerName}さん、面接が終わりました。\n好感度: ${favorability}\n残念ながら今回は採用を見送らせていただきます。\nまたの機会に...`,
        background: "/images/office-entrance.jpg",
        choices: [
          { text: "最初からやり直す", responses: [""], favorabilityChange: 0 }
        ]
      };
    }

    if (currentScene < 6) {
      return scenes[currentScene];
    }

    if (!selectedInterviewer) return null;

    const interviewerScenarios = getCurrentInterviewerScenarios();
    if (!interviewerScenarios || currentInterviewerScene >= interviewerScenarios.length) return null;

    return interviewerScenarios[currentInterviewerScene] as LocalScene;
  };

  const getCurrentInterviewerScenarios = () => {
    if (selectedInterviewer === "箱") {
      return createBoxScenarios(playerName);
    } else if (selectedInterviewer === "メタトンEX") {
      return createExScenarios(playerName);
    } else if (selectedInterviewer === "メタトンNEO") {
      return createNeoScenarios(playerName);
    }
    return [];
  };

  const currentSceneData = getCurrentSceneData();
  if (!currentSceneData) return null;

  const character = currentSceneData.character;
  const choices = currentSceneData.choices;

  return (
    <GameContainer>
      <GlobalStyle />
      <Background image={currentSceneData.background} />
      {character && (
        <CharacterImage 
          src={character.image} 
          alt={character.name}
        />
      )}
      <TextBox onClick={handleTextBoxClick}>
        {!showResponse ? (
          <>
            <TextContent>
              {isNameInput ? (
                <NameInputForm onSubmit={handleNameSubmit}>
                  <NameInput
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="入力してください"
                    autoFocus
                  />
                  <SubmitButton type="submit" disabled={!playerName.trim()}>
                    決定
                  </SubmitButton>
                </NameInputForm>
              ) : (
                <>
                  {currentSceneData.text}
                  {!currentSceneData.choices && <DownArrow>▼</DownArrow>}
                </>
              )}
            </TextContent>
            {currentScene === 5 ? (
              <InterviewerContainer>
                {["箱", "メタトンEX", "メタトンNEO"].map((name, index) => (
                  <InterviewerCard
                    key={index}
                    className={selectedInterviewer === name ? 'selected' : ''}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChoice(index);
                    }}
                  >
                    <InterviewerImage
                      src={`/images/${name === "箱" ? "box" : name === "メタトンEX" ? "metaton_ex" : "metaton_neo"}.png`}
                      alt={name}
                    />
                    <InterviewerName>{name}</InterviewerName>
                  </InterviewerCard>
                ))}
              </InterviewerContainer>
            ) : choices && (
              <Choices>
                {choices.map((choice, index) => (
                  <ChoiceButton 
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isGameOver) {
                        handleRestart();
                      } else {
                        handleChoice(index);
                      }
                    }}
                  >
                    {choice.text}
                  </ChoiceButton>
                ))}
              </Choices>
            )}
          </>
        ) : (
          <TextContent>
            {currentResponse}
            <DownArrow>▼</DownArrow>
          </TextContent>
        )}
      </TextBox>
      {!isGameOver && (
        <div className="favorability">
          好感度: {favorability}
        </div>
      )}
      {showResponse && (
        <div className="response-container" onClick={handleNextResponse}>
          <p>{currentResponse}</p>
        </div>
      )}
    </GameContainer>
  );
};

const NameInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const NameInput = styled.input`
  width: 70%;
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid #ccc;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #ff69b4;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  background: #ff69b4;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #ff69b4;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export default Game; 