console.log("This is going to be my first commit! If I finish this program soon enough, I'm going to eat a sandwhich as a reward. Yum!");

var _FRUITS = [];
var _EXIT_CODE = 999;

// This function sets variables to certain values
function InitializeVariables() {
	_FRUITS = ['Apple', 'Banana', 'Cherry'];
}


/*
// IsFruitInList
//
// Returns bool whether or not the fruit is in a list
*/
function IsFruitInList(fruitToCheck, fruitList) {

	// Create a flag for whether or not the flag is found
    var foundFruitInList = false;

	// Loop through the fruitList and check if the fruit exists
	for (var i = 0; i < fruitList.length; i++) {

		// The one condition is if the fruit matches a fruit in the fruitList
		if (fruitToCheck == fruitList[i]) {
			foundFruitInList = true;
		}
	}

	// Return wether or not we found the fruit in the list
	return foundFruitInList;
}

/*
//	CheckFruitsFromUserInput
//
//	Function checks wether a fruit is in GLOBAL _FRUITS list
*/
function CheckFruitsFromUserInput() {

	var fruitToCheck;

	while (true) {

		// Input from user
		var fruitToCheck = prompt("Please enter a fruit to check.  (type " + _EXIT_CODE + " to quit)", "<name goes here>");

		// See if we need to exit the loop
		if (fruitToCheck == _EXIT_CODE) {
			return;
		}

		// Check if the fruit is in the fruit list
		if (IsFruitInList(fruitToCheck, _FRUITS)) {
			console.log('yep');
		} else {
			console.log('nope');
		}

	}
}

// Run the program
InitializeVariables();
CheckFruitsFromUserInput();
