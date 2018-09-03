
function concat(array1, array2)
{
  var length1 = array1.length;
  var length2 = array2.length;
  var newArray = [];
  //console.log("\nArray1(" + array1 + ") has a length of " + length1 + ". Its first value is " + array1[0]);
  //console.log("\nArray2(" + array2 + ") has a length of " + length2 + ". Its first value is " + array2[0]);

  var doArray1 = (array1[0] !== undefined);
  var doArray2 = (array2[0] !== undefined);
  //console.log(doArray1);
  //console.log(doArray2);

  if(doArray1)
  {
    for(var i = 0; i < length1; i++)
      newArray.push(array1[i]);
  }

  if(doArray2)
  {
    for(var j = 0; j < length2; j++)
      newArray.push(array2[j]);
  }

  return newArray;

}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

