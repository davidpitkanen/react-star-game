import './App.css';
import StarDisplay from './Components/StarDisplay';
import AnswerBoard from './Components/AnswerBoard';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [numberOfStars, setNumberOfStars] = useState((Math.floor(Math.random() * 10) % 9) + 1);
  const [currentSelections, setCurrentSelections] = useState([]);
  const [previousSelections, setPreviousSelections] = useState([]);

  const initializeGame = () => {
    setNumberOfStars(Math.floor(Math.random() * 9) + 1);
  }
  const onSelection = (value) => {
    if (currentSelections.includes(value) || previousSelections.includes(value)) {
      return;
    }
    setCurrentSelections([value, ...currentSelections]);
    console.log(currentSelections);
    let currentTotal = currentSelections.reduce((partial_sum, a)=> partial_sum + a, 0);
    if (currentTotal === numberOfStars) {
      setPreviousSelections([...previousSelections, ...currentSelections]);
      setCurrentSelections([])
      initializeGame();
    }
  }

  return (

    <div className="gameboard-container">

      <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column',
                bgcolor: 'background.paper', justifyContent: 'center', alignItems: 'center' }} >
        <Typography variant="h4" gutterBottom component="div" sx={{ p: 2}}>
          Star Game
        </Typography>
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