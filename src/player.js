import { validate } from "schema-utils";
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
                let x = this.hitMark[0][0];
                let y = this.hitMark[0][1];
                if (this.hitMark.length === 1) {
                    console.log("4", this.validMoves.length === 0);
                    if (this.validMoves.length === 0) {
                        this.validMoves = [
                            [x, y + 1],
                            [x, y - 1],
                            [x + 1, y],
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
                    return (this.nextMove = this.validMoves.pop());
                }
                if (this.hitMark.length === 2) {
                    const x1 = this.hitMark[this.hitMark.length - 1][0];
                    const x2 = this.hitMark[this.hitMark.length - 2][0];
                    const y1 = this.hitMark[this.hitMark.length - 1][1];
                    const y2 = this.hitMark[this.hitMark.length - 2][1];
                    this.dx = x1 - x2;
                    this.dy = y1 - y2;
                    this.validMoves = [
                        [x2 - this.dx, y2 - this.dy],
                        [x2 + this.dx, y2 + this.dy],
                    ];
                    return (this.nextMove = [x1 + this.dx, y1 + this.dy]);
                }

                if (this.hitMark.length > 2) {
                    const x = this.hitMark[this.hitMark.length - 1][0];
                    const y = this.hitMark[this.hitMark.length - 1][1];
                    const a = this.hitMark[this.nextMove.length - 1][0];
                    const b = this.hitMark[this.nextMove.length - 1][1];
                    if (x === a && y === b) {
                        return (this.nextMove = [x + this.dx, y + this.dy]);
                    } else {
                        return (this.nextMove = this.validMoves.pop());
                    }
                }
            }
        }
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

    isHit(game, marks, x, y) {
        if (marks !== "" && marks !== "O") {
            this.hitMark.push([x, y]);
            //mark.slice(-1)
            this.hitShip = game.aimBoard.allShip.filter((el) => {
                console.log(
                    (el.mark === marks.length) === 3
                        ? marks[0] + marks[1]
                        : marks[0],
                );

                return (
                    el.mark ===
                    (marks.length === 3 ? marks[0] + marks[1] : marks[0])
                );
            });
            console.log("this.hitShip[0]", this.hitShip[0]);
            console.log("mark[0]", marks[0]);
            console.log("mark", marks);
            console.log(
                "marks[0]+ marks[1]",
                marks.length === 3 ? marks[0] + marks[1] : marks[0],
            );
            console.log("game.aimBoard.allShip", game.aimBoard.allShip);

            this.hit++;
        }
    }
}

export default class Player {
    constructor(name) {
        this.name = name;
        this.hisBoard = new Gameboard();
    }
}
