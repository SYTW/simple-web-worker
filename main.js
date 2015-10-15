var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]); //sending message as array to the worker
	  console.log('Message posted to worker '+first.value+', '+second.value);
	};

	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('Message posted to worker '+first.value+', '+second.value);
	};

	myWorker.onmessage = function(e) {
    console.log(e);
		result.textContent = e.data;
		console.log('Message received from worker '+e.data);
	};
}
