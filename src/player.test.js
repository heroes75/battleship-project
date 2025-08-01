/* eslint-disable no-undef */
import Player, { Computer } from "./player";

describe("test real player_1 and player_2", () => {
  let player_1 = new Player("player_1");
  let player_2 = new Player("player_2");
  test("player_1 board", () => {
    expect(player_1.hisBoard.board.length).toBe(10);
  });
  test("player_2 board", () => {
    expect(player_2.hisBoard.board.length).toBe(10);
  });
});

describe("test computer player", () => {
  let computer = new Computer();
  test("computer board", () => {
    expect(computer.hisBoard.board.length).toBe(10);
  });
});
