function range(start, end, step)
{
  var someArray = [];
  //console.log("Debug\nstart= " + start + "\nend= " + end + "\nstep= " + step);
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0)
  {
    //console.log("Parameters are wonky! Breaking the function...");
    return someArray;
  }
  else
  {
    for (var i = start; i <= end; i += step)
    {
      //console.log("Debug: Loop is initiated!");
      //console.log("Debug: Value to push is: " + i);
      someArray.push(i);
    }
    //console.log("Debug: Loop has ended!\nArray to return is: " + someArray);
    return someArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));