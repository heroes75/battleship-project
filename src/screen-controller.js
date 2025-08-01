import displayBoardIngame from "./display-board-ingame";
import { GameController } from "./game-controler";
import Player, { Computer } from "./player";

export default function screenControler(game) {
  //const game = new GameController(new Player("player_1"), new Player("rtggd"));
  //.placeShipPlayer_1()
  //game.placeShipPlayer_2()
  displayBoardIngame(
    game.activePlayer.hisBoard.board,
    game.aimBoard.board,
    game,
  );
  //if(game.activePlayer instanceof Computer) {
  //    game.playRound();

  //    displayBoardIngame(game.activePlayer.hisBoard.board, game.aimBoard.board, game);
  //}
}
