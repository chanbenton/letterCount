// Write a function countLetters that can return to us all the 
// unique characters that exist in a string that is passed into the function.
//   Example output:
//   {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }


function countLetters(string){
	var letterList = string.split("");
	var breakdown = {};

	for (currentLetter in letterList){
		if (breakdown.currentLetter){
			breakdown.currentLetter += 1;
		}
		else{
			breakdown.currentLetter = 1;	
		}
	}
	return breakdown;
}

var input = String(process.argv[2]);

if (!input) {
  console.log("Please provide input following your command.");
} else {
  console.log(countLetters(input));
}
