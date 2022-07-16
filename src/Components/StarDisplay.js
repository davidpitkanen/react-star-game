import utils from '../Utils/utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useState } from 'react';

function StarDisplay(props) {

  const [numberOfStars, setNumberOfStars] = useState(props.numberOfStars);

  const resetState = () => {
    props.onClick();
    console.log(props.numberOfStars);
    setNumberOfStars(props.numberOfStars);
  }
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '150px'}}>
        {
            utils.setArray(props.numberOfStars).map(_ => {
                return <div> <StarOutlinedIcon key={_} sx={{ color: 'primary.main' }} fontSize="large"/> </div>
            })
        }
        <Button onClick={() => resetState()}>Hello</Button> 

      </Box>
  )
}

export default StarDisplay;