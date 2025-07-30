import displayBoardIngame from "./display-board-ingame";
import { GameController } from "./game-controler";
import Player, { Computer } from "./player";
import "./styles.css";
const game = new GameController(new Player("player_1"), new Computer());
game.placeShipPlayer_1()
game.placeShipPlayer_2()
displayBoardIngame(game.activePlayer.hisBoard.board, game.aimBoard.board, game)