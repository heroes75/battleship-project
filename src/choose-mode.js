import form from "./form";

const body = document.querySelector("body");
export default function  chooseMode() {
    const chooseContainer = document.createElement("div");
    chooseContainer.id = "chooseContainer";
    const twoPlayer = document.createElement("button");
    const singlePlayer = document.createElement("button");
    const title = document.createElement("div");
    title.id = "title-of-choose";
    title.textContent = "choose your mode:"
    twoPlayer.textContent = "Player vs Player";
    singlePlayer.textContent = "Player vs Computer";
    twoPlayer.id = "pvp";
    singlePlayer.id = "pvc";
    body.appendChild(chooseContainer);
    chooseContainer.appendChild(title);
    chooseContainer.appendChild(twoPlayer);
    chooseContainer.appendChild(singlePlayer);
    twoPlayer.addEventListener("click", () => {
        form("pvp")
    })
    singlePlayer.addEventListener("click", () => {
        form("pvc")
    })
}