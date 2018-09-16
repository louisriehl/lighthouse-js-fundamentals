function calculateChange(total, cash)
{
  var change = cash - total;
  var moneyBack = {};

  //console.log("Total change due: " + change);

  if (change >= 2000)
  {
    moneyBack.twentyDollar = (change - (change % 2000)) / 2000;
    change -= moneyBack.twentyDollar * 2000;
  }

  if (change >= 1000)
  {
    moneyBack.tenDollar = (change - (change % 1000)) / 1000;
    change -= moneyBack.tenDollar * 1000;
  }

  //console.log("Change left after ten dollar: " + change);
  if (change >= 500)
  {
    moneyBack.fiveDollar = (change - (change % 500)) / 500;
    change -= moneyBack.fiveDollar * 500;
  }

  //console.log("Change left after five dollar: " + change);
  if (change >= 200)
  {
    moneyBack.twoDollar = (change - (change % 200)) / 200;
    change -= moneyBack.twoDollar * 200;
  }

  //console.log("Change left after two dollar: " + change);
  if (change >= 100)
  {
    moneyBack.oneDollar = (change - (change % 100)) / 100;
    change -= moneyBack.oneDollar * 100;
  }

  //console.log("Change left after dollar: " + change);
  if (change >= 25)
  {
    moneyBack.quarter = (change - (change % 25)) / 25;
    change -= moneyBack.quarter * 25;
  }

  //console.log("Change left after quarters: " + change);
  if (change >= 10)
  {
    moneyBack.dime = (change - (change % 10)) / 10;
    change -= moneyBack.dime * 10;
  }

  //console.log("Change left after dimes: " + change);
  if (change >= 5)
  {
    moneyBack.nickel = (change - (change % 5)) / 5;
    change -= moneyBack.nickel * 5;
  }

  //console.log("Change left after nickels: " + change);
  if (change >= 1)
  {
    moneyBack.penny = (change - (change % 1)) / 1;
  }

  return moneyBack;

}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));