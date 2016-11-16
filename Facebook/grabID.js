// var list = document.getElementsByTagName("a");
var list = document.querySelectorAll(".friendBrowserNameTitle>a");
var arr= [];
arr.push.apply(arr, list);
var splited = []
arr.forEach(function(element, index, array) {
	var d = element.getAttribute("data-hovercard") || "";
	var c = d.split("/ajax/hovercard/user.php?id=")[1];
	splited.push(c)
});
var res = [];
splited.forEach(function(e) {
	if(e) {
		res.push(e.split("&")[0])
	}
});
var ids = "";
res.forEach(function(res) {
	ids += res + ",";
});
console.log(ids);