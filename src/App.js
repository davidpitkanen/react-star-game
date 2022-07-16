import './App.css';
import StarDisplay from './Components/StarDisplay';
import AnswerBoard from './Components/AnswerBoard';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState, useEffect  } from 'react';
import GameStatus from './Components/GameStatus';


function App() {
  const [numberOfStars, setNumberOfStars] = useState(Math.floor(Math.random() * 9) + 1);
  const [currentSelections, setCurrentSelections] = useState([]);
  const [previousSelections, setPreviousSelections] = useState([]);
  const [gameStatus, setGameStatus ] = useState('undetermined')

  useEffect(() => {
    let currentTotal = currentSelections.reduce((partial_sum, a)=> partial_sum + a, 0);
    if (currentTotal > numberOfStars) {
      setGameStatus('lost');
    }
    const correctGuess = currentTotal === numberOfStars;
    const wonGame = previousSelections.length === 8 && correctGuess;
    if (wonGame) {
      setGameStatus('won');
      return;
    }
    if (correctGuess) {
      setPreviousSelections([...previousSelections, ...currentSelections]);
      setCurrentSelections([])
      initializeGame();
    }
  },
  [currentSelections])
  const initializeGame = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    while (previousSelections.includes(randomNumber) || currentSelections.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 9) + 1;
    }
    setNumberOfStars(randomNumber);
  }
  const onSelection = (value) => {
    if (currentSelections.includes(value) || previousSelections.includes(value)) {
      return;
    }
    setCurrentSelections([value, ...currentSelections]);
    
  }



  return (

    <div className="gameboard-container">

      <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column',
                bgcolor: 'background.paper', justifyContent: 'center', alignItems: 'center' }} >
        <GameStatus gameStatus={ gameStatus } />
        <Box sx={{
          display: 'flex', gap: '50px', width: '700px', height: '275px',
          justifyContent: 'center', alignItems: 'center'
        }}>

          <Box component="div" sx={{ height: '225px', p: 2 }}>
            <StarDisplay numberOfStars={numberOfStars} />
          </Box>
          <Box  component="div" sx={{ height: '225px', p: 2 }}>
            <AnswerBoard onClick={onSelection} previousSelections={previousSelections} currentSelections={currentSelections} />
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default App;