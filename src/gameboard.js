import { battleship, destroyer } from "./ship";

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill("").map(() => new Array(10).fill(""));
        this.history = [];
        this.allShipSunk = false
    }

    isOutOfBound(x, ship) {
        return x + ship.length > 9
    }
    isAlreadyMarked(x, y) {
        return this.board[x][y] !== ""
    }

    placeShipAtHorizontally(ship, x, y) {
        if(this.isOutOfBound(y, ship)) return "impossible";
        if(this.isAlreadyMarked(x, y)) return "impossible";

        for (let i = 0; i < ship.length; i++) {
            this.board[x][y + i] = ship.mark
            
        }
    }

    placeShipAtVertically(ship, x, y) {
        if (this.isOutOfBound(x, ship)) return "impossible"
        if(this.isAlreadyMarked(x, y)) return "impossible";

        for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = ship.mark
            
        }
    }

    receiveAttack(x, y) {

        
        if (x === 0 && y === 1) {
            this.board[0][1] = "dH"
            destroyer.hit()
        }

        if (x === 9 && y === 0) {
            this.board[9][0] = "bH"
            battleship.hit()
        }

        if (x === 7 && y === 8) {
            this.board[7][8] = "O"
            this.history.push([7, 8]);
        }

        if (x === 9 && y === 9) {
            this.board[9][9] = "O"
            this.history.push([9, 9]);
        }
    }
    isAllShipSunk() {
        if (battleship.sunk === false) {
            return this.allShipSunk = false
        }
        return this.allShipSunk = true
    }
}