function merge (array1, array2)
{
  var mer = array1;

  if (array2[0] === undefined)
    return mer;

  for (var i = 0; i < array2.length; i++)
  {
    for (var j = 0; j < mer.length; j++)
    {
      if (array2[i] <= mer[j])
      {
        //console.log(array2[i] + " is <= " + mer[j]);
        mer.splice(j, 0, array2[i]);
        break;
      }
      else if (j === (mer.length - 1))
      {
        mer.push(array2[i]);
        break;
      }

      //console.log(array2[i] + " is not <= " + mer[j]);
    }
  }
  return mer;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);