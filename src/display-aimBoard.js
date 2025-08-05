import { Computer } from "./player";
import shipState from "./ship-state";

export default function displayAimBoard(board, game) {
  const bigContainer = document.createElement("div");
  const boardContainer = document.createElement("div");
  const nameOfBoard = document.createElement("div");
  const stateOfShipContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  bigContainer.classList.add("big-container");
  nameOfBoard.classList.add("name-of-board");
  stateOfShipContainer.classList.add("state-of-ship-container")
  nameOfBoard.textContent = "Opponent Board";
  boardContainer.style.height = "clamp(300px, 30vw, 500px)";
  document.querySelector("body").appendChild(bigContainer);
  shipState(game.activePlayer === game.playerOne ? game.playerTwo : game.playerOne, stateOfShipContainer)
  bigContainer.appendChild(nameOfBoard);
  bigContainer.appendChild(boardContainer);
  bigContainer.appendChild(stateOfShipContainer);
  console.log(board.length);
  if (game.activePlayer instanceof Computer) game.playRound();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const box = document.createElement("div");
      box.classList.add("case");
      caseDisplay(board[i][j], box);
      box.style.width = "clamp(30px, 3vw, 50px)";
      box.style.height = "clamp(30px, 3vw, 50px)";
      //box.style.borderColor = "blue"
      box.style.border = "1px solid orange";
      box.addEventListener("click", (e) => {
        e.preventDefault();

        game.playRound(i, j);
        //box.style.backgroundColor = "green"
      });
      boardContainer.appendChild(box);
    }
  }
}

function caseDisplay(boardElement, box) {
  switch (boardElement) {
    case "O":
      box.style.backgroundColor = "green";
      break;
    case "dH":
    case "sH":
    case "crH":
    case "bH":
    case "caH":
      box.style.backgroundColor = "red";
      break;
    default:
      break;
  }
}
