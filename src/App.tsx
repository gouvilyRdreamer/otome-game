import React from 'react';
import styled from 'styled-components';
import Game from './components/Game';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const App: React.FC = () => {
  const handleGameOver = () => {
    // ゲームオーバー時の処理をここに追加
    console.log('Game Over');
  };

  return (
    <AppContainer>
      <Game onGameOver={handleGameOver} />
    </AppContainer>
  );
};

export default App;
