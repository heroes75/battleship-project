import Gameboard from "./gameboard";

export class Computer {
    constructor() {
        this.hisBoard = new Gameboard();
        this.historyOfMark = []
    }

    autoMark() {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        while (this.historyOfMark.some(el => el[0] === x && el[1] === y) && this.historyOfMark.length !== 0) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        this.historyOfMark.push([x, y])
        console.log([x , y]);
        console.log(this.historyOfMark);
        
        return [x, y]
    }
}

export default class Player {
    constructor(name) {
        this.name = name;
        this.hisBoard = new Gameboard();
    }
}

