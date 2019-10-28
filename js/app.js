// Variable declaration for the button
const submit = document.getElementById("submit");
// On click submit button
submit.addEventListener("click", function display() {
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
});
