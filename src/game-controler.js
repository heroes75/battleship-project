import ships from "./the-ships";
import Ship from "./ship";
import { Computer } from "./player";
//import displayBoard from "./display-board";
import displayBoardIngame from "./display-board-ingame";
//import displayAimBoard from "./display-aimBoard";

export class GameController {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.activePlayer = playerOne;
        this.aimBoard = playerTwo.hisBoard;
    }

    placeShipPlayer_1() {
        this.playerOne.hisBoard.placeShipAtHorizontally(
            new Ship(ships[0]),
            0,
            0,
        );
        this.playerOne.hisBoard.placeShipAtHorizontally(
            new Ship(ships[1]),
            1,
            0,
        );
        this.playerOne.hisBoard.placeShipAtHorizontally(
            new Ship(ships[2]),
            2,
            0,
        );
        this.playerOne.hisBoard.placeShipAtHorizontally(
            new Ship(ships[3]),
            3,
            0,
        );
        this.playerOne.hisBoard.placeShipAtHorizontally(
            new Ship(ships[4]),
            4,
            0,
        );
    }

    placeShipPlayer_2() {
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[0]), 0, 0);
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[1]), 0, 1);
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[2]), 0, 2);
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[3]), 0, 3);
        this.playerTwo.hisBoard.placeShipAtVertically(new Ship(ships[4]), 0, 4);
    }

    randomlyPlaceShip(player) {
        player.hisBoard.eraseBoard();
        player.hisBoard.resetAllShip();

        for (let i = 0; i < ships.length; i++) {
            const OneOrTwo = () => Math.floor(Math.random() * 2);
            const betweenOneAndNine = () => Math.floor(Math.random() * 10);
            let placedShip =
                OneOrTwo() === 1
                    ? player.hisBoard.placeShipAtHorizontally(
                          new Ship(ships[i]),
                          betweenOneAndNine(),
                          betweenOneAndNine(),
                      )
                    : player.hisBoard.placeShipAtVertically(
                          new Ship(ships[i]),
                          betweenOneAndNine(),
                          betweenOneAndNine(),
                      );
            console.log(placedShip);

            while (placedShip === "impossible") {
                placedShip =
                    OneOrTwo() === 1
                        ? player.hisBoard.placeShipAtHorizontally(
                              new Ship(ships[i]),
                              betweenOneAndNine(),
                              betweenOneAndNine(),
                          )
                        : player.hisBoard.placeShipAtVertically(
                              new Ship(ships[i]),
                              betweenOneAndNine(),
                              betweenOneAndNine(),
                          );
            }
        }
    }

    getActivePlayer() {
        return this.activePlayer;
    }

    getAimBoard() {
        return this.aimBoard;
    }

    switchPlayer() {
        return (this.activePlayer =
            this.getActivePlayer() === this.playerOne
                ? this.playerTwo
                : this.playerOne);
    }

    switchAimBoard() {
        if (this.activePlayer)
            return (this.aimBoard =
                this.getAimBoard() === this.playerTwo.hisBoard
                    ? this.playerOne.hisBoard
                    : this.playerTwo.hisBoard);
    }

    playRound(x, y) {
        if (this.isWinner()) return;
        if (this.activePlayer instanceof Computer) {
            const mark = this.activePlayer.autoMark();
            const attack = this.aimBoard.receiveAttack(mark[0], mark[1]);

            if (attack === false || this.isWinner()) {
                displayBoardIngame(
                    this.activePlayer.hisBoard.board,
                    this.aimBoard.board,
                    this,
                );
                return;
            }
            this.switchPlayer();
            this.switchAimBoard();
            displayBoardIngame(
                this.activePlayer.hisBoard.board,
                this.aimBoard.board,
                this,
            );
            return;
        } else {
            const attack = this.aimBoard.receiveAttack(x, y);
            displayBoardIngame(
                this.activePlayer.hisBoard.board,
                this.aimBoard.board,
                this,
            );
            if (attack === false || this.isWinner()) return;
            console.log(this.isWinner());
            console.log(this.playerTwo.hisBoard.allShip);

            setTimeout(() => {
                this.switchPlayer();
                this.switchAimBoard();
                displayBoardIngame(
                    this.activePlayer.hisBoard.board,
                    this.aimBoard.board,
                    this,
                );
            }, 150);
        }
    }

    isWinner() {
        if (this.aimBoard.isAllShipSunk()) return this.activePlayer;
    }
}
