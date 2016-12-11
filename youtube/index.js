var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
document.body.appendChild( script );
var res  = [];
jQuery("a").each(function(i,e){
	if (e.href.indexOf("/watch?v=") > -1) {
		res.push("@@@" + e.href.split("/watch?v=")[1] + "|||");
	}
});
console.log(res.join(","));