function player_adder(nameID, buttonID) {
  document.getElementById(buttonID).addEventListener("click", function (event) {
    const playerName = document.getElementById(nameID);
    const name = playerName.innerText;
    const player = document.getElementById("selected-players");
    const element = document.createElement("li");
    element.textContent = name;

    if (player.children.length < 5) {
      player.appendChild(element);
      document.getElementById(buttonID).disabled = true;
    } else {
      alert("You can't select more than 5!");
    }
  });
}

player_adder("messi", "lionel");
player_adder("neymar_name", "neymar_button");
player_adder("mbappe_name", "Mbappe_button");
player_adder("ronaldo_name", "Ronaldo_button");
player_adder("haland_name", "Haland_button");
player_adder("salah_name", "Salah_button");
player_adder("mane_name", "Mane_button");
player_adder("rahim_name", "Rahim_button");
player_adder("vini_name", "vini_id");
