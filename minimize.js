function a(a) {
	return $("div.qc-" + a + "-row").find("input");
}
function b(a, b) {
	a.find("option").filter(function(i, e) {
		return +e.value === +b;
	}).attr("selected", true);
}
var c = "Name Surname mail@mail.ru 15/05/93 password";
var d = c.split(" ");
var e = a("firstname");
var f = a("lastname");
var g = $("select.qc-select-day");
var h = $("select.qc-select-month");
var i = $("select.qc-select-year");
var j = $("#man2");
var k = a("login");
var l = a("pass");
var m = a("passverify");

e.val(d[0]);
f.val(d[1]);
b(g, d[3].split("/")[0]);
b(h, d[3].split("/")[1]);
b(i, "19" + d[3].split("/")[2]);
j.click();
k.val(d[2].split("@")[0]);
l.val(d[4]);
m.val(d[4]);