import { Computer } from "./player";

export default function displayAimBoard(board, game) {
    board.innerHTML = ""
    const boardContainer = document.createElement("div");
    boardContainer.id = "board-container";
    boardContainer.style.height = "500px"
    document.querySelector("body").appendChild(boardContainer);
    console.log(board.length);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const box = document.createElement("div");
            box.classList.add("case");
            caseDisplay(board[i][j], box);
            box.style.width = "50px";
            box.style.height = "50px";
            //box.style.borderColor = "blue"
            box.style.border = "1px solid orange";
            box.addEventListener("click", (e) => {
                e.preventDefault();
                
                game.playRound(i, j);
                //box.style.backgroundColor = "green"
            })
            boardContainer.appendChild(box)
        }
    }
    if(game.activePlayer instanceof Computer) game.playRound()
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