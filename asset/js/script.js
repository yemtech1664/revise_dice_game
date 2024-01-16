let roundScore, score, activePlayer, gamePlaying;
init()
let lastDice;
//roll dice
document.querySelector(".roll").addEventListener("click", function(){
	if(gamePlaying){
	let dice = Math.floor(Math.random()* 6) + 1;
	let dice2 = Math.floor(Math.random()* 6) + 1;
	//display dice
	document.querySelector(".dice_value").textContent = dice;
	document.querySelector(".dice_value2").textContent = dice2;
	/*if(dice === 6 && lastDice === 6){
		score[activePlayer] = 0;
		document.querySelector("#score-"+activePlayer).textContent = '0';
		nextPlayer();

	}else if(dice !== 1 && dice2 !== 1){
		//add
		roundScore += dice + dice2;
		document.getElementById("current-"+activePlayer).textContent = roundScore;
	}else{
		//next player
		nextPlayer()

		}
		lastDice = dice;
		*/

		if(dice !== 1 && dice2 !== 1){
			roundScore += dice + dice2;
			document.getElementById("current-"+activePlayer).textContent = roundScore;
		}else{
			//next player
			nextPlayer();
		}
	}
	
})
//hold button
document.querySelector(".hold").addEventListener("click", function(){
	if(gamePlaying){
		//add to global score
	score[activePlayer] += roundScore;
	// update the UI
	document.getElementById("score-"+activePlayer).textContent = score[activePlayer];
	let finalScore = document.querySelector("#input").value;
	console.log(finalScore)
	let winningScore;
	if(finalScore){
		 winningScore = finalScore;
	}else{
		winningScore = 50;
	}

	//check for winner
	if(score[activePlayer] >= winningScore){
	document.getElementById("player-name-"+activePlayer).textContent = "Winner!!!";
	document.querySelector(".player_"+activePlayer).classList.remove("active");
	document.querySelector("#player-name-"+activePlayer).classList.add("winner");
	document.querySelector(".dice_value").textContent = '';
	document.querySelector(".dice_value2").textContent = '';
	gamePlaying = false;

	}else{
	//next player
	nextPlayer();	
	}
	}
	
	
})

document.querySelector(".new-game").addEventListener("click", init);

function init(){
	roundScore = 0;
	score = [0, 0];
	activePlayer = 0;
	gamePlaying = true;                       
	document.querySelector(".dice_value").textContent = '';
	document.querySelector(".dice_value2").textContent = '';
	document.querySelector("#score-0").textContent = '0';
	document.querySelector("#score-1").textContent = '0';
	document.querySelector("#current-0").textContent = '0';
	document.querySelector("#current-1").textContent = '0';
	document.querySelector(".player_"+activePlayer).classList.add("active");
	document.querySelector("#player-name-0").classList.remove("winner");
	document.querySelector("#player-name-1").classList.remove("winner");
	document.querySelector("#player-name-0").textContent = 'PLAYER 1';
	document.querySelector("#player-name-1").textContent = 'PLAYER 2';

}

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.querySelector("#current-0").textContent = '0';
		document.querySelector("#current-1").textContent = '0';
		document.querySelector(".player_0").classList.toggle("active");
		document.querySelector(".player_1").classList.toggle("active");

		document.querySelector(".dice_value").textContent = '';
		document.querySelector(".dice_value2").textContent = '';
}