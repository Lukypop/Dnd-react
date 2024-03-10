import PuzzleData from "../data/PuzzleData";
import Image from "./Image";
const GameBoard = () => {
    PuzzleData.puzzle.sort(() => Math.random() - 0.5); // shuffle the puzzle pieces

    return(
        <div style={
            {display: "grid", 
            gridTemplateColumns: `repeat(${PuzzleData.columns}, 1fr)`, 
            gridTemplateRows: `repeat(${PuzzleData.rows}, 1fr)`,
        }}>
            {PuzzleData.puzzle.map((piece, index) => {
                return(
                    <Image piece={piece} index={index} />
                )
            })}
        </div>
    )
};
export default GameBoard;