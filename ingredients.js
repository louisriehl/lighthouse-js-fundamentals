var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var num = 0;

console.log("WHILE loop");
while (num < 8)
{
  console.log(ingredients[num]);
  num++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("FOR loop");
for (i = 0; i < 8; i++)
{
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Reversed FOR");
for (i = 7; i >= 0; i--)
{
  console.log(ingredients[i]);
}