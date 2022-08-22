document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerString = document.getElementById('per-player');
    const perPlayer = parseInt(perPlayerString.value);


    const player = document.getElementById('selected-players');
    const numberOfPlayers = player.children.length;

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesTotal = perPlayer * numberOfPlayers;
    playerExpenses.innerText = playerExpensesTotal;
    
    
})



document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesInt = parseInt(playerExpenses.innerText);
    
    const manager = document.getElementById('manager-field');
    const managerInt = parseInt(manager.value);

    const coach = document.getElementById('coach-field');
    const coachInt = parseInt(coach.value);

    const lastTotal = document.getElementById('last-total-field');
    lastTotal.innerText = playerExpensesInt + managerInt + coachInt;



})