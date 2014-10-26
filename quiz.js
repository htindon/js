var quiz = function () {

	var compareArrays = function(array1, array2) {
		var i = 0;
		while (i < array1.length || i < array2.length) {
			if (array1[i] != array2[i]) {
				return false;
			}
			i++;
		}
		return true;
	}

	var explainErrors = function (user, answers, possible) {
		var i = 0;
		var explanation = "Nice Try!";
		var myList = document.getElementById(possible[i]);
		while (i < possible.length) {
			if (user[i] === "false" && answers[i] === "true") {
				explanation = explanation + "<br>Answer " + document.getElementById(possible[i]).name + " was true.";
				document.getElementById('quiz_img' + possible[i]).src = "red.jpg";
			} else if (user[i] != answers[i]) {
				explanation = explanation + "<br>Answer " + document.getElementById(possible[i]).name + " was false.";
				document.getElementById('quiz_img' + possible[i]).src = "red.jpg";
			} else {
				document.getElementById('quiz_img' + possible[i]).src = "green.jpg";
			}
			i++;
		}
		document.getElementById("answer_quiz").innerHTML = explanation;
	}

	var userAnswers = [];
	var trueAnswers = ["true", "false", "false", "false"];
	var possibleAnswers = ["a", "b", "c", "d"];
	var i = 0;
	while (i < possibleAnswers.length) {
		if (document.getElementById(possibleAnswers[i]).checked) {
			userAnswers.push("true");
		} else {
			userAnswers.push("false");
		}
		i++;
	}
	if (compareArrays(trueAnswers, userAnswers)) {
		document.getElementById("answer_quiz").innerHTML = "Congratulations!";
	    var j = 0;
		while (j < possibleAnswers.length) { 
		document.getElementById('quiz_img' + possibleAnswers[j]).src = "green.jpg";
		j++;
		}
	} else {
		explainErrors(userAnswers, trueAnswers, possibleAnswers);
	}

	document.close();
};
