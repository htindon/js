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
		var explanation = "";
		while (i < possible.length) {
			if (user[i] === "false" && answers[i] === "true") {
				explanation.push("Answer " + document.getElementById(possible[i]).name + ": " + document.getElementById(possible[i]).text + "was true.");
			} else if (user[i] != answers[i]) {
				explanation.push("Answer " + document.getElementById(possible[i]).name + ": " + document.getElementById(possible[i]).text + "was false.");
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
	} else {
		explainErrors(userAnswers, trueAnswers, possibleAnswers);
	}
	document.close();
};
