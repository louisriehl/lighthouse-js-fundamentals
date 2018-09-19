var camelCase = function (string)
{
  var array = string.split(" ");

  for (var i = 1; i < array.length; i++)
  {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  var response = "";

  for (var j = 0; j < array.length; j++)
  {
    response += array[j];
  }

  return response;
};

var pascalCase = function (string)
{
    var array = string.split(" ");

  for (var i = 0; i < array.length; i++)
  {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  var response = "";

  for (var j = 0; j < array.length; j++)
  {
    response += array[j];
  }

  return response;
};

var snakeCase = function (string)
{
  var response = string.replace(/\s/g, "_");
  return response;
};

var kebabCase = function (string)
{
    var response = string.replace(/\s/g, "-");
  return response;
};

function titleCase(string)
{
    return string.replace(/\w\S*/g, function(txt)
      {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

/* A note on RegEx: / indicates the start of a RegEx expression, metacharacters starting with \. These look for specific types of characters.
 * \w looks for all word characters (a-z, A-Z, 0-9, and _)
 * \S looks for all NON whitespace characters, and * matches any strings with 0+ occurences of \S
 * /g causes the entire string to be checked
 * in short, we are replacing EVERY word character in the string by a function that capitalizes the first character and lowercases the rest of it before concantenation.
 * This helps us avoid converting the string to arrays.
 */

var vowelCase = function (string)
{
  return string.toLowerCase().replace(/[aeiou]/g,
    function(text)
    {
      return text.toUpperCase();
    });
};

var consonantCase = function (string)
{
  return string.toLowerCase().replace(/[bcdfghjklmnpqrstvwxyz]/g,
    function(text)
    {
      return text.toUpperCase();
    });
};

var upperCase = function (string)
{
  return string.toUpperCase();
};

var lowerCase = function(string)
{
  return string.toLowerCase();
}

var makeCase = function (string, qualifier)
{
  if (qualifier[0].length === 1) //are we getting an array or a string?
  {
    switch (qualifier)
    {
      case "camel":
        return camelCase(string);
      case "pascal":
        return pascalCase(string);
      case "snake":
        return snakeCase(string);
      case "kebab":
        return kebabCase(string);
      case "title":
        return titleCase(string);
      case "vowel":
        return vowelCase(string);
      case "consonant":
        return consonantCase(string);
      case "upper":
        return upperCase(string);
      default:
        return "somethin' ain't right...";
      }
    }

    else
    {
      var response = string;
      for (var i = 0; i < qualifier.length; i++)
      {
        if (qualifier[i] === "camel")
          response = camelCase(response);
        else if (qualifier[i] === "pascal")
          response = pascalCase(response);
        else if (qualifier[i] === "snake")
          response = snakeCase(response);
        else if (qualifier[i] === "title")
          response = titleCase(response);
        else if (qualifier[i] === "title")
          response = titleCase(response);
      }

      for (var j = 0; j < qualifier.length; j++)
      {
        if (qualifier[j] === "vowel")
          response = vowelCase(response);
        else if (qualifier[j] === "consonant")
          response = consonantCase(response);
      }

      for (var k = 0; k < qualifier.length; k++)
      {
        if (qualifier[k] === "upper")
          response = upperCase(response);
        else if (qualifier[k] === "lower")
          response = lowerCase(response);
      }

      return response;
    }


};


console.log(makeCase("this is a string", "camel") + " === thisIsAString");
console.log(makeCase("this is a string", "pascal") + " === ThisIsAString");
console.log(makeCase("this is a string", "snake") +  " === this_is_a_string");
console.log(makeCase("this is a string", "kebab") + " === this-is-a-string");
console.log(makeCase("this is a string", "title") + " === This Is A String");
console.log(makeCase("this is a string", "vowel")  + " === thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") + " === THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"])  + " === THIS_IS_A_STRING");