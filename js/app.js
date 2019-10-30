// Variable declaration for the button
const submit = document.getElementById("submit");
// On click submit button
submit.addEventListener("click", function() {
  //Variable declarations for the form elements

  let name = document.getElementById("name").value;
  let dd = document.getElementById("day").value;
  let mm = document.getElementById("month").value;
  let yy = document.getElementById("year").value;
  const date = new Date(`${yy}-${mm}-${dd}`);
  const dayOfBirth = date.getDay();
  const maleGender = document.getElementById("male");
  const femaleGender = document.getElementById("female");
  let display = document.getElementById("display");
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
  if (name == "") {
    display.innerHTML = `Please enter the name`;
    display.style.background = "#ed4411";
  } else if (dd == "") {
    display.innerHTML = `Please enter the date`;
    display.style.background = "#ed4411";
  } else if (mm == "") {
    display.innerHTML = `Please enter the month`;
    display.style.background = "#ed4411";
  } else if (yy == "") {
    display.innerHTML = `Please enter the year`;
    display.style.background = "#ed4411";
  } else if (dd < 1 || dd > 31) {
    display.innerHTML = `Enter a valid date`;
    display.style.background = "#ed4411";
  } else if (mm < 1 || mm > 12) {
    display.innerHTML = `Enter a valid month`;
    display.style.background = "#ed4411";
  } else if (yy.toString().length !== 4) {
    display.innerHTML = `Year should not be more than 4 characters`;
    display.style.background = "#ed4411";
  } else if (maleGender.checked) {
    display.innerHTML = `Hi ${name}, you were born on a ${days[dayOfBirth]} and your Akan name is ${maleNames[dayOfBirth]}`;
    display.style.background = "#2c990e";
  } else {
    display.innerHTML = `Hi ${name}, you were born on a ${days[dayOfBirth]} and your Akan name is ${femaleNames[dayOfBirth]} `;
    display.style.background = "#2c990e";
  }
});
//Reset button funcionality
