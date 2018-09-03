function lastIndexOf(array, value)
{
  var length = array.length;
  var pos = -1;

  for(var i = 0; i < length; i++)
  {
    //console.log("Debug: Loop " + i + " initiated!");
    if (array[i] === value)
    {
      //console.log("Debug: We have a match!\n" + array[i] + " === " + value);
      pos = i;
      //console.log("Debug: Current last index is: " + pos);
    }
  }
  return pos;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);