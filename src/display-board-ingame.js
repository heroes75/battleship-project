import displayAimBoard from "./display-aimBoard";
import displayBoard from "./display-board";
export default function displayBoardIngame(board1, board2, game) {
  document.body.textContent = "";

  displayBoard(board1);
  displayAimBoard(board2, game);
}
