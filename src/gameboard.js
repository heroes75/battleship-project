import { destroyer } from "./ship";

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill(Array(10).fill(""));
    }

    placeShipAt(ship, x, y) {
        if(ship.mark === "d") {
            for (let i = 0; i < 2; i++) {
            this.board[0][i] = "d"
        }}
        if(ship.mark === "s") {
            for (let i = 0; i < 1; i++) {
                this.board[5 + i][5] = "s"
            }
        }
    }
}