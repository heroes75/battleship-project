import displayAimBoard from "./display-aimBoard";
import displayBoard from "./display-board";
export default function displayBoardIngame(board1, board2, playRound) {
    
    displayBoard(board1); 
    displayAimBoard(board2, playRound);
}