import displayBoardIngame from "./display-board-ingame";

export default function passDeviceScreen(game) {
    const body = document.querySelector("body");
    body.textContent = "";
    const container = document.createElement("div");
    const activeTurn = document.createElement("div");
    const instruction = document.createElement("div");
    const passButton = document.createElement("button");
    container.style.cssText =
        "display: flex; flex-direction: column; align-items: center; gap: 7px";
    activeTurn.id = "active-turn";
    instruction.id = "instruction";
    passButton.id = "pass-button";
    activeTurn.textContent = `This is ${game.activePlayer.name}'s Turn`;
    instruction.textContent = `GIVE HIM THE DEVICE AND LOOK AWAY, ${game.activePlayer === game.playerOne ? game.playerTwo.name : game.playerOne.name}!!`;
    passButton.textContent = `${game.activePlayer.name}, CLICK WHEN YOU HAVE THE DEVICE`;
    passButton.addEventListener("click", () => {
        displayBoardIngame(
            game.activePlayer.hisBoard.board,
            game.aimBoard.board,
            game,
        );
    });

    body.appendChild(container);
    container.appendChild(activeTurn);
    container.appendChild(instruction);
    container.appendChild(passButton);
}
