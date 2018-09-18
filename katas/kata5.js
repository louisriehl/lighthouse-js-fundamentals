var captilizeFirst = function(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1); // return a segment of a string with slice(). argument says where to cut off the string.
};

var camelCase = function(input) {

  var strings = input.split(" ");

  for (var i = 0; i < strings.length; i++)
  {
    if (i > 0)
    {
      strings[i] = captilizeFirst(strings[i]);
    }
  }

  var c = "";

  for (var j = 0; j < strings.length; j++)
  {
    c += strings[j];
  }

  return c;


};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));