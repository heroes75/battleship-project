import Gameboard from "./gameboard";

export class Computer {
    constructor() {
        this.hisBoard = new Gameboard();
        this.historyOfMark = []
    }

    autoMark() {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        while (this.historyOfMark.some(el => el[0] === x && el[1] === y)) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        this.historyOfMark.push([x, y])
        return [x, y]
    }
}

export default class Player {
    constructor(name) {
        this.name = name;
        this.hisBoard = new Gameboard();
    }
}

