//Timer
var timerEl = document.querySelector('#timer');
var mainEl = document.getElementById('main');
var score = 0;
var secondsLeft = 60;
var welcometext = document.getElementById('#welcometext');
var instructiontext = document.getElementById('#instructiontext');
var startbtn = document.getElementById('#start-button');

function setTime() {
	var timerInterval = setInterval(function() {
		secondsLeft--;
		timerEl.textContent = 'Timer: ' + secondsLeft;

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			Timer();
		}
	}, 1000);
}

Timer();
