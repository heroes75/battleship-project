/* eslint-disable no-undef */

import Ship from "./ship";
import Gameboard from "./gameboard";


let destroyer = new Ship("d", 2, 0, false);
let submarine = new Ship("s", 3, 0);
let cruiser = new Ship("cr", 3, 0);
let battleship = new Ship("b", 4, 0);
let carrier = new Ship("ca", 5, 0);

let gameboard_1 = new Gameboard()

describe("test first game board", () => {
    test("length of all cases should be 100", () => {
        expect(gameboard_1.board.length).toBe(10);
        expect(gameboard_1.board.every((el) => el.length = 10)).toBe(true);
    })
    test("place the destroyer horizontally at (0, 0)", () => {
        gameboard_1.placeShipAt(destroyer, 0, 0);
        let arrayOfMark = [];
        for (let i = 0; i < destroyer.length; i++) {
            arrayOfMark.push(gameboard_1.board[0][i])
        }
        expect(arrayOfMark.every(el => el === destroyer.mark)).toBe(true)
    })
    test("place the submarine vertically at (5, 5)", () => {
        gameboard_1.placeShipAt(submarine, 5, 5);
        let arrayOfMark = [];
        for (let i = 0; i < submarine.length; i++) {
            arrayOfMark.push(gameboard_1.board[5 + i][5])
            console.log(gameboard_1.board[0][5]);
        }
        expect(arrayOfMark.every(el => el === submarine.mark)).toBe(true)
        //expect(submarine.length).toEqual(7)
        expect(gameboard_1.board).toEqual(["1", "r", "44s", "sdf"])
    })
    test("place the carrier at (0, 97)", () => {
        expect(gameboard_1.placeShipAt(carrier, 0, 97)).toBe("impossible")
    })
    test("place the cruiser and  destroyer at the same line", () => {
        expect(gameboard_1.placeShipAt(cruiser, 0, 1)).toBe("impossible")
    })

})

describe("test receiveAttack function", () => {
    test("attack a ship should return 'X' and the hits arise", () => {
        gameboard_1.receiveAttack(0, 1);
        expect(gameboard_1.board[0][1]).toBe("dH");
        expect(destroyer.hits).toBe(1);
    });
    test("attack a empty case should return 'O'", () => {
        gameboard_1.receiveAttack(0, 1);
        expect(gameboard_1.board[6][3]).toBe("O");
        expect(gameboard_1.history[gameboard_1.history.length - 1]).toBe([6, 3]);
    });
})

describe("test if all ship sunk", () => {
    test("should know if all ship dunk", () => {
        destroyer.sunk = true;
        submarine.sunk = true;
        cruiser.sunk = true;
        battleship.sunk = true;
        carrier.sunk = true;
        expect(allShipSunk).toBe(true)
    })
})