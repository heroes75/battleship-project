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
    const changeDirectionButton = document.createElement("button");
    let vertically = false;

    let shipsCopy = [...ships];
    let isMaintain = false;
    let isInBoard = false;
    button.textContent = "randomize";
    buttonSubmit.textContent = "Finish";
    changeDirectionButton.textContent =
        vertically === false ? "horizontal" : "vertical";
    button.classList.add("button-of-placement-ship");
    buttonSubmit.classList.add("button-of-placement-ship");
    changeDirectionButton.classList.add("button-of-placement-ship")
    title.textContent = "place your ship " + player.name;
    shipsToPlaceContainer.id = "ships-to-place-container";
    buttonContainer.id = "button-container";
    buttonContainer.style.cssText = "display: flex; gap: 10px; justify-content: center; height: 60px; align-items: center"
    shipsToPlaceContainer.style.cssText = "display: flex; gap: 10px; width: 500px; flex-wrap: wrap";

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
            if (vertically === false) {
                for (let i = 0; i < shipInCursor[0].length; i++) {
                    const el = document.getElementById(`c${x}${y + i}`);
                    
                    if (y + i <= 9) {
                        el.style.cssText =
                            "background-color: black; opacity: 0.5; border: 1px solid orange";
                    }
                }
            } else {
                for (let i = 0; i < shipInCursor[0].length; i++) {
                    const el = document.getElementById(`c${x + i}${y}`);
                    console.log(
                        "out",
                        `c${e.target.dataset.row}${+e.target.dataset.column + i}`,
                    );
                    if (x + i <= 9) {
                        el.style.cssText =
                            "background-color: black; opacity: 0.5; border: 1px solid orange";
                    }
                }
            }
        }
    });

    boardContainer.addEventListener("mouseup", (e) => {
        isInBoard = true;
        if (
            isMaintain === true &&
            shipInCursor.length !== 0
        ) {
            const attack =
                vertically === false
                    ? player.hisBoard.placeShipAtHorizontally(
                          new Ship(shipInCursor[0]),
                          +e.target.dataset.row,
                          +e.target.dataset.column,
                      )
                    : player.hisBoard.placeShipAtVertically(
                          new Ship(shipInCursor[0]),
                          +e.target.dataset.row,
                          +e.target.dataset.column,
                      );

            if (attack !== "impossible") {
                shipsCopy.splice(
                    shipsCopy.indexOf(shipInCursor[shipInCursor.length - 1]),
                    1,
                );
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
        if (isInBoard === false) {
            isMaintain = false;
            shipInCursor.pop();
            e.target.style.cursor = "crosshair";
        }
        console.log("shipInCursor in window out", shipInCursor);

    });

    changeDirectionButton.addEventListener("click", (e) => {
        vertically = vertically === false ? true : false;
        e.target.textContent =
            e.target.textContent === "horizontal" ? "vertical" : "horizontal";
    });

    body.appendChild(title);
    body.appendChild(boardContainer);
    body.appendChild(shipsToPlaceContainer);
    body.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonSubmit);
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(changeDirectionButton);
    button.addEventListener("click", () => {
        shipsToPlaceContainer.textContent = "";
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
    }

    function randomizeShips(player, container) {
        container.textContent = "";
        const boardContainer = document.createElement("div");

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
