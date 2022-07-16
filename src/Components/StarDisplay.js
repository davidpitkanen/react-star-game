import utils from '../Utils/utils';
import Box from '@mui/material/Box';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

function StarDisplay(props) {

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '150px'}}>
        {
            utils.setArray(props.numberOfStars).map(_ => {
                return <div> <StarOutlinedIcon key={_} sx={{ color: 'primary.main' }} fontSize="large"/> </div>
            })
        }
      </Box>
  )
}

export default StarDisplay;