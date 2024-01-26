var btn = document.querySelector("#submit");
var thanks = document.querySelector("#js");
var rst = document.querySelector("#reset");

function noDefault(event) {
  event.preventDefault();
  var fname = document.forms["form1"]["fname"].value;
  var lname = document.forms["form1"]["lname"].value;
  var bday = document.forms["form1"]["bday"].value;
  var email = document.forms["form1"]["email"].value;

  if (
    fname != null &&
    fname != "" &&
    lname != null &&
    lname != "" &&
    bday != null &&
    bday != "" &&
    email != null &&
    email != ""
  ) {
    thanks.textContent = "thank you, we will email you soon!";
  }
}
function rest(event) {
  thanks.textContent = "";
}
btn.addEventListener("click", noDefault);
rst.addEventListener("click", rest);
