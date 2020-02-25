"use strict";

var playerOne = {
	name: "Sean",
	roundScore: 0,
	wins: 0
}
var playerTwo = {
	name: "Zac",
	roundScore: 0,
	wins: 0
}
var playerThree = {
	name: "Austin",
	roundScore: 0,
	wins: 0
}
var playerFour = {
	name: "Matt",
	roundScore: 0,
	wins: 0
}
var playerFive = {
	name: "Gustavo",
	roundScore: 0,
	wins: 0
}
var playerSix = {
	name: "Nevin",
	roundScore: 0,
	wins: 0
}
var playerSeven = {
	name: "Mike T",
	roundScore: 0,
	wins: 0
}
var playerEight = {
	name: "Mike H",
	roundScore: 0,
	wins: 0
}
var playerNine = {
	name: "David",
	roundScore: 0,
	wins: 0
}
var playerTen = {
	name: "Brett",
	roundScore: 0,
	wins: 0
}

var playersAlive = [
playerOne,
playerTwo,
playerThree,
playerFour,
playerFive,
playerSix,
playerSeven,
playerEight,
playerNine,
playerTen
]

var gameWinners = []

function rollD4(){
	return (Math.floor(Math.random()*4)+1);
}
function rollD6(){
	return (Math.floor(Math.random()*6)+1);
}
function rollD8(){
	return (Math.floor(Math.random()*8)+1);
}
function rollD10(){
	return (Math.floor(Math.random()*10)+1);
}
function rollD12(){
	return (Math.floor(Math.random()*12)+1);
}
function rollD20(){
	return (Math.floor(Math.random()*20)+1);
}
function rollAll(){
	return rollD4() + rollD6() + rollD8() + rollD10() + rollD12() + rollD20();
}
function finalDice(){
	let d1 = rollD20();
	let d2 = rollD20();
	let d3 = rollD20();
	let d4 = rollD20();
	switch(rollD4()){
		case(1): return d1;
		case(2): return d2;
		case(3): return d3;
		case(4): return d4;
	}
}
var roundNumber = 1;

function runRound(){
	for(let i = 0; i < playersAlive.length; i++){
		playersAlive[i].roundScore = rollAll();
	}
	playersAlive.sort(function(a,b){return b.roundScore - a.roundScore});
	let lastPlayer = playersAlive.pop();
	alert(lastPlayer.name + " has lost with a score of " + lastPlayer.roundScore + ".");
	lastPlayer = playersAlive.pop();
	alert(lastPlayer.name + " has lost with a score of " + lastPlayer.roundScore + ".");
}
function runFinalRounds(){
	for(let i = 0; i < playersAlive.length; i++){
		playersAlive[i].roundScore = rollAll();
	}
	playersAlive.sort(function(a,b){return b.roundScore - a.roundScore});
	let lastPlayer = playersAlive.pop();
	alert(lastPlayer.name + " has lost with a score of " + lastPlayer.roundScore + ".");
}
function finalRound(){
	for(let i=0;i<playersAlive.length;i++){
		playersAlive[i].roundScore = finalDice();
	}
	playersAlive.sort(function(a,b){return b.roundScore - a.roundScore});
	let lastPlayer = playersAlive.pop();
	alert(lastPlayer.name + " has lost with a score of " + lastPlayer.roundScore + ".");
	lastPlayer = playersAlive.pop();
	alert(lastPlayer.name + " wins the game with a score of " + lastPlayer.roundScore + "!!!");
	document.getElementById("winner").innerHTML = "<tr class = table-info><td class = text-center>" + lastPlayer.name + " won!!!</tr></td>";
	var x = document.getElementById("snackbar")
	x.innerHTML = lastPlayer.name + " wins!!!";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
	lastPlayer.wins += 1;
	if(!(gameWinners.includes(lastPlayer))){
		gameWinners.push(lastPlayer);
	}
}

function runGame(){
	document.getElementById("progressButton").innerHTML = "Next Round";
	if(roundNumber <= 3){
		runRound();
		roundNumber++;
		makeTable();

	}
	else if(roundNumber < 6){
		runFinalRounds();
		roundNumber++;
		makeTable();
	}
	else{
		alert("Dice Shootout!!");
		finalRound();
		playersAlive = [
		playerOne,
		playerTwo,
		playerThree,
		playerFour,
		playerFive,
		playerSix,
		playerSeven,
		playerEight,
		playerNine,
		playerTen
		]
		roundNumber = 1;
		document.getElementById("progressButton").innerHTML = "Play again?";
		makeTable();
		showWinner();
	}
}

function makeTable(){
	var t = '<tr class = "table-danger" ><td style= "width: 75%";>Round '+ roundNumber + '</td><td style = "width: 25%";>Round Score</td></tr>';
	for(var i = 0; i < playersAlive.length; i++){
		var tr = '<tr class = "table-success border">';
		tr+= '<td class = "text-center border">'+playersAlive[i].name + '</td>';
		tr+= '<td class = "text-center border">'+playersAlive[i].roundScore + '</td>';
		tr+="</tr>";
		t += tr
	}
	document.getElementById("table").innerHTML = t;
}
makeTable();

function showWinner(){
	var t = "<tr class = table-warning><th>Winners</th><th>Wins</th></tr>";
	for(var i = 0; i < gameWinners.length; i++){
		var tr = "<tr class = table-warning text-center>";
		tr+= "<td class = text-center>"+gameWinners[i].name + "</td>";
		tr+= "<td class = text-center>"+gameWinners[i].wins + "</td>";
		tr+="</tr>";
		t += tr
	}
	document.getElementById("prevWinner").innerHTML = t;
}
makeTable();