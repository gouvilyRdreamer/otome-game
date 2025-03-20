import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { boxScenarios } from '../scenarios/BoxScenario';
import { exScenarios } from '../scenarios/ExScenario';
import { neoScenarios } from '../scenarios/NeoScenario';
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

  .response {
    color: #4a90e2;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
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

const scenes: Scene[] = [
  {
    text: "私の名前は 。今日はMETA Foodsの最終面接を受けに来ました。",
    background: "/images/office-entrance.jpg"
  },
  {
    text: "META Foodsは、世界中の食品を取り扱う大手商社。",
    background: "/images/office-entrance.jpg"
  },
  {
    text: "企業ホームページによると、最終面接は「社長面接」。",
    background: "/images/office-entrance.jpg"
  },
  {
    text: "つまり、面接官は、なんとあの人気アイドル兼スゴ腕経営者の「メタトン」！",
    background: "/images/office-entrance.jpg"
  },
  {
    text: "メタトンには3つの形態があって、求職者が好きな形態を選んで面接してもらえるらしい。",
    background: "/images/office-entrance.jpg"
  },
  {
    text: "どの面接官にしようかな...？",
    background: "/images/office-entrance.jpg",
    choices: [
      { text: "BOX METATON", response: "", favorabilityChange: 0, nextScene: 7 },
      { text: "METATON EX", response: "", favorabilityChange: 0, nextScene: 7 },
      { text: "METATON NEO", response: "", favorabilityChange: 0, nextScene: 7 }
    ]
  },
  {
    text: "緊張するなあ...",
    background: "/images/office-entrance.jpg"
  }
];

const Game: React.FC<GameProps> = ({ onGameOver }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [selectedInterviewer, setSelectedInterviewer] = useState<string | null>(null);
  const [currentInterviewerScene, setCurrentInterviewerScene] = useState(0);
  const [favorability, setFavorability] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const handleChoice = (choiceIndex: number) => {
    const currentSceneData = getCurrentSceneData();
    if (!currentSceneData || !currentSceneData.choices) return;

    const choice = currentSceneData.choices[choiceIndex];
    if (!choice) return;

    if (currentScene === 5) {
      const interviewer = ["箱", "メタトンEX", "メタトンNEO"][choiceIndex];
      setSelectedInterviewer(interviewer);
      setCurrentScene(currentScene + 1);
      return;
    }

    if (currentScene >= 7) {
      setShowResponse(true);
      setCurrentResponse(choice.response);
      setFavorability(prev => prev + choice.favorabilityChange);
      setCurrentInterviewerScene(prev => prev + 1);
    }
  };

  const handleClick = () => {
    if (showResponse) {
      setShowResponse(false);
      return;
    }

    const currentSceneData = getCurrentSceneData();
    if (!currentSceneData) return;

    if (currentSceneData.choices) {
      return;
    }

    if (currentScene < 7) {
      setCurrentScene(prev => prev + 1);
    } else {
      const scenarios = getCurrentInterviewerScenarios();
      if (!scenarios || currentInterviewerScene >= scenarios.length - 1) {
        setIsGameOver(true);
        return;
      }
      setCurrentInterviewerScene(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentScene(0);
    setSelectedInterviewer(null);
    setCurrentInterviewerScene(0);
    setFavorability(0);
    setShowResponse(false);
    setCurrentResponse("");
    setIsGameOver(false);
  };

  const getCurrentSceneData = (): LocalScene | null => {
    if (isGameOver) {
      return {
        text: favorability >= 10 
          ? `面接が終わりました。\n好感度: ${favorability}\n${selectedInterviewer}さんから「採用！」の声がかかりました！\nこれから一緒に楽しく働けそうですね！`
          : `面接が終わりました。\n好感度: ${favorability}\n残念ながら今回は採用を見送らせていただきます。\nまたの機会に...`,
        background: "/images/office-entrance.jpg",
        choices: [
          { text: "最初からやり直す", response: "", favorabilityChange: 0 }
        ]
      };
    }

    if (currentScene < 7) {
      return scenes[currentScene];
    }

    if (!selectedInterviewer) return null;

    const interviewerScenarios = getCurrentInterviewerScenarios();
    if (!interviewerScenarios || currentInterviewerScene >= interviewerScenarios.length) return null;

    return interviewerScenarios[currentInterviewerScene] as LocalScene;
  };

  const getCurrentInterviewerScenarios = () => {
    if (selectedInterviewer === "箱") {
      return boxScenarios;
    } else if (selectedInterviewer === "メタトンEX") {
      return exScenarios;
    } else if (selectedInterviewer === "メタトンNEO") {
      return neoScenarios;
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
      <TextBox onClick={handleClick}>
        <TextContent>
          {currentSceneData.text}
          {!currentSceneData.choices && <DownArrow>▼</DownArrow>}
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
      </TextBox>
      {!isGameOver && (
        <div className="favorability">
          好感度: {favorability}
        </div>
      )}
    </GameContainer>
  );
};

export default Game; 