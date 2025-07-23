export default class Ship {
     constructor(mark, length, hits, sunk = false) {
        this.mark = mark;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk
    }

    hit() {
        return this.hits++
    }

    isSunk() {
        if (this.hits >= this.length) {
            return this.sunk = true
        }
    }
}

    
export let destroyer = new Ship("d", 2, 0, false);
export let submarine = new Ship("s", 3, 0);
export let cruiser = new Ship("cr", 3, 0);
export let battleship = new Ship("b", 4, 0, false);
export let carrier = new Ship("ca", 5, 0);
