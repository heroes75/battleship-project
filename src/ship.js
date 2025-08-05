import ships from "./the-ships";

export default class Ship {
    constructor({ mark, length, hits, sunk = false }) {
        this.mark = mark;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    }

    hit() {
        return this.hits++;
    }

    isSunk() {
        if (this.hits >= this.length) {
            return (this.sunk = true);
        }
    }
}

//export let destroyer = new Ship("d", 2, 0, false);
export let destroyer = new Ship(ships[0]);
export let submarine = new Ship(ships[1]);
export let cruiser = new Ship(ships[2]);
export let battleship = new Ship(ships[3]);
export let carrier = new Ship(ships[4]);
