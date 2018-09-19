var guesses = [];

function getGuess()
{
  var prompt = require("prompt-sync")();

  var guess = prompt();
  return guess;
}

var isNew = function (guess)
{
  for (var i = 0; i < guesses.length; i++)
  {
    if (guess === guesses[i])
    {
      console.log("Already guessed!");
      return false;
    }
  }

  guesses.push(guess);
  return true;
};

var isNumber = function (guess)
{
  if (isNaN(guess))
  {
    console.log("Not a number! Try again.");
    return false;
  }
  else
    return true;
};

var scanner = function (guess)
{
  if (isNumber(guess) == false || isNew(guess) == false)
    return false;
  else
    return true;
};

var numberGame = function()
{
  var isCorrect = false;
  var tries = 0;

  var theNumber = Math.floor((Math.random() * 100) + 1); //generates a random number between 100 and 1
  //console.log("Debug: the random number to guess is: " + theNumber);

  while (isCorrect === false)
  {
    console.log("Guess a number:");
    var attempt = getGuess();
    if (attempt === "halt") //exit function
      break;

    if (scanner(attempt) == true)
    {
      if (attempt > theNumber)
      {
        console.log("Too high!");
        tries++;
      }
      else if (attempt < theNumber)
      {
        console.log("Too low!");
        tries++;
      }
      else
      {
        isCorrect = true;
      }

    }

  }

  console.log("You got it! It took you " + tries + " tries!");
};

numberGame();