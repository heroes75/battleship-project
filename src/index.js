import displayBoard, { updateBoard } from "./display-board";
import displayBoardIngame from "./display-board-ingame";
import { GameController } from "./game-controler";
import placeShips, { buttonRandomizeShips, randomizeShips } from "./place-ship";
import Player, { Computer } from "./player";
import screenControler from "./screen-controller";
import "./styles.css";

//screenControler()
const game = new GameController(new Player("dvdfvfd"), new Player("dweds"));
game.randomlyPlaceShip(game.playerOne);
const body = document.querySelector("body");
const boardContainer = document.createElement("div");
const buttonContainer = document.createElement("div");
body.appendChild(boardContainer);
body.appendChild(buttonContainer);
randomizeShips(game.playerOne, boardContainer);
buttonRandomizeShips(game.playerOne, buttonContainer);
document.querySelector(`#${game.playerOne.name}`).addEventListener("click", (e) => {
    e.preventDefault()
    game.randomlyPlaceShip(game.playerOne);
    displayBoard(game.playerOne, boardContainer);
    
})
