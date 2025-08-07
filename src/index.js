import chooseMode from "./choose-mode";
import { GameController } from "./game-controler";
import presentationGame from "./presentation-game";
import "./styles.css";
import Player from "./player";
import placeShipsInDOM from "./place-ships-in-DOM";

const body = document.querySelector("body");
//chooseMode();
const game = new GameController(new Player("2"), new Player("2"))
//presentationGame(body)
placeShipsInDOM(game.activePlayer, game)
