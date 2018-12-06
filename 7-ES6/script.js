// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

*/

/*
// ES5 ––– Function scoped
function driversLicense5(passedTest) {

  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to driver a car.');

}

driversLicense5(true);

// ES6 ––– Block scoped
function driversLicense6(passedTest) {

  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to driver a car.');

}

driversLicense6(true);


var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/


//////////////////////////////
// Lecture: Blocks and IIFEs

// ES6;
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
console.log(c);

// ES5
(function() {

  var c = 3;
})();

// console.log(c);