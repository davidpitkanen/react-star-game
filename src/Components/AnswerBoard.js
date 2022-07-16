import utils from '../Utils/utils';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AnswerBoard(props) {

    const buttonArrayNumbers = utils.setArray(9);
    const goalValue = props.numberSelected;
    const [selectedValues, setSelectedValues] = useState([])

    const onClick = (value) => {
        const allValues = [...selectedValues, value];
        setSelectedValues(allValues);
        const difference = goalValue - selectedValues.reduce((partial_sum, a)=> partial_sum + a, 0);
        if (difference === 0) {
            props.numberSelected()
        }
    }
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '250px', gap: '10px' }}>
        {
            buttonArrayNumbers.map(x => 
                <div>
                    <Button key={x} variant="outlined" sx={{ 
                        color: 'primary.main', fontWeight: 'medium',
                        width: '50px', height: '50px'
                        }}>
                        {x + 1}
                    </Button>
                </div>
            )
        }
        </Box>

  )
}

export default AnswerBoard;