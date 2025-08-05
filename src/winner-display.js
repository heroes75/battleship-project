import chooseMode from "./choose-mode";

export default function winnerDisplay(player, container) {
    const winnerFrame = document.createElement("div");
    const winnerText = document.createElement("span");
    const button = document.createElement("button");
    winnerFrame.id = "winner-frame";
    winnerText.id = "winner-text";
    button.id = "winner-button";
    button.textContent = "RESTART";
    winnerText.textContent = `${player.name} is the winner`;
    container.appendChild(winnerFrame);
    winnerFrame.appendChild(button);
    winnerFrame.appendChild(winnerText);
    button.addEventListener("click", () => {
        document.querySelector("body").textContent = "";
        chooseMode();
    });
}
