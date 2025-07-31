import displayAimBoard from "./display-aimBoard";
import displayBoard from "./display-board";
export default function displayBoardIngame(board1, board2, game, container) {
    document.body.textContent = "";

    displayBoard(board1, container); 
    displayAimBoard(board2, game);
}