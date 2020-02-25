"use strict";

var playerOne = {
	name: "Sean",
	roundScore: 0
}
var playerTwo = {
	name: "Zac",
	roundScore: 0
}
var playerThree = {
	name: "Austin",
	roundScore: 0
}
var playerFour = {
	name: "Matt",
	roundScore: 0
}
var playerFive = {
	name: "Gustavo",
	roundScore: 0
}
var playerSix = {
	name: "Nevin",
	roundScore: 0
}
var playerSeven = {
	name: "Mike T",
	roundScore: 0
}
var playerEight = {
	name: "Mike H",
	roundScore: 0
}
var playerNine = {
	name: "David",
	roundScore: 0
}
var playerTen = {
	name: "Brett",
	roundScore: 0
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
}

function runGame(){
	for(let i = 0; i < 3; i++){
		runRound();
	}
	for(let i = 0;i<2;i++){
		runFinalRounds();
	}
	alert("Dice Shootout!!");
	finalRound();
}