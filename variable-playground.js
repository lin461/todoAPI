var person = {
	name : 'Alex',
	age : 21
};

function updatePerson(obj) {
	// obj = {       this doesn't work
	// 	name: 'Alex',
	// 	age: 23
	// };
	obj.age = 23; // mutate, the correct way to update
}


updatePerson(person);
console.log(person);

// Array example

var grades = [15,88];

function addGrade(gradesArr) {
	gradesArr.push(55); // update the grades array

	debugger;

	gradesArr = [12, 33, 99]; // doesn't update anything, since it's a new variable
}

addGrade(grades);
console.log(grades);


// the debugger and passing variables by reference

// command: node debug variable-playground.js
// cont -> to continue
// repl -> to replace
// kill -> to terminate
// quit -> to quit the debug mode
