

var talkingCalendar = function(date) {
  var values = date.split("/");

  var abb;
  var month;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = months[(values[1] - 1)];

  if (values[2] < 10)
    values[2] = values[2].substr(1); // if the date value is less than 10, we cut off the first character (a zero). substr(1) lets us do this


  if (values[2].slice(-1).includes(2) && values[2] > 14 || values[2] < 10) //slice(-1) allows us to refer to the last value of the string
    abb = "nd";
  else if (values[2].slice(-1).includes(1) && values[2] > 14 || values[2] < 10)
    abb = "st";
  else if (values[2].slice(-1).includes(3) && values[2] > 14 || values[2] < 10)
    abb = "rd";
  else
    abb = "th";

  return month + " " + values[2] + abb + ", " + values[0];
};

//console.log(talkingCalendar("2017/12/02"));
//console.log(talkingCalendar("2007/11/11"));
//console.log(talkingCalendar("1987/08/24"));