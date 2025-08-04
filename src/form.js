import { GameController } from "./game-controler";
import placeShipsInDOM from "./place-ships-in-DOM";
import Player, { Computer } from "./player";
import presentationGame from "./presentation-game";

export default function form(mode) {
  const body = document.querySelector("body");
  body.textContent = "";
  const container = document.createElement("div");
  const presentationContainer = document.createElement("div");
  const input1Container = document.createElement("div");
  const input2Container = document.createElement("div");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  container.id = "form-container";
  presentationContainer.id = "presentation-container";
  input2Container.id = "input2-Container";
  label1.id = "label-input1";
  label1.id = "label-input1";
  label1.setAttribute("for", "input1");
  label2.setAttribute("for", "input2");
  label2.id = "label-input2";
  input1.id = "input1";
  input1.setAttribute("required", "required");
  input1.name = "input1";
  input2.id = "input2";
  input2.setAttribute("required", "required");
  input2.name = "input2";
  button.id = "submit";
  buttonContainer.id = "button-container";
  button.textContent = "submit";
  label1.textContent = "enter name of player 1";
  label2.textContent = "enter name of player 2";
  input1.placeholder = "ex. inuyasha"
  input2.placeholder = "ex. kagome"
  presentationGame(presentationContainer)
  if (mode === "pvc") input2Container.hidden = true;
  body.appendChild(presentationContainer);
  body.appendChild(container);
  container.appendChild(input1Container);
  container.appendChild(input2Container);
  container.appendChild(buttonContainer);
  input1Container.appendChild(label1);
  input1Container.appendChild(input1);
  input2Container.appendChild(label2);
  input2Container.appendChild(input2);
  buttonContainer.appendChild(button);

  button.addEventListener("click", () => {
    if (input1.validity.valueMissing || (mode !== "pvc" && input2.validity.valueMissing)) return
    if (mode === "pvp") {
      const game = new GameController(
        new Player(input1.value),
        new Player(input2.value),
      );
      placeShipsInDOM(game.playerOne, game);
    }
    if (mode === "pvc") {
      const game = new GameController(new Player(input1.value), new Computer());
      placeShipsInDOM(game.playerOne, game);
    }
  });
}
