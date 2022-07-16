import './App.css';
import StarDisplay from './Components/StarDisplay';
import AnswerBoard from './Components/AnswerBoard';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [numberOfStars, setNumberOfStars] = useState((Math.floor(Math.random() * 10) % 9) + 1);

  const initializeGame = () => {
    console.log('hidi hoe neighbour');
    setNumberOfStars((Math.floor(Math.random() * 10) % 9) + 1);
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
            <StarDisplay numberOfStars={numberOfStars}  onClick={initializeGame}/>
          </Box>
          <Box  component="div" sx={{ height: '225px', p: 2 }}>
            <AnswerBoard />
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default App;