setInterval(function () {
  let firstDate = document.querySelector(".date-1");
  firstDate.innerHTML = moment().tz("Europe/London").format("LL");

  let firstTime = document.querySelector(".time-1");
  firstTime.innerHTML = moment()
    .tz("Europe/London")
    .format(`hh:mm:ss [<small>]A[</small>]`);

  let secondDate = document.querySelector(".date-2");
  secondDate.innerHTML = moment().tz("Europe/Paris").format("LL");

  let secondTime = document.querySelector(".time-2");
  secondTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format(`hh:mm:ss [<small>]A[</small>]`);
}, 1000);

function updateCity(event) {
  let display = document.querySelector(".display");
  let both = event.target.value;
  display = display.innerHTML = moment()
    .tz(both)
    .format(`hh:mm:ss [<small>]A[</small>]`);
  if (both === "current") {
    display = moment.tz.guess();
  }
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);

setInterval(updateCity, 1000);
