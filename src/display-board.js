export default function displayBoard(board) {
  const body = document.querySelector("body")
  body.textContent = "";
  body.style.cssText = "display: flex; flex-direction: row;"
  const boardContainer = document.createElement("div");
  boardContainer.id = "board-container";
  boardContainer.style.height = "clamp(250px, 25vw, 500px)";
  //boardContainer.style.width = "clamp(250px, 25vw, 500px)";
  body.appendChild(boardContainer);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const box = document.createElement("div");
      box.classList.add("case");
      caseDisplay(board[i][j], box);
      box.style.width = "clamp(25px, 2.5vw, 50px)";
      box.style.height = "clamp(25px, 2.5vw, 50px)";
      //box.style.borderColor = "blue"
      box.style.border = "1px solid orange";
      boardContainer.appendChild(box);
    }
  }
}

function caseDisplay(boardElement, box) {
  switch (boardElement) {
    case "d":
    case "s":
    case "cr":
    case "b":
    case "ca":
      box.style.backgroundColor = "black";
      break;
    case "O":
      box.style.backgroundColor = "blue";
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

export function updateBoard(board, container) {
  container.textContent = "";
  container.id = "board-container";
  container.style.height = "500px";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const box = document.createElement("div");
      box.classList.add("case");
      caseDisplay(board[i][j], box);
      box.style.width = "50px";
      box.style.height = "50px";
      //box.style.borderColor = "blue"
      box.style.border = "1px solid orange";
      container.appendChild(box);
    }
  }
}
