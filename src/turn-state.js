import { Computer } from "./player";
export default function turnState(player, container) {
    const turnPresentation = document.createElement("div");
    const turnText = document.createElement("span");
    turnPresentation.id = "turn-presentation";
    turnText.id = "turn-text";
    turnText.textContent = `${player instanceof Computer ? "Computer" : player.name}'s turn`;
    container.appendChild(turnPresentation);
    turnPresentation.appendChild(turnText);
}
