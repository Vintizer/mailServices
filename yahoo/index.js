var registerString = prompt("Введите строку формата 'Name Surname mail@mail.ru 15/05/93 password'");
var regArr = registerString.split(" ");
$("#usernamereg-firstName").value = regArr[0];
$("#usernamereg-lastName").value = regArr[1];
$("#usernamereg-yid").value = regArr[2].split("@")[0];
$("#usernamereg-password").value = regArr[4];
var month = +regArr[3].split("/")[1] > 9 ? regArr[3].split("/")[1] : regArr[3].split("/")[1][1];
var date = +regArr[3].split("/")[0] > 9 ? regArr[3].split("/")[0] : regArr[3].split("/")[0][1];
document.getElementById('usernamereg-month').value = month;
document.getElementById('usernamereg-day').value = date;
document.getElementById('usernamereg-year').value = "19" + regArr[3].split("/")[2];

$("#usernamereg-freeformGender").value = "Female";
