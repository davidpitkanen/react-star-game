import utils from '../Utils/utils';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AnswerBoard(props) {

    const buttonArrayNumbers = utils.setArray(9);
    const initialStyleProps = {  
        color: 'primary.main' ,
        width: '50px', height: '50px'
    }

    const onSelection = (value) => {
        props.onClick(value)
    }

    function determineClass(value) {
        if (props.previousSelections.includes(value) || props.currentSelections.includes(value)) {

            return { ...initialStyleProps, color: 'warning.main' };
        }
        return initialStyleProps;
    }

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '250px', gap: '10px' }}>
        {
            buttonArrayNumbers.map(x => 
                <div>
                    <Button onClick={() => onSelection(x + 1)}
                        key={x} variant="outlined" sx={() => determineClass(x+1)}>
                        {x + 1}
                    </Button>
                </div>
            )
        }
        </Box>

  )
}

export default AnswerBoard;