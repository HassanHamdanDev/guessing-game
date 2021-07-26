"use strict";

function myFunction() {
  let userName = prompt("Hello , What is Your Name ?");
  alert("Welcome to My Website " + userName + " ^.^");

  let myAge = prompt("Am I 29 years old ?\n (yes/no , y/n )").toLocaleLowerCase();
  console.log(myAge);
  switch (myAge) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
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
      break;
    case "no":
    case "n":
      // console.log('no');
      alert("Thats Not Correct");
      break;
    default:
      alert("You Have a Problem");
  }

  let myFav = prompt( "Am I Like The Back-End Development More ?\n (yes/no , y/n )"
  ).toLocaleLowerCase();
  switch (myFav) {
    case "yes":
    case "y":
      // console.log('yes');
      alert("Thats Correct :)");
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
