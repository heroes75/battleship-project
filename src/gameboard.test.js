/* eslint-disable no-undef */

import { destroyer, carrier, cruiser, battleship, submarine } from "./ship";
import Gameboard from "./gameboard";

let gameboard_1 = new Gameboard();
let gameboard_2 = new Gameboard();

describe("test first game board", () => {
  test("length of all cases should be 100", () => {
    expect(gameboard_1.board.length).toBe(10);
    expect(gameboard_1.board.every((el) => (el.length = 10))).toBe(true);
  });
  test("place the destroyer horizontally at (0, 0)", () => {
    gameboard_1.placeShipAtHorizontally(destroyer, 0, 0);
    let arrayOfMark = [];
    for (let i = 0; i < destroyer.length; i++) {
      arrayOfMark.push(gameboard_1.board[0][i]);
    }
    expect(arrayOfMark.every((el) => el === destroyer.mark)).toBe(true);
  });
  test("place the submarine vertically at (5, 5)", () => {
    gameboard_1.placeShipAtVertically(submarine, 5, 5);
    let arrayOfMark = [];
    for (let i = 0; i < submarine.length; i++) {
      arrayOfMark.push(gameboard_1.board[5 + i][5]);
    }
    expect(arrayOfMark.every((el) => el === submarine.mark)).toBe(true);
    expect(arrayOfMark).toEqual(["s", "s", "s"]);
  });
  test("place the carrier horizontally at (0, 9)", () => {
    expect(gameboard_1.placeShipAtHorizontally(carrier, 0, 9)).toBe(
      "impossible",
    );
  });
  test("place the cruiser and  destroyer at the same line", () => {
    expect(gameboard_1.placeShipAtHorizontally(cruiser, 0, 1)).toBe(
      "impossible",
    );
  });
});

describe("test receiveAttack function", () => {
  test("attack a ship should return 'X' and the hits arise", () => {
    gameboard_1.receiveAttack(0, 1);
    expect(gameboard_1.board[0][1]).toBe("dH");
    expect(destroyer.hits).toBe(1);
  });
  test("attack a ship twice at the same case should do nothing", () => {
    gameboard_1.receiveAttack(0, 1);
    expect(gameboard_1.board[0][1]).toBe("dH");
    expect(destroyer.hits).toBe(1);
  });
  test("attack a empty case should return 'O'", () => {
    gameboard_1.receiveAttack(7, 8);
    expect(gameboard_1.board[7][8]).toBe("O");
    expect(gameboard_1.history[gameboard_1.history.length - 1]).toEqual([7, 8]);
  });
  test("attack a empty case twice should do nothing", () => {
    gameboard_1.receiveAttack(7, 8);
    expect(gameboard_1.board[7][8]).toBe("O");
    expect(gameboard_1.history[gameboard_1.history.length - 1]).toEqual([7, 8]);
  });
});

describe("test if all ship sunk", () => {
  test("should know if all ship dunk", () => {
    destroyer.sunk = true;
    submarine.sunk = true;
    cruiser.sunk = true;
    battleship.sunk = true;
    carrier.sunk = true;
    gameboard_1.isAllShipSunk();
    expect(gameboard_1.allShipSunk).toBe(true);
  });
});

// second test suite

describe("test second game board", () => {
  test("length of all cases should be 100 (2)", () => {
    expect(gameboard_2.board.length).toBe(10);
    expect(gameboard_2.board.every((el) => (el.length = 10))).toBe(true);
  });
  test("place the battleship horizontally at (9, 0)", () => {
    gameboard_2.placeShipAtHorizontally(battleship, 9, 0);
    let arrayOfMark = [];
    for (let i = 0; i < battleship.length; i++) {
      arrayOfMark.push(gameboard_2.board[9][i]);
    }
    expect(arrayOfMark.every((el) => el === battleship.mark)).toBe(true);
  });
  test("place the destroyer vertically at (5, 5)", () => {
    gameboard_2.placeShipAtVertically(destroyer, 5, 5);
    let arrayOfMark = [];
    for (let i = 0; i < destroyer.length; i++) {
      arrayOfMark.push(gameboard_2.board[5 + i][5]);
    }
    expect(arrayOfMark.every((el) => el === destroyer.mark)).toBe(true);
    expect(arrayOfMark).toEqual(["d", "d"]);
  });
  test("place the submarine vertically at (9, 9)", () => {
    expect(gameboard_2.placeShipAtVertically(submarine, 9, 9)).toBe(
      "impossible",
    );
  });
  test("place the cruiser and  battleship at the same line", () => {
    expect(gameboard_2.placeShipAtHorizontally(cruiser, 9, 0)).toBe(
      "impossible",
    );
  });
});

describe("test receiveAttack function (2)", () => {
  test("attack a ship should return 'X' and the hits arise", () => {
    gameboard_2.receiveAttack(9, 0);
    expect(gameboard_2.board[9][0]).toBe("bH");
    expect(battleship.hits).toBe(1);
  });
  test("attack a ship twice at the same case should do nothing (2)", () => {
    gameboard_2.receiveAttack(9, 0);
    expect(gameboard_2.board[9][0]).toBe("bH");
    expect(battleship.hits).toBe(1);
  });
  test("attack a empty case should return 'O'", () => {
    gameboard_2.receiveAttack(9, 9);
    expect(gameboard_2.board[9][9]).toBe("O");
    expect(gameboard_2.history[gameboard_2.history.length - 1]).toEqual([9, 9]);
  });
  test("attack a empty case twice should do nothing (2)", () => {
    gameboard_2.receiveAttack(9, 9);
    expect(gameboard_2.board[9][9]).toBe("O");
    expect(gameboard_2.history[gameboard_2.history.length - 1]).toEqual([9, 9]);
  });
});

describe("test if all ship sunk (2)", () => {
  test("should know if all ship dunk", () => {
    destroyer.sunk = true;
    submarine.sunk = true;
    cruiser.sunk = true;
    battleship.sunk = false;
    carrier.sunk = true;
    gameboard_2.isAllShipSunk();
    expect(gameboard_2.allShipSunk).toBe(false);
  });
});
