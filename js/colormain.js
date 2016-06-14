function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	var colorCode = "#" + h + m + s;
	document.getElementById('txt').innerHTML = colorCode;
	document.body.style.backgroundColor = colorCode;
}

function checkTime(i) {
	if (i<10) {i = "0" + i};
	return i;
}
var t = setInterval(startTime, 500);








/*function hawaiiTime () {
	var today = new Date();
	var h = 
}*/