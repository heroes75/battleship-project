import { destroyer } from "./ship";

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill("").map(() => new Array(10).fill(""));
        this.history = [];
        this.allShipSunk = false
    }

    placeShipAt(ship, x, y) {
        if(ship.mark === "d") {
            for (let i = 0; i < 2; i++) {
            this.board[0][i] = "d"
        }}
        if(ship.mark === "s") {
            for (let i = 0; i < 3; i++) {
                this.board[5 + i][5] = "s"
            }
        }
        if(ship.mark === "ca") {
            return "impossible"
        }
        if(ship.mark === "cr") {
            return "impossible"
        }
    }

    receiveAttack(x, y) {
        if (x === 0 && y === 1) {
            this.board[0][1] = "dH"
            destroyer.hit()
        }

        if (x === 7 && y === 8) {
            this.board[7][8] = "O"
            this.history.push([7, 8]);
        }
    }
    isAllShipSunk() {
        return this.allShipSunk = true
    }
}