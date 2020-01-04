var questions = [
	{
		// question: "what js stand for?"
		// answer: "a"
	}
];

var score = 0;

for (var i = 0; i < questions.length; i++);
{
	var response;
}

//start button

var startbutton = document.getElementById('startbutton');

startbutton.addEventListener('click', function() {
	var seconds = 0;
	var interval;
	function pomodoro(mins) {
		seconds = mins * 60 || 0;
		interval = setInterval(function() {
			seconds--;
			if (!seconds) {
				clearInterval(interval);
			}
		}, 1000);
		console.log(seconds);
	}
});
