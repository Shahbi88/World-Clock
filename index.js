let firstDate = document.querySelector(".date-1");
firstDate.innerHTML = moment().tz("Europe/London").format("LL");

let firstTime = document.querySelector(".time-1");
firstTime.innerHTML = moment()
  .tz("Europe/London")
  .format(`hh:mm:ss [<small>]A[</small>]`);

let secondDate = document.querySelector(".date-2");
secondDate.innerHTML = moment().tz("Europe/Paris").format("LL");

let secondtTime = document.querySelector(".time-2");
secondTime.innerHTML = moment()
  .tz("Europe/Paris")
  .format(`hh:mm:ss [<small>]A[</small>]`);
