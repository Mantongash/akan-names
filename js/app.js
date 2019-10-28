// Variable declaration for the button
const submit = document.getElementById("submit");
// On click submit button
submit.addEventListener("click", function() {
  //Variable declarations for the form elements

  const name = document.getElementById("name").value;
  const dd = document.getElementById("day").value;
  const mm = document.getElementById("month").value;
  const yy = document.getElementById("year").value;
  const date = new Date(`${yy}-${mm}-${dd}`);
  const dayOfBirth = date.getDay();
  const maleGender = document.getElementById("male");
  const femaleGender = document.getElementById("female");
  const display = document.getElementById("display");
  const success = (display.style.background = "#2c990e");
  const error = (display.style.background = "#ed4411");
  const submit = document.getElementById("submit");
  //Days Array
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  //Akan names array
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  //Form validation
  if (dd < 1 || dd > 31) {
    display.innerHTML = `Enter a valid date`;
    display.style.background = "#ed4411";
  } else if (mm < 1 || mm > 12) {
    display.innerHTML = `Enter a valid month`;
    display.style.background = "#ed4411";
  } else if (yy.toString().length !== 4) {
    display.innerHTML = `Enter a valid year`;
    display.style.background = "#ed4411";
  } else if (maleGender.checked) {
    display.innerHTML = `Hi ${name}, you were born on a ${days[dayOfBirth]} and your Akan name is ${maleNames[dayOfBirth]}`;
    display.style.background = "#2c990e";
  } else {
    display.innerHTML = `Hi ${name}, you were born on a ${days[dayOfBirth]} and your Akan name is ${femaleNames[dayOfBirth]} `;
  }
});
