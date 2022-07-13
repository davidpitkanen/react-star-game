import utils from '../Utils/utils';
import StarShape from './StarShape';
import CalculatorButtons from './CalculatorButtons';

function AnswerBoard(props) {

    const buttonArrayNumbers = utils.setStarGrid(9,3);
    return (
        <div className='answer-board-container'>
        {
            buttonArrayNumbers.map(numbersArray => 
                    <CalculatorButtons buttonNumberArray={numbersArray}/> 
            )
        }
        </div>

  )
}

export default AnswerBoard;