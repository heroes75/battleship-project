import ships from "./the-ships";
import Ship from "./ship"
import { Computer } from "./player";
//import displayBoard from "./display-board";
import displayBoardIngame from "./display-board-ingame";
//import displayAimBoard from "./display-aimBoard";

export class GameController {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.activePlayer = playerOne;
        this.aimBoard = playerTwo.hisBoard;
    }

    placeShipPlayer_1() {
        this.playerOne.hisBoard.placeShipAtHorizontally(new Ship(ships[0]), 0, 0);
        //this.playerOne.placeShipAtHorizontally(new Ship(ships[1]), 1, 0);
        //displayBoard(this.playerOne.hisBoard.board)
    }

    placeShipPlayer_2() {
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[0]), 0, 0);
        //this.playerOne.placeShipAtHorizontally(new Ship(ships[1]), 1, 0);
        //displayBoard(this.playerTwo.hisBoard.board)
    }
    
    getActivePlayer() {
        return this.activePlayer
    }

    getAimBoard() {
        return this.aimBoard;
    } 
    
    switchPlayer() {
        return this.activePlayer = this.getActivePlayer() === this.playerOne ? this.playerTwo : this.playerOne;
    }

    switchAimBoard() {
        if (this.activePlayer)
        return this.aimBoard = this.getAimBoard() === this.playerTwo.hisBoard ? this.playerOne.hisBoard : this.playerTwo.hisBoard;
    }

    playRound(x, y) {

        if(this.isWinner()) return
        const attack = this.activePlayer instanceof Computer 
            ? this.aimBoard.receiveAttack(this.activePlayer.autoMark()[0],this.activePlayer.autoMark()[1]) 
            : this.aimBoard.receiveAttack(x, y);
        //displayBoardIngame(this.activePlayer.hisBoard.board, this.aimBoard.board, this)
        if(attack === false || this.isWinner()) return
        //if(this.aimBoard.isAllShipSunk()) return `${this.activePlayer}is winner`;
        setTimeout(() => {
            this.switchPlayer();
            this.switchAimBoard();
            displayBoardIngame(this.activePlayer.hisBoard.board, this.aimBoard.board, this)
        }, 150);
        
    }

    isWinner() {
        if(this.aimBoard.isAllShipSunk()) return this.activePlayer;
    }
}