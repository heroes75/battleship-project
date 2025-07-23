/* eslint-disable no-undef */

import { destroyer, carrier, cruiser, battleship, submarine } from "./ship";
import Ship from "./ship";
import Gameboard from "./gameboard";



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
        }
        expect(arrayOfMark.every(el => el === submarine.mark)).toBe(true)
        expect(arrayOfMark).toEqual(["s", "s", "s"])
    })
    test("place the carrier at (0, 9)", () => {
        expect(gameboard_1.placeShipAt(carrier, 0, 9)).toBe("impossible")
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
        gameboard_1.receiveAttack(7, 8);
        expect(gameboard_1.board[7][8]).toBe("O");
        expect(gameboard_1.history[gameboard_1.history.length - 1]).toEqual([7, 8]);
    });
})

describe("test if all ship sunk", () => {
    test("should know if all ship dunk", () => {
        destroyer.sunk = true;
        submarine.sunk = true;
        cruiser.sunk = true;
        battleship.sunk = true;
        carrier.sunk = true;
        gameboard_1.isAllShipSunk()
        expect(gameboard_1.allShipSunk).toBe(true)
    })
})