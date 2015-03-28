var count = 101;
var i = 1;

$(document).ready(function() {

	for (i; i < count; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('body').append("fizzbuzz" + "<br>");
		}
		else if (i % 5 == 0) {
			$('body').append("buzz" + "<br>");
		}
		else if (i % 3 == 0) {
			$('body').append("fizz" + "<br>");
		}
		else {
			$('body').append(i + "<br>");
		}
	}

});

