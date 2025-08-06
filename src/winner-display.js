import chooseMode from "./choose-mode";
import { Computer } from "./player";

export default function winnerDisplay(player, container) {
    const winnerFrame = document.createElement("div");
    const winnerText = document.createElement("span");
    const button = document.createElement("button");
    winnerFrame.id = "winner-frame";
    winnerText.id = "winner-text";
    button.id = "winner-button";
    button.textContent = "RESTART";
    winnerText.textContent = `${player instanceof Computer ? "Computer" : player.name} is the winner`;
    container.appendChild(winnerFrame);
    winnerFrame.appendChild(winnerText);
    winnerFrame.appendChild(button);
    button.addEventListener("click", () => {
        document.querySelector("body").textContent = "";
        chooseMode();
    });
}
