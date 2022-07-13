import utils from '../Utils/utils';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Box from '@mui/material/Box';

function StarShape(props) {
  return (
      utils.setArray(props.numberOfStars).map(_ => 
        <Box component="div">
            <StarOutlinedIcon sx={{ color: 'primary.main' }} fontSize="large"/>
        </Box>
    )
  )
}

export default StarShape;