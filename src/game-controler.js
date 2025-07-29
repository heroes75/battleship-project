import ships from "./the-ships";
import Ship from "./ship"
import { Computer } from "./player";

export class GameController {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.activePlayer = this.playerOne;
        this.aimBoard = this.playerTwo.hisBoard;
    }

    placeShipPlayer_1() {
        this.playerOne.hisBoard.placeShipAtHorizontally(new Ship(ships[0]), 0, 0);
        //this.playerOne.placeShipAtHorizontally(new Ship(ships[1]), 1, 0);
    }

    placeShipPlayer_2() {
        this.playerTwo.hisBoard.placeShipAtHorizontally(new Ship(ships[0]), 0, 0);
        //this.playerOne.placeShipAtHorizontally(new Ship(ships[1]), 1, 0);
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

        const attack = this.activePlayer instanceof Computer 
            ? this.aimBoard.receiveAttack(this.activePlayer.autoMark()[0],this.activePlayer.autoMark()[1]) 
            : this.aimBoard.receiveAttack(x, y);
        if(attack === false || this.isWinner()) return
        //if(this.aimBoard.isAllShipSunk()) return `${this.activePlayer}is winner`
        this.switchPlayer();
        this.switchAimBoard();
    }

    isWinner() {
        if(this.aimBoard.isAllShipSunk()) return this.activePlayer
    }
}