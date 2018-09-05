function conditionalSum(values, condition)
{
  var answer = 0;

  if (values[0] === undefined)
    return answer;

  else if (condition === 'even')
  {
    for (var i = 0; i < values.length; i++)
    {
      if (values[i] % 2 === 0)
        answer += values[i];
    }
    return answer;
  }

  else if (condition === 'odd')
  {
    for (var i = 0; i < values.length; i++)
    {
      if (values[i] % 2 !== 0)
        answer += values[i];
    }
    return answer;
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));