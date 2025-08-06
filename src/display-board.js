import shipState from "./ship-state";
import turnState from "./turn-state";
import winnerDisplay from "./winner-display";

export default function displayBoard(board, game) {
    const body = document.querySelector("body");
    const turnContainer = document.createElement("div");
    const bigContainer = document.createElement("div");
    const nameOfBoard = document.createElement("div");
    const boardContainer = document.createElement("div");
    const stateOfShipContainer = document.createElement("div");
    const winnerDisplayContainer = document.createElement("div");
    //body.textContent = "";
    body.style.cssText = "display: flex; flex-direction: row;";
    boardContainer.classList.add("board-container");
    bigContainer.classList.add("big-container");
    nameOfBoard.classList.add("name-of-board");
    turnContainer.classList.add("turn-container");
    winnerDisplayContainer.id = "winner-display-container";
    stateOfShipContainer.classList.add("state-of-ship-container");
    nameOfBoard.textContent = "your Board";
    boardContainer.style.height = "clamp(300px, 30vw, 500px)";
    //boardContainer.style.width = "clamp(250px, 25vw, 500px)";
    shipState(game.activePlayer, stateOfShipContainer);
    turnState(game.activePlayer, turnContainer);
    if (game.isWinner()) {
        bigContainer.appendChild(winnerDisplayContainer);
        winnerDisplay(game.activePlayer, winnerDisplayContainer);
    }
    body.appendChild(bigContainer);
    bigContainer.appendChild(turnContainer);
    bigContainer.appendChild(nameOfBoard);
    bigContainer.appendChild(boardContainer);
    bigContainer.appendChild(stateOfShipContainer);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const box = document.createElement("div");
            box.classList.add("case");
            caseDisplay(board[i][j], box);
            box.style.width = "clamp(30px, 3vw, 50px)";
            box.style.height = "clamp(30px, 3vw, 50px)";
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
