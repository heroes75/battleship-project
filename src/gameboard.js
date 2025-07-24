//import { battleship, destroyer } from "./ship";

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill("").map(() => new Array(10).fill(""));
        this.history = [];
        this.allShip = [];
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
        this.allShip.push(ship)
    }

    placeShipAtVertically(ship, x, y) {
        if(this.isOutOfBound(x, ship)) return "impossible";
        if(this.isAlreadyMarked(x, y)) return "impossible";

        for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = ship.mark
        }
        this.allShip.push(ship)
    }

    receiveAttack(x, y) {

        const marked = this.isAlreadyMarked(x, y)
        if(marked && !this.board[x][y].endsWith("H") && this.board[x][y] !== "O") {
            const markShip = this.allShip.filter(el => el.mark === this.board[x][y]);
            this.board[x][y] += "H"
            markShip[0].hit()
        }
        
        if(!marked) {
            this.board[x][y] = "O"
            this.history.push([x, y])
        }
    }
    isAllShipSunk() {
        return this.allShipSunk = this.allShip.every(el => el.sunk === true)
    }
}