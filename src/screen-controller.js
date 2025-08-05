import displayBoardIngame from "./display-board-ingame";

export default function screenControler(game) {
    displayBoardIngame(
        game.activePlayer.hisBoard.board,
        game.aimBoard.board,
        game,
    );
}
