import displayBoard from "./display-board";

export default function placeShips(player, container) {
    randomizeShips(player, container)
    buttonRandomizeShips(player, container)
}

export function buttonRandomizeShips(player, container) {
    const button = document.createElement("button");
    button.id = `${player.name}`;
    button.textContent = "randomize"
   
    container.appendChild(button)
}
export function randomizeShips(player, container) {
    container.textContent = ""
    const boardContainer = document.createElement("div");
    boardContainer.id = "board-container";

    boardContainer.textContent = "";
    displayBoard(player.hisBoard.board, boardContainer);

    container.appendChild(boardContainer)
}

export function updateRandomizeShips(params) {
    
}