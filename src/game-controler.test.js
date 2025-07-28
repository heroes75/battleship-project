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
            //const activeBoardBefore = game.getActivePlayer();
            game.playRound(4, 4);
            const activeUserAfter = game.getActivePlayer();
            //const activeBoardAfter = game.playerTwo.hisBoard;
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
            expect(game.isWinner()).toEqual(player_1)
        })
})

//c'est la classe computer qui doit gerer les coordonnes des marques
describe("test onee real player vs computer with one boat", () => {
    
     const game = new GameController(player_1 = new Player("player_1"), player_2 = new Computer());
     game.placeShipPlayer_1();
     game.placeShipPlayer_2();

        test("playRound func. with computer", () => {
            game.playRound(5, 5);
            const activeUserBefore = game.getActivePlayer();
            const activeBoardBefore = game.getAimBoard();
            //const activeBoardBefore = game.getActivePlayer();
            game.playRound(4, 4);
            const activeUserAfter = game.getActivePlayer();
            //const activeBoardAfter = game.playerTwo.hisBoard;
            expect(activeUserBefore).not.toEqual(activeUserAfter);
            expect(activeBoardBefore.board).toContainEqual(
                ["", "", "", "", "O", "", "", "", "", ""]
            );
        })

        test("test winner function with computer", () => {
            game.playRound(0, 5);
            game.playRound(0, 0);
            game.playRound(0, 8);
            game.playRound(0, 1);
            expect(game.isWinner()).toEqual(player_1)
        })
})