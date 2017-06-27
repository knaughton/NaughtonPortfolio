/* This script displays a greeting to the user based upon the current time. */
var today = new Date();		// Create a new date object
var hourNow = today.getHours();		// Find the current hour
var greeting;

if (hourNow > 18) {
		greeting = "Good evening!";
} else if (hourNow > 12) {
		greeting = "Good afternoon!";
} else if (hourNow > 0) {
		greeting = "Good morning!";
} else {
	greeting = "Welcome";
}

document.write(greeting);
