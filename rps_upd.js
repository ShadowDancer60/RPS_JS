//Rock, paper, scissors as functions

// var hands = ['rock' , 'paper', 'scissors'];
var win1=0;
var win2=0;
// var win3=0;   // Variables for tourney
// var win4=0;   // Variables for tourney

// function to call in player hand
var    weapon;
function getHands() {

var    roll =([parseInt(Math.random()*100)]);

      if (roll < 34) {
        weapon = "rock" ;
      } else if(roll <=67) {
        weapon = "paper" ;
      } else if(roll > 67) {
        weapon = "scissors";
      }
      return (weapon)
}
// Get player hand
 
function  players() {
var  playerOne = {
     name : "Craig",
     hand: getHands()
     } ;
     
var  playerTwo = {
      name : "Kyle",
      hand: getHands()
     } ;
    console.log(playerOne.name + " throws " + playerOne.hand);
    console.log(playerTwo.name + " throws " + playerTwo.hand);
    //return (playerOne.name, playerOne.hand, playerTwo.name, playerTwo.hand)
 
     }



function playRound() {

  players();  
  
  if  (playerOne.hand==playerTwo.hand) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log("This hand is a tie.");
  } else if ((playerOne.hand="rock") && (playerTwo.hand="scissors")) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log(playerOne.name + " wins the hand"); win1++;
  } else if ((playerOne.hand="paper") && (playerTwo.hand="rock")) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log(playerOne.name + " wins the hand"); win1++;
  } else if ((playerOne.hand="scissors") && (playerTwo.hand="paper")) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log(playerOne.name + " wins the hand"); win1++;
  } else if ((playerOne.hand="rock") && (playerTwo.hand="paper")){
     console.log(playerTwo.name + " wins the hand"); win2++
  } else if ((playerOne.hand="paper") + (playerTwo.hand="scissors")) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log(playerTwo.name + " wins the hand"); win2++ 
  } else if ((playerOne.hand="scissors") && (playerTwo.hand="rock")) {
     console.log(playerOne.hand + playerTwo.hand);
     console.log(playerTwo.name + " wins the hand"); win2++
  }  
   
}
  
  playRound()
