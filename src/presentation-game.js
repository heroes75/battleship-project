import photoOfBattleship from "./Regions_and_Prefectures_of_Japan_(fr).svg";

export default function presentationGame(container) {
  const imageContainer = document.createElement("div");
  const gameContainer = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("span");
  imageContainer.id = "image-container";
  img.id = "battleship-img";
  p.id = "gameName";
  img.src = photoOfBattleship;
  p.textContent = "BATTLESHIP";
  container.appendChild(imageContainer);
  container.appendChild(gameContainer);
  imageContainer.appendChild(img);
  gameContainer.appendChild(p);
}
