import form from "./form";
import presentationGame from "./presentation-game";

const body = document.querySelector("body");
export default function chooseMode() {
    body.textContent = "";
    const chooseContainer = document.createElement("div");
    const presentationContainer = document.createElement("div");
    chooseContainer.id = "chooseContainer";
    const twoPlayer = document.createElement("button");
    const singlePlayer = document.createElement("button");
    const title = document.createElement("div");
    title.id = "title-of-choose";
    title.textContent = "choose your mode:";
    twoPlayer.textContent = "Player vs Player";
    singlePlayer.textContent = "Player vs Computer";
    presentationContainer.id = "presentation-container";
    twoPlayer.id = "pvp";
    singlePlayer.id = "pvc";
    body.appendChild(presentationContainer);
    body.appendChild(chooseContainer);
    chooseContainer.appendChild(title);
    chooseContainer.appendChild(twoPlayer);
    chooseContainer.appendChild(singlePlayer);
    presentationGame(presentationContainer);
    twoPlayer.addEventListener("click", () => {
        form("pvp");
    });
    singlePlayer.addEventListener("click", () => {
        form("pvc");
    });
}
