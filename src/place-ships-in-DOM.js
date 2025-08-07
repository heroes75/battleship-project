import displayBoard from "./display-board";
import displayBoardInContainer from "./display-board-in-container";
import { Computer } from "./player";
import screenControler from "./screen-controller";
import Ship from "./ship";
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
    let isMaintain = false;
    let isInBoard = false;
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
                "width: 50px; height: 50px; background-color: blue;";
            shipContainer.appendChild(box);
        }

        //shipsToPlaceContainer.addEventListener("mouseenter", (e) => {
        //e.preventDefault();

        boardContainer.addEventListener("mouseenter", () => {
            isInBoard = true;
        });

        boardContainer.addEventListener("mouseleave", () => {
            isInBoard = false;
        });

        //boardContainer.addEventListener("mouseout", () => {
        //    isInBoard = false
        //})

        shipContainer.addEventListener("mousedown", (e) => {
            isMaintain = true;
            shipInCursor.push(el);
            console.log(el);
        });

        boardContainer.addEventListener("mouseup", (e) => {
            if (isMaintain === true && isInBoard === true) {
                player.hisBoard.placeShipAtHorizontally(
                    new Ship(shipInCursor[shipInCursor.length - 1]),
                    +e.target.dataset.row,
                    +e.target.dataset.column,
                );
                console.log(
                    typeof e.target.dataset.row,
                    e.target.dataset.column,
                );
                //shipInCursor.pop()

                displayBoardInContainer(player.hisBoard.board, boardContainer);
            }
        });

        window.addEventListener("mouseup", (e) => {
            isMaintain = false;
        });
        //});

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
