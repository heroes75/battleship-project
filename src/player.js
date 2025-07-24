import Gameboard from "./gameboard";

export class Computer {
    constructor() {
        this.hisBoard = new Gameboard();
    }
}

export default class Player extends Computer {
    constructor(name) {
        super()
        this.name = name;
        //this.hisBoard = new Computer();
    }
}

