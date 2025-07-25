/* eslint-disable no-undef */
import {GameController} from "./game-controler"
import Player from "./player"

describe("test two real player with one boat", () => {
    //let player_1 = new Player("player_1");
    
    //let player_2 = new Player("player_2")
     const game = new GameController(player_1 = new Player("player_1"), player_2 = new Player("player_2"))
        test("test newplayround", () => {
            //GameController.printNewRound();
            expect(game.getActivePlayer()).toBe(player_1);
            expect(game.getAimBoard()).toBe(player_2.hisBoard);
        })
        test("test switchplayer func. and switchBoard func.", () => {
            game.switchPlayer();
            game.switchAimBoard();
            expect(game.getActivePlayer()).toEqual(player_2);
            expect(game.getAimBoard()).toEqual(player_1.hisBoard);
        })

        test("playRound func.", () => {
            const activeUserBefore = game.getActivePlayer();
            const activeBoardBefore = game.getAimBoard();
            //const activeBoardBefore = game.getActivePlayer();
            game.playRound(4, 4);
            const activeUserAfter = game.getActivePlayer();
            const activeBoardAfter = game.playerTwo.hisBoard;
            expect(activeUserBefore).not.toEqual(activeUserAfter);
            expect(activeBoardBefore).not.toEqual(activeBoardAfter);
        })
})