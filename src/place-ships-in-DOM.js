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
    let shipsCopy = [...ships];
    let isMaintain = false;
    let isInBoard = false;
    //button.id = `${player.name}`;
    button.textContent = "randomize";
    buttonSubmit.textContent = "Finish";
    title.textContent = "place your ship " + player.name;
    shipsToPlaceContainer.id = "ships-to-place-container";
    shipsToPlaceContainer.style.cssText = "display: flex; gap: 10px";

    boardContainer.addEventListener("mouseenter", () => {
        isInBoard = true;
    });

    boardContainer.addEventListener("mouseleave", () => {
        isInBoard = false;
    });

    boardContainer.addEventListener("mousemove", (e) => {
        isInBoard = true;
        displayBoardInContainer(player.hisBoard.board, boardContainer);
        if (isMaintain === true) {
            const x = +e.target.dataset.row;
            const y = +e.target.dataset.column;
            if (
                player.hisBoard.isOutOfBound(y, shipInCursor[0]) ||
                player.hisBoard.isAlreadyMarked(x, y)
            ) {
                for (let i = 0; i < shipInCursor[0].length  + y > 9 ? shipInCursor[0].length + y - 9 : shipInCursor[0].length; i++) {
                    const el = document.getElementById(
                        `c${e.target.dataset.row}${+e.target.dataset.column + i}`,
                    );
                    console.log(
                        `c${e.target.dataset.row}${+e.target.dataset.column + i}`,
                    );

                    el.style.cssText =
                        "background-color: red; opacity: 0.5; border: 1px solid orange";
                }
                return
            }
            for (let i = 0; i < shipInCursor[0].length; i++) {
                const el = document.getElementById(
                    `c${e.target.dataset.row}${+e.target.dataset.column + i}`,
                );
                console.log(
                    `c${e.target.dataset.row}${+e.target.dataset.column + i}`,
                );

                el.style.cssText =
                    "background-color: black; opacity: 0.5; border: 1px solid orange";
            }
        }
    });

    boardContainer.addEventListener("mouseup", (e) => {
        console.log("isMaintain in boardContainer", isMaintain);
        console.log("shipInCursor in board first", shipInCursor);
        isInBoard = true;
        if (
            isMaintain === true &&
            shipInCursor.length !== 0 /*&& isInBoard === true*/
        ) {
            const attack = player.hisBoard.placeShipAtHorizontally(
                new Ship(shipInCursor[0]),
                +e.target.dataset.row,
                +e.target.dataset.column,
            );

            if (attack !== "impossible") {
                shipsCopy.splice(
                    shipsCopy.indexOf(shipInCursor[shipInCursor.length - 1]),
                    1,
                );
                console.log({ shipsCopy });

                displayShipsToPlace(shipsToPlaceContainer);
            }

            console.log(typeof e.target.dataset.row, e.target.dataset.column);
            isMaintain = false;
            console.log(shipInCursor);

            shipInCursor.pop();

            displayBoardInContainer(player.hisBoard.board, boardContainer);
        }
        console.log("shipInCursor in borad end", shipInCursor);
    });

    window.addEventListener("mouseup", (e) => {
        console.log("shipInCursor in window in", shipInCursor);
        if (isInBoard === false) {
            isMaintain = false;
            shipInCursor.pop();
            e.target.style.cursor = "crosshair";
        }
        console.log("shipInCursor in window out", shipInCursor);

        //shipInCursor.pop()
    });
    //});

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

    function displayShipsToPlace(container) {
        container.textContent = "";
        shipsCopy.forEach((el) => {
            const shipContainer = document.createElement("div");
            shipContainer.style.display = "flex";
            for (let i = 0; i < el.length; i++) {
                const box = document.createElement("div");
                box.style.cssText =
                    "width: 50px; height: 50px; background-color: blue;";
                shipContainer.appendChild(box);
            }

            shipContainer.addEventListener("mousedown", (e) => {
                e.target.style.cursor = "grab";
                shipContainer.style.backgroundColor = "green";
                isMaintain = true;
                console.log("isMaintainis in shipcontainer", isMaintain);
                if (shipInCursor.length !== 0) shipInCursor.pop();

                shipInCursor.push(el);
                console.log("shipInCursor in shipContainer", shipInCursor);

                console.log({ el });
            });

            container.appendChild(shipContainer);
        });
    }

    placeShips(player, boardContainer);
    displayShipsToPlace(shipsToPlaceContainer);
}
