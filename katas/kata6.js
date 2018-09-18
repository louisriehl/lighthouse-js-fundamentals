function frameMaker (max) // builds the frame above and below each number in the table
{
  var frame = "";

  if (max <= 3)
  {
    for (var i = 0; i < max; i++)
    {
      frame += "+---";
    }
  }

  else if (max > 3 && max < 10 )
  {
    for ( var i = 0; i < max; i++)
    {
      frame += "+----";
    }
  }

  else
  {
    for ( var i = 0; i < max; i++)
    {
      frame += "+-----";
    }
  }

  return frame + "+";
}

function calculator (top) //provides an array of arrays containing the table values
{

  var table = [];

  for (var i = 1; i <= top; i++)
  {
    var hold = [];
    for (var j = 1; j <= top; j++)
    {
      hold.push(i * j);
    }
    table.push(hold);
  }

  return table;
}

function maxPlaces (maxValue)
{
  var buff;
  if (maxValue < 3)
  {
    buff = 1;
  }

  else if (maxValue >= 3 && maxValue < 10 )
  {
    buff = 2;
  }

  else
  {
    buff = 3;
  }

  return buff;
}

var multiplicationTable = function(maxValue)
{
  var answers = calculator(maxValue);
  var theTable = "";
  var buffer = maxPlaces(maxValue);
  //console.log("Buffer = " + buffer);

  for (var i = 0; i < maxValue; i++)
  {
    theTable += frameMaker(maxValue) + "\n";

    for (var k = 0; k < maxValue; k++)
    {
      theTable += "| ";
      if (answers[i][k] < 10 && buffer === 2)
      {
        //console.log(answers[i][k] + " is single digit and max is two digits.");
        theTable += answers[i][k] + "  ";
      }
      else if (answers[i][k] < 10 && buffer === 3)
      {
        //console.log(answers[i][k] + " is single digit and max is 3 digits.");
        theTable += answers[i][k] + "   ";
      }
      else if (answers[i][k] >= 10 && answers[i][k] < 100 && buffer === 3)
      {
        //console.log(answers[i][k] + " is double digit and max is 3 digits.");
        theTable += answers[i][k] + "  ";
      }
      else
      {
        //console.log(answers[i][k] + " only needs one space");
        theTable += answers[i][k] + " ";
      }
    }

    theTable += "|\n";

  }

  theTable += frameMaker(maxValue);

  return theTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));