function countLetters(string){
	var letterList = string.split("");
	var breakdown = {};

	for (currentLetterIndex in letterList){
		var letter = letterList[currentLetterIndex];
		if (!breakdown[letter]){
			breakdown[letter] = 0;
		}
		breakdown[letter] += 1;
	}
	return breakdown;
}

var input = String(process.argv.slice(2));
var noComma = input.replace(/\,/g, '');

if (!noComma) {
  console.log("Please provide input following your command.");
} else {
  console.log(countLetters(noComma));
}
