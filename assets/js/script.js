// var questions = [
// 	{
// 		// question: "what js stand for?"
// 		// answer: "a"
// 	}
// ];

// var score = 0;

// for (var i = 0; i < questions.length; i++);
// {
// 	var response;
// }

//start button
function timer() {
	var counter = 0;
	var timer = document.getElementById('#timer');
	timer.append(counter);

	function timeit() {
		counter++;
		timer.append(counter);
	}
	setInterval(timeit, 1000);
	console.log(counter);
}
