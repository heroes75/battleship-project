export default function shipState(player, container) {
    //const shipsContainer = document.createElement("div");
    const arrayOfShip = player.hisBoard.allShip;
    console.log(arrayOfShip);
    for (let i = 0; i < arrayOfShip.length; i++) {
        const shipContainer = document.createElement("div");
        shipContainer.id = "ship-container";
        const ship = arrayOfShip[i];
        console.log(ship.length);

        for (let i = 0; i < ship.length; i++) {
            const miniBox = document.createElement("div");
            miniBox.style.width = "10px";
            miniBox.style.height = "10px";
            miniBox.style.backgroundColor = "black";
            miniBox.style.border = "1px solid orange";
            shipContainer.appendChild(miniBox);
            if (i < ship.hits) {
                miniBox.style.backgroundColor = "red";
            }
        }
        container.appendChild(shipContainer);
    }
}
