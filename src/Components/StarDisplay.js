import utils from '../Utils/utils';
import StarShape from './StarShape';
function StarDisplay(props) {

    const numberOfStars = props.numberOfStars;

    return (
      <div>
        {
            utils.setStarGrid(numberOfStars, 3).map(_ => {
                return <div className="starshape-row"> <StarShape numberOfStars={_.length} /> </div>
            })
        }
      </div> 
  )
}

export default StarDisplay;