"use strict";

let yourScore = 0;

function getMyInfo() {
  let userName = prompt("Hello , What is Your Name ?");
  alert("Welcome to My Website " + userName + " ^.^");

  let myAge = prompt("Am I 29 years old ?\n (yes/no , y/n )").toLocaleLowerCase();
  console.log(myAge);
  switch (myAge) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
      yourScore++;
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  let myMajor = prompt("Is My Major Geologist ?\n (yes/no , y/n )").toLocaleLowerCase();
  switch (myMajor) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
      yourScore++;
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  let myFav = prompt("Am I Like The Back-End Development More ?\n (yes/no , y/n )"
  ).toLocaleLowerCase();
  switch (myFav) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
      yourScore++;
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  let myFunny = prompt("Am I Funny ?\n (yes/no , y/n )").toLocaleLowerCase();
  switch (myFunny) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
      yourScore++;
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  let myMovies = prompt("Am I Like British movies  ?\n (yes/no , y/n )").toLocaleLowerCase();
  switch (myMovies) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
      yourScore++;
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  alert("Thank You " + userName + " For Visiting My Website ^.^");
}

function getGuessMyNumber() {
  let myNumber = 8;
  let userNumber = parseInt(prompt("Guess My Number you have 4 attempt "));
  let i = 4;
  let j = 1;
  while (isNaN(userNumber)) {
    userNumber = parseInt(prompt(" You Need To Put a Number to Guess My Number you have 4 attempt "));
  }
  while (userNumber !== myNumber && j < i) {
    if (userNumber > myNumber) {
      userNumber = parseInt(prompt(`Not Correct and " too high " try again to Guess My Number you have ${i - j} attempt\n (it is 8) `));
    } else {
      userNumber = parseInt(prompt(`Not Correct and " too low " try again to Guess My Number you have ${i - j} attempt\n (it is 8) `));
    }
    j++;
  }
  if (userNumber === myNumber) {
    alert("Thats Correct it is 8 :) ");
    yourScore++;
  } else {
    alert("you out of attempt it was 8 :) ");
  }
}

function getGuessMySeries() {
  let myFavSeries = ["GOT", "100", "Suits"];
  let userGuess = prompt("What is my Fav Sreies ? You Have 6 attempt \n (GOT,100,Sutis)");
  outlooper: for (let K = 0; K < 5; K++) {
    for (let i = 0; i < myFavSeries.length; i++) {
      if (userGuess === myFavSeries[i]) {
        alert(`Thats Correct and this my all fav Series ${myFavSeries[0]},${myFavSeries[1]},${myFavSeries[2]}`);
        yourScore++;
        break outlooper;
      }
    }
    userGuess = prompt(`not correct ,try again What is my Fav Sreies ? You Have ${5 - K} attempt \n (GOT,100,Sutis)`);
    if (K === 4) {
      alert(`Thats not Correct and this was my all fav Series ${myFavSeries[0]},${myFavSeries[1]},${myFavSeries[2]}`);
    }
  }
}

function getUserScore() {
  alert(`Youe Score is ${yourScore} out of 7`);
}


