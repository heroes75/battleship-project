import displayBoard from "./display-board";
import displayBoardInContainer from "./display-board-in-container";
import { Computer } from "./player";
import screenControler from "./screen-controller";

export default function placeShipsInDOM(player, game) {
    if (player instanceof Computer) {
        game.randomlyPlaceShip(player);
        screenControler(game);
        return;
    }
    const body = document.querySelector("body");
    body.textContent = "";
    const boardContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const button = document.createElement("button");
    const buttonSubmit = document.createElement("button");
    const title = document.createElement("h2");
    //button.id = `${player.name}`;
    button.textContent = "randomize";
    buttonSubmit.textContent = "Finish";
    title.textContent = "place your ship " + player.name;
    body.appendChild(title);
    body.appendChild(boardContainer);
    body.appendChild(buttonContainer);
    body.appendChild(buttonSubmit);
    buttonContainer.appendChild(button);
    button.addEventListener("click", () => {
        game.randomlyPlaceShip(player);
        displayBoardInContainer(player.hisBoard.board, boardContainer);
    });
    buttonSubmit.addEventListener("click", () => {
        if (player === game.playerOne) {
            placeShipsInDOM(game.playerTwo, game);
        } else {
            screenControler(game);
        }
    });
    function placeShips(player, container) {
        randomizeShips(player, container);
        //buttonRandomizeShips(player, container)
    }

    function randomizeShips(player, container) {
        container.textContent = "";
        const boardContainer = document.createElement("div");
        //boardContainer.id = "board-container";

        boardContainer.textContent = "";
        displayBoardInContainer(player.hisBoard.board, container);

        container.appendChild(boardContainer);
    }

    placeShips(player, boardContainer);
}
