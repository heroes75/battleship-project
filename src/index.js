import { GameController } from "./game-controler";
import Player from "./player";
import "./styles.css";
const game = new GameController(new Player("player_1"), new Player("player_2"))
game.placeShipPlayer_1();
game.placeShipPlayer_2();