import utils from '../Utils/utils';
import Box from '@mui/material/Box';

function CalculatorButtons(props) {

  const buttonNumberArray = props.buttonNumberArray;
    return (

      <div className="calculator-button-row">
      {
        buttonNumberArray.map(x => 
          <Box sx={{ 
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              color: 'primary.main', border: 1 , fontWeight: 'medium', boxShadow: 2,
              bgcolor: 'background.paper', width: '50px', height: '50px'
             }}>
            <Box sx={{ textAlign: 'center' }}> {x + 1} </Box>
          </Box>
          )
      }
      </div>
       
  )
}

export default CalculatorButtons;