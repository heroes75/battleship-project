import Gameboard from "./gameboard";

export class Computer {
    constructor() {
        this.hisBoard = new Gameboard();
        this.historyOfMark = [];
        this.hitMark = [];
        this.hitShip = [];
        this.hit = 0;
        this.validMoves = [];
        this.nextMove = [];
        this.dx = 0;
        this.dy = 0;
    }

    autoMark() {
        console.log("1", this.hitMark.length !== 0);

        if (this.hitMark.length !== 0) {
            console.log("2", this.hit !== this.hitShip[0].length);
            if (this.hit !== this.hitShip[0].length) {
                console.log("3", this.hitMark.length === 1);
                console.log("31", this.hitMark);
                let x = this.hitMark[0][0];
                let y = this.hitMark[0][1];
                if (this.hitMark.length === 1) {
                    console.log("4", this.validMoves.length === 0);
                    if (this.validMoves.length === 0) {
                        this.validMoves = [
                            [x, y + 1],
                            [x + 1, y],
                            [x, y - 1],
                            [x - 1, y],
                        ]
                            .filter((el1) =>
                                this.historyOfMark.every(
                                    (el) =>
                                        !(el[0] === el1[0] && el[1] === el1[1]),
                                ),
                            )
                            .filter(
                                (el) =>
                                    el[0] >= 0 &&
                                    el[0] < 10 &&
                                    el[1] >= 0 &&
                                    el[1] < 10,
                            );
                    }
                    console.log("this.validMoves", this.validMoves);
                    console.log(this.hitMark);
                    if (this.validMoves.length === 0) {
                        this.resetMove();
                        return this.randomArray();
                    }
                    this.nextMove = this.validMoves.pop();
                    this.historyOfMark.push(this.nextMove);

                    return this.nextMove;
                }
                console.log("5", this.hitMark.length === 2);

                if (this.hitMark.length === 2) {
                    const x1 = this.hitMark[1][0];
                    const x2 = this.hitMark[0][0];
                    const y1 = this.hitMark[1][1];
                    const y2 = this.hitMark[0][1];
                    this.dx = x1 - x2;
                    this.dy = y1 - y2;
                    this.validMoves = this.validMoves
                        .filter((el1) =>
                            this.historyOfMark.every(
                                (el) => !(el[0] === el1[0] && el[1] === el1[1]),
                            ),
                        )
                        .filter(
                            (el) =>
                                x2 - el[0] === this.dx &&
                                y2 - el[1] === this.dy,
                        );

                    console.log("this.validMoves in hitMark2", this.validMoves);
                    const bound = this.isOutofBound([
                        x1 + this.dx,
                        y1 + this.dy,
                    ]);
                    const repeat = this.isRepeat([x1 + this.dx, y1 + this.dy]);
                    if (bound && repeat) {
                        this.nextMove = [x1 + this.dx, y1 + this.dy];
                        this.historyOfMark.push(this.nextMove);
                        console.log(
                            "this.nextMove in hitMark2 in",
                            this.nextMove,
                        );
                        return this.nextMove;
                    } else {
                        if (this.validMoves.length === 0) {
                            this.resetMove();
                            return this.randomArray();
                        }
                        this.nextMove = this.validMoves.pop();
                        this.historyOfMark.push(this.nextMove);

                        return this.nextMove;
                    }
                }

                if (this.hitMark.length > 2) {
                    const x = this.hitMark[this.hitMark.length - 1][0];
                    const y = this.hitMark[this.hitMark.length - 1][1];
                    const a = this.nextMove[0];
                    const b = this.nextMove[1];
                    console.log({ x }, { y });
                    console.log({ a }, { b });
                    console.log(this.nextMove);
                    const bound = this.isOutofBound([x + this.dx, y + this.dy]);
                    const repeat = this.isRepeat([x + this.dx, y + this.dy]);
                    console.log({ bound }, { repeat });

                    if (x === a && y === b && bound && repeat) {
                        this.nextMove = [x + this.dx, y + this.dy];

                        this.historyOfMark.push(this.nextMove);

                        return this.nextMove;
                    } else {
                        if (this.validMoves.length !== 0) {
                            this.nextMove = this.validMoves.pop();
                            console.log(this.validMoves);
                            this.historyOfMark.push(this.nextMove);

                            return this.nextMove;
                        }
                        this.nextMove = [x - this.dx, y - this.dy];
                        console.log(this.validMoves);
                        if (this.nextMove.length === 0) {
                            this.resetMove();
                            return this.randomArray();
                        }
                        this.historyOfMark.push(this.nextMove);

                        return this.nextMove;
                    }
                }
            } else {
                console.log("yes yes yes");
                this.resetMove();
            }
        }
        return this.randomArray();
    }

    isOutofBound([a, b]) {
        return a >= 0 && a < 10 && b >= 0 && b < 10;
    }

    isRepeat([a, b]) {
        return this.historyOfMark.every((el) => !(el[0] === a && el[1] === b));
    }

    isHit(game, marks, x, y) {
        console.log([{ x }, { y }]);
        console.log(this.historyOfMark);

        if (marks !== "" && marks !== "O") {
            if (this.hitShip.length === 0) {
                console.log("no no no");
                console.log(marks);

                this.hitShip = game.aimBoard.allShip.filter(
                    (el) =>
                        el.mark ===
                        (marks.length === 3 ? marks[0] + marks[1] : marks[0]),
                );
                console.log(this.hitShip);

                this.hitMark.push([x, y]);
                this.hit =
                    this.hitShip[0].hits !== 0
                        ? this.hitShip[0].hits
                        : ++this.hit;
                return;
            }
            console.log(
                "(marks.length === 3 ? marks[0] + marks[1] : marks[0]) === this.hitShip[0].mark",
                (marks.length === 3 ? marks[0] + marks[1] : marks[0]) ===
                    this.hitShip[0].mark,
            );

            if (
                (marks.length === 3 ? marks[0] + marks[1] : marks[0]) ===
                this.hitShip[0].mark
            ) {
                this.hitMark.push([x, y]);
                this.hit++;
            }
        }
    }

    resetMove() {
        this.hitMark = [];
        this.hitShip = [];
        this.hit = 0;
        this.validMoves = [];
        this.nextMove = [];
        this.dx = 0;
        this.dy = 0;
    }
    randomArray() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (
            this.historyOfMark.some((el) => el[0] === x && el[1] === y) &&
            this.historyOfMark.length !== 0
        ) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            console.log({ x, y });
        }
        this.historyOfMark.push([x, y]);
        console.log([x, y]);
        console.log(this.historyOfMark);

        return [x, y];
    }
}

export default class Player {
    constructor(name) {
        this.name = name;
        this.hisBoard = new Gameboard();
    }
}
