//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function (name) {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function () {
	var name = prompt("Please enter your name");
	if (name !== null) {
		return name;
	}
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function () {
	var name = getName();
	alert("Welcome, " + name);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//"If I'm a fn and I need to be passed some stuff, Id say 'Hey, pass me some parameters'."
//"But, If I'm a statement inside of the function and I needed to access what was passed in, I would refer to them as arguments."


//////////////////PROBLEM 5////////////////////



// What are all the falsy values in JavaScript and how do you check if something is falsy?


// "false, '', NaN, null, undefined, 0"
// "You can check if something is truthy or falsy by passing it into Boolean()"



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

var myName = function () {
	return "John Munson";
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

outerFn = function () {
	return function () {
		return myName();
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();


