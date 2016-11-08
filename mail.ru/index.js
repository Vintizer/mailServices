function findInputByName(name) {
	return $("div.qc-" + name + "-row").find("input");
}
function fillSelect(el, val) {
	el.find("option").filter(function(i, e) {
		return +e.value === +val;
	}).attr("selected", true);
}
var registerString = prompt("Введите строку формата 'Name Surname mail@mail.ru 15/05/93 password'");
var regArr = registerString.split(" ");
var nameInput = findInputByName("firstname");
var lastNameInput = findInputByName("lastname");
var daySelect = $("select.qc-select-day");
var monthSelect = $("select.qc-select-month");
var yearSelect = $("select.qc-select-year");
var sexRadio = $("#man2");
var mailName = findInputByName("login");
var passInput = findInputByName("pass");
var repeatPassInput = findInputByName("passverify");

nameInput.val(regArr[0]);
lastNameInput.val(regArr[1]);
fillSelect(daySelect, regArr[3].split("/")[0]);
fillSelect(monthSelect, regArr[3].split("/")[1]);
fillSelect(yearSelect, "19" + regArr[3].split("/")[2]);
sexRadio.click();
mailName.val(regArr[2].split("@")[0]);
passInput.val(regArr[4]);
repeatPassInput.val(regArr[4]);
