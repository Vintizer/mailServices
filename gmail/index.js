var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
document.body.appendChild( script );
var registerString = prompt("Введите строку формата 'Name Surname mail@mail.ru 15/05/93 password'");
var regArr = registerString.split(" ");
jQuery("#FirstName").val(regArr[0]).click();
jQuery("#LastName").val(regArr[1]).click();
jQuery("#GmailAddress").val(regArr[2].split("@")[0]).click();
jQuery("#Passwd").val(regArr[4]).click();
jQuery("#PasswdAgain").val(regArr[4]).click();
jQuery("#BirthDay").val(regArr[3].split("/")[0]).click();
jQuery("#BirthYear").val("19" + regArr[3].split("/")[2]).click();



