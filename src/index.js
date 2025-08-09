import chooseMode from "./choose-mode";
import { GameController } from "./game-controler";
import Player, { Computer } from "./player";
import presentationGame from "./presentation-game";
import screenControler from "./screen-controller";
import "./styles.css";

//const body = document.querySelector("body");
//chooseMode();
//presentationGame(body)
const game = new GameController(new Player("ass"), new Computer());
game.placeShipPlayer_1();
game.randomlyPlaceShip(game.playerTwo);
screenControler(game);
