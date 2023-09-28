function addZero(i) {
	if(i < 10) {i += "0"};
	return i;
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = addZero(m);
	s = addZero(s);

	if(h > 12) {
		h = h - 12;
		document.getElementById("meridian").innerHTML = "pm";
	}

	else if(h == 0 || h == 12 || h == 24) {
		h = 12;
		document.getElementById("meridian").innerHTML = "am";
	}

	else {
		h = h;
		document.getElementById("meridian").innerHTML = "am";
	}
	
	document.getElementById("time").innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 10);
}

function randomBg() {
	var r = Math.floor(Math.random() * 10);
	document.body.style.backgroundImage = `url(bg/${r}.png)`;
}

startTime();
randomBg();