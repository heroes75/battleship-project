import ships from "./the-ships";
import Ship from "./ship"

export class GameController {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.activePlayer = playerOne;
        this.aimBoard = playerTwo.hisBoard;
    }

    placeShipPlayer_1() {
        this.playerOne.placeShipAtHorizontally(new Ship(ships[0].mark, ships[0].length, ships[0].hits, ships[0].sunk), 0, 0);
        this.playerOne.placeShipAtHorizontally(new Ship(ships[1].mark, ships[1].length, ships[1].hits, ships[1].sunk), 1, 0);
    }
    
    getActivePlayer() {
        return this.activePlayer
    }

    getAimBoard() {
        return this.aimBoard;
    } 
    
    switchPlayer() {
        return this.activePlayer = this.getActivePlayer() === this.playerOne ? this.playerTwo : this.playerOne
    }

    switchAimBoard() {
        return this.aimBoard = this.getAimBoard() === this.playerTwo.hisBoard ? this.playerOne.hisBoard : this.playerTwo.hisBoard
    }

    playRound(x, y) {
        const attack = this.aimBoard.receiveAttack(x, y);
        if(attack === false) return
        //if(this.aimBoard.isAllShipSunk()) return `${this.activePlayer}is winner`
        this.switchPlayer();
        this.switchAimBoard();
    }
}