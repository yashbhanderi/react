/*

Destructuring

- way to destructure properties from the objects and arrays
*/

var obj = {
    name: "Yash",
    age: 22,
    cities: ["Surat", "Ahmedabad", "Jamnagar", "Rajkot", "Vadodara", "Gandhinagar"]
};

// Object Destcruring
var {name, age} = obj;  // PLEASE USE EXACT SAME NAME AS PROP NAME IN OBJECT

// Array Destcruring
var [firstCity, secondCity] = obj.cities;   // This will assign based on Index


/*

Rest/Spread Operator

*/

// Rest Operator (Always use at the END)
var [first, second, ...others] = obj.cities; // others = [ 'Jamnagar', 'Rajkot', 'Vadodara', 'Gandhinagar' ]

// Spread Operator
var newCities = ["Delhi", ...obj.cities, "Chennai"];

var newObject = {
    ...obj,
    
    // Adding new property
    country: "India",

    // Overriding existing property of spreaded obj 
    age: 25
}


/*

Template literals

- Basically a way to combining strings with dynamic variables.
- `` : Use this quotes to make string into template literals

*/

var literals = `My name is ${obj.name}. My age is ${obj.age} and I live in ${firstCity}.`;


/*

Arrow Functions

- No need to write return and curly braces If one liner function

*/

function getSum(a, b) {
    return a + b;
}

// IS EQUIVALENT TO BELOW STATEMENT

const getSum2 = (a, b) => a + b;


// Ex. Another example function, with more than one line

function getSomething(a, b) {
    var c = a + b;
    var d = c + a;
    return d;
}

const getSomething2 = (a, b) => {
    var c = a + b;
    var d = c + a;
    return d;
}


/*

LOGICAL OPERATORS

&& - AND - Only executes RIGHT if left is TRUE
|| - OR - Executes everytime LEFT unless left is FALSY Values
?? - Nullish Coalescing - Executes everytimes LEFT unless left is null or undefined

FALSY Values = null, undefined, false, 0, NaN, "", -0, 0n, document.all 

Simple Rule:

1. If && -> This will execute right thing --- ONLY IF LEFT IS TRUE
2. If ||, ?? -> This will execute left thing --- RIGHT ONLY IF LEFT IS FALSE

*/

const andOpTRUE = 1 && 'AND'; // 'AND'
const andOpFALSE = 0 && 'AND'; // 0

const orOpTRUE = 1 || 'OR'; // 1
const orOpFALSE = 0 || 'OR'; // 'OR'

const nullCoahesingOpTRUE = 1 ?? 'nullCoahesing'; // 1
const nullCoahesingOpFALSY = 0 ?? 'nullCoahesing'; // 0
const nullCoahesingOpNull = null ?? 'nullCoahesing'; // 'nullCoahesing'


