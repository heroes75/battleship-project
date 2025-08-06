import displayBoard from "./display-board";
import displayBoardInContainer from "./display-board-in-container";
import { Computer } from "./player";
import screenControler from "./screen-controller";
import ships from "./the-ships";

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
    const shipInCursor = [];
    const shipsToPlaceContainer = document.createElement("div");
    //button.id = `${player.name}`;
    button.textContent = "randomize";
    buttonSubmit.textContent = "Finish";
    title.textContent = "place your ship " + player.name;
    shipsToPlaceContainer.id = "ships-to-place-container";
    shipsToPlaceContainer.style.cssText = "display: flex; gap: 10px";
    ships.forEach((el) => {
        const shipContainer = document.createElement("div");
        shipContainer.style.display = "flex";
        for (let i = 0; i < el.length; i++) {
            const box = document.createElement("div");
            box.style.cssText =
                "width: 5px; height: 5px; background-color: black;";
            shipContainer.appendChild(box);
        }

        shipsToPlaceContainer.addEventListener("mouseenter", (e) => {
            e.preventDefault();
            e.target.style.cursor = "pointer";

            shipContainer.addEventListener("mousedown", (e) => {
                body.addEventListener("mousemove", (e) => {
                    console.log(e.pageX, e.pageY)
                    shipContainer.style.cssText = `position: absolute; top: ${e.pageY}px; left: ${e.pageX}px`;
                });
            });
        });

        body.addEventListener("mousemove", (e) => {
            console.log(e.screenX, e.screenY);
            
        })

        shipsToPlaceContainer.appendChild(shipContainer);
    });
    body.appendChild(title);
    body.appendChild(boardContainer);
    body.appendChild(shipsToPlaceContainer);
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
