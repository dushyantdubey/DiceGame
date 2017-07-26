/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var activePlayer, scores, currentScore,gameOver;

ResetAllData();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(!gameOver){
    var  dice = Math.ceil((Math.random()*6));
   var imageDOM = document.querySelector('.dice');
    imageDOM.style.display = 'block';
    imageDOM.src = 'dice-'+dice+'.png';
    if(dice !== 1)
        {
            currentScore += dice;
            document.getElementById('current-'+activePlayer).textContent = currentScore;
        }
    else
    {
     SameLogic();
    }
    }
    
    
});

// Here SetFinalCourse is used as Callback Function
 document.querySelector('.btn-hold').addEventListener('click', SetFinalCourse);

document.querySelector('.btn-new').addEventListener('click', ResetAllData);
    
function SetFinalCourse(){
    if(gameOver !== true)
        {
     scores[activePlayer] += currentScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    // here this.scores will give error at runtime.
    // Hence it is proven that value of this keyword decided at runtime.
        if(window.scores[activePlayer]>= 20)
            {
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                document.getElementById('name-'+ activePlayer).textContent = "Winner!";
                gameOver = true;
               // ResetAllData();
            }
        else
            {
                SameLogic();
            }
        }
    }
    
   function SameLogic()
{
      currentScore = 0;
      document.querySelector('#current-'+activePlayer).textContent = currentScore;
      activePlayer === 1 ? activePlayer= 0 : activePlayer= 1;
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.getElementById('diceImage').style.display = 'none';
}

function ResetAllData()
{
        gameOver = false;
        activePlayer = 0;
        scores = [0,0];
        currentScore = 0;
        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.getElementById('diceImage').style.display ='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        document.querySelector('.player-'+1+'-panel').classList.remove('active');
     document.getElementById('name-'+ 0).textContent = "Player 1";
     document.getElementById('name-'+ 1).textContent = "Player 2";
}

