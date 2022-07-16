import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function GameStatus(props) {
    if (props.gameStatus === 'undetermined') {
        return (
            <>
                <Typography variant="h4" gutterBottom component="div" sx={{ p: 2}}>
                    Star Game
                </Typography>
            </>
        )
    }
    if (props.gameStatus === 'lost') {
        return (
        <>
            <Typography variant="h4" gutterBottom component="div" sx={{ p: 2}}>
                You Lose!
            </Typography>
            <Button variant="contained">Play Again</Button>
        </>
        )
        }
    return (
        <>
            <Typography variant="h4" gutterBottom component="div" sx={{ p: 2}}>
                You Win!
            </Typography>
        </>
    )


}


export default GameStatus;