/* eslint-disable no-undef */
import {GameController} from "./game-controler"
import Player, { Computer } from "./player"

describe("test two real player with one boat", () => {
    
     const game = new GameController(player_1 = new Player("player_1"), player_2 = new Player("player_2"));
     game.placeShipPlayer_1();
     game.placeShipPlayer_2();

        test("playRound func.", () => {
            const activeUserBefore = game.getActivePlayer();
            const activeBoardBefore = game.getAimBoard();
            game.playRound(4, 4);
            const activeUserAfter = game.getActivePlayer();
            expect(activeUserBefore).not.toEqual(activeUserAfter);
            expect(activeBoardBefore.board).toContainEqual(
                ["", "", "", "", "O", "", "", "", "", ""]
            );
        })

        test("test winner function", () => {
            game.playRound(0, 5);
            game.playRound(0, 0);
            game.playRound(0, 8);
            game.playRound(0, 1);
            expect(game.isWinner().name).toEqual("player_1")

        })
})

describe("test one real player vs computer with one boat", () => {
    
    const game = new GameController(player_1 = new Player("player_1"), player_2 = new Computer());
    game.placeShipPlayer_1();
    game.placeShipPlayer_2();

        test("playRound func. with computer", () => {
            game.playRound(5, 5);
            const activeUserBefore = game.getActivePlayer();
            const activeBoardBefore = game.getAimBoard();
            game.playRound();
            const activeUserAfter = game.getActivePlayer();
            expect(activeUserBefore).not.toEqual(activeUserAfter);
            expect(activeBoardBefore.board).toContainEqual(
                expect.arrayContaining(['O'])
            );
        })

        test("test winner function with computer", () => {
            game.playRound(0, 0);
            game.playRound();
            game.playRound(0, 1);
            expect(game.isWinner()).toEqual(player_1)
            expect(game.isWinner()).toEqual(player_1)
        })
})