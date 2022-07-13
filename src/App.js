import './App.css';
import StarDisplay from './Components/StarDisplay';
import AnswerBoard from './Components/AnswerBoard';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function App() {
  const numberOfStars = 10;
  return (

    <div className="gameboard-container">
      <Box sx= {{
        display: 'flex', gap: '50px', border: 1 , boxShadow: 2,
              bgcolor: 'background.paper', width: '500px', height: '300px',
              justifyContent: 'center', alignItems: 'center'
      }}>
      <Box component="div" sx={{ height: '225px', boxShadow: 2, bgcolor: 'background.paper', p: 2 }}>
        <StarDisplay numberOfStars={numberOfStars}/>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box  component="div" sx={{ height: '225px', boxShadow: 2, bgcolor: 'background.paper', p: 2 }}>
        <AnswerBoard />
      </Box>
      </Box>
    </div>
  );
}

export default App;