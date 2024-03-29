/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundscore,activeplayer,dice,game;

scores=[0,0];
roundscore=0;
activeplayer=0;
game=true;


document.querySelector('.dice').style.display='none';

document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;


document.querySelector('.btn-roll').addEventListener('click',function(){
	if(game)
	{
	var dice = Math.floor(Math.random()*6)+1;
	document.querySelector('.dice').style.display='block';
	document.querySelector('.dice').src='dice-'+dice+'.png';
	if(dice===1)
	{
		document.querySelector('#current-'+activeplayer).textContent=0; 
       	document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
		activeplayer=1-activeplayer;
		document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
		roundscore=0;
	}
	else
	{
	roundscore+=dice;
	document.querySelector('#current-'+activeplayer).textContent=roundscore; 
	}
	}
});

document.querySelector('.btn-new').addEventListener('click',function(){

	scores=[0,0];
	roundscore=0;
	activeplayer=0;
	game=true;

	document.querySelector('.dice').style.display='none';

	document.querySelector('#score-0').textContent=0;
	document.querySelector('#score-1').textContent=0;
	document.querySelector('#current-0').textContent=0;
	document.querySelector('#current-1').textContent=0;
	document.querySelector('.player-0-panel').classList.remove('winner');
   	document.querySelector('.player-1-panel').classList.remove('winner');
   	document.querySelector('.player-0-panel').classList.remove('active');    	
   	document.querySelector('.player-1-panel').classList.remove('active');
   	document.querySelector('.player-0-panel').classList.add('active');
   	document.querySelector('#name-0').textContent='PLAYER 1';
   	document.querySelector('#name-1').textContent='PLAYER 2';
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(game)
	{
	scores[activeplayer]+=roundscore;
	document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
	document.querySelector('#current-'+activeplayer).textContent=0; 
	roundscore=0;
	if(scores[activeplayer]>=20)
	{
		document.querySelector('#name-'+activeplayer).textContent='Winner';
    	document.querySelector('.dice').style.display='none';
    	document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
       	document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
       	game=false;
	}
	else
	{
		document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
		activeplayer=1-activeplayer;
		document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
	}
	}
});