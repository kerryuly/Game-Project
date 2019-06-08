/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;


init();

function btn(){

    // Does something
}


document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {

         // 1. Generate random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;

    

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    var diceDOM1 = document.querySelector('.dice-1');
    diceDOM.style.display = 'block';
    diceDOM1.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png'; 
    diceDOM1.src = 'dice-'+ dice1 + '.png'; 
    
    // If player rolls  two 6s in a row
    var counter = 0
    lastDiceRoll = dice+dice1;

    if (lastDiceRoll === 12){

        counter++;

        if (counter === 2) {

            scores[activePlayer] = 0;
            nextPlayer();
        }

    } else (
        counter = 0
    )

    // 3. Update round score IF the rolled number wasn't 1

    if (dice !== 1 && dice1 !== 1){
        // Add score
        roundScore += dice + dice1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {

        //Switch to next player
        nextPlayer();

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
    }


    }
   

})

document.querySelector('.btn-hold').addEventListener('click' , function(){

    
    if (gamePlaying){
        // Add current score to Global Score
    scores[activePlayer] += roundScore;
    }


    // Update UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.winning-score').value;
    var winningScore;

    if (input){
        var winningScore = input;
    } else {
        winningScore = 100;
    }
    
    // Check if player won the game.
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel' ).classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel' ).classList.remove('active');
        gamePlaying = false;
        
    } else {
        nextPlayer()
    }

})

 

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice-1').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0' ).textContent = 'PLayer 1';
document.getElementById('name-1' ).textContent = 'PLayer 2';
document.getElementById('name-0' ).textContent = 'PLayer 1';
document.querySelector('.player-0-panel' ).classList.remove('winner');
document.querySelector('.player-1-panel' ).classList.remove('winner');
document.querySelector('.player-0-panel' ).classList.remove('active');
document.querySelector('.player-1-panel' ).classList.remove('active');
document.querySelector('.player-0-panel' ).classList.add('active'); 

gamePlaying = true;



}


// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);