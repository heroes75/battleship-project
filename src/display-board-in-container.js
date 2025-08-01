export default function displayBoardInContainer(board, container) {
    container.textContent = ""
    const boardContainer = document.createElement("div");
    boardContainer.id = "board-container";
    boardContainer.style.height = "500px"
    container.appendChild(boardContainer);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const box = document.createElement("div");
            box.classList.add("case");
            caseDisplay(board[i][j], box);
            box.style.width = "50px";
            box.style.height = "50px";
            //box.style.borderColor = "blue"
            box.style.border = "1px solid orange"
            boardContainer.appendChild(box)
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