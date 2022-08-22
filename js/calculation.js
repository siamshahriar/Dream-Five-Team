function getIntValueOfTextField(field) {
  const perPlayerString = document.getElementById(field);
  const perPlayer = parseInt(perPlayerString.innerText);
  return perPlayer;
}

function getIntValueOfInputField(field) {
  const manager = document.getElementById(field);
  const managerInt = parseInt(manager.value);
  return managerInt;
}

function setInnerText(field, value) {
  const playerExpenses = document.getElementById(field);
  playerExpenses.innerText = value;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayer = getIntValueOfInputField("per-player");

  const player = document.getElementById("selected-players");
  const numberOfPlayers = player.children.length;

  const playerExpensesTotal = perPlayer * numberOfPlayers;

  setInnerText("player-expenses", playerExpensesTotal);
});

document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const playerExpensesInt = getIntValueOfTextField("player-expenses");

    const managerInt = getIntValueOfInputField("manager-field");

    const coachInt = getIntValueOfInputField("coach-field");

    const total = playerExpensesInt + managerInt + coachInt;

    setInnerText("last-total-field", total);
  });
