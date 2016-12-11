function waitAndRun(el, cb) {
	var intervalID = setInterval(function() {
		if (el.length) {
			clearInterval(intervalID);
			cb();
		}
	}, 500);
}
var startButton = $("button:visible").filter(function(i, e) {
	return e.innerText === "Забрать пост в свою группу"
});
startButton[0].click();
waitAndRun($("#smmbox_button_posting:visible"), function() {
	$("#smmbox_button_posting:visible")[0].click();
});
