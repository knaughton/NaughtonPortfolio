//this is a comment
function bigImg(x) {
	x.style.height="200px";
	x.style.width="200px";
}

function normalImg(x) {
	x.style.height="100px"
	x.style.width="100px"
}

function myFunction() {
	var x = document.getElementById("fname");
	var y = document.getElementById("fname2");
	x.value=x.value.toUpperCase();
	y.value=y.value.toUpperCase();
}

function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	var y = document.forms["myForm"]["fname2"].value;
	var z = document.forms["myForm"]["fname3"].value;
	if (x, y, z == "") {
		alert("Please complete form before submitting");
		return false;
	}
}

function mouseOver() {
	document.getElementById("id1").style.color="#006633"
}

function mouseOut() {
	document.getElementById("id1").style.color="black"
}
