var repeatNumbers = function(data)
{
  var theString = "";
  var columns = data.length;

  for (var i = 0; i < columns; i++)
  {
    var rep = data[i][1];

    if (i > 0)
      theString += ", ";

    for (var j = 0; j < rep; j++)
    {
      //console.log("Debug: the number at position: " + i + " 0 is: " + data[i][0]);
      theString += data[i][0].toString();
      //console.log("Debug: the string is now: " + theString);
    }
  }

  //console.log("The final string is: " + theString);
  return theString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));