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



/*

Optional Chaining

- '?' operator

- If we don't know a particular property of a object is undefiened or null
then we can use optional chaining to not cause any error.

*/

const firstName = obj?.firstName ?? 'Yash';



/*

Array Map method

- To traverse and apply some operation on array objects and return new array

*/

const newArr = [1, 2, 3, 4, 5].map(item => item * 2); // [ 2, 4, 6, 8, 10 ]

const persons = [
    {
        name: 'yash',
        age: 20,
        city: 'surat'
    },
    {
        name: 'rahul',
        age: 22,
        city: 'delhi'
    },
    {
        name: 'rohan',
        age: 24,
        city: 'mumbai'
    }
]

const cities = persons.map(person => person.city);

const newPersons1 = persons.map(person => {
    return {
        personAndCity: person.name + " from " + person.city
    }
});



/*

Array Filter method

- Same like map, but BASED ON ANY CONDITION
- To traverse and apply some operation on array objects and return new array

*/

const persons2 = 
    persons
    .filter(person => person.age >= 22)
    .map(person => person.city);

/*

Array Reduce method

*/

const totalAge = persons.reduce((acc, person) => person.age + acc, 0);


/*

Sorting

*/

const arr = [1, 4, 9, 2, 1, 6, 3, 4, 6];
const ascSortedArr = arr.slice().sort((a, b) => a - b);     // Slice = DEEP COPY of array
const descSortedArr = arr.slice().sort((a, b) => b - a);     // Slice = DEEP COPY of array

const newObj = persons.slice().sort((a, b) => b.age - a.age);

/*

CRUD OPERATIOS on Array of objects

*/

const newPerson = {
    name: 'sidharth',
    age: 25,
    city: 'banglore'
};

// ADD
const newPersonsAfterAdd = [...persons, newPerson];

// DELETE
const newPersonsAfterDelete = persons.filter(person => person.age < 25);

// UPDATE
const newPersonsAfterUpdate = persons.map(person => {
    return person.age === 20 ? {...person, age: 21} : person
});


/*

Promises

*/

// createOrder(cart)
// 		.then((orderId) => {
// 			return procedToPayment(orderId)
//      }
//      .then((paymentId) => {
//      		return updateWalletBalance(paymentId)
//      }


const p = new Promise((res, rej) => {
    return res("Promise resolved!!");
});

/*

Async-Await

// Main diff - await keyword will wait for the promise to be resolved, 
while promise will be not. It can say you execute below lines.

*/

function getDataUsingPromise() {
    // JS ENGINE will NOT WAIT for the promise to be resolved
    // It will say, you can carry on, I'll wait here and will be execute once the promise will be resolved
    p.then((res) => console.log(res));
    
    console.log("Hello Yash!!");
}

// getDataUsingPromise();
// ---------------- Results
// Hello Yash
// Promise resolved!!

const getDataUsingAsyncAwait = async () => {

    // JS ENGINE will WAIT for the promise to be resolved
    const val = await p;
    console.log(val);
    console.log("Hello Yash!!");
};

// getDataUsingAsyncAwait();

// ---------------- Results
// Promise resolved!!
// Hello Yash





// ------------ Scenarios
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 resolved!!");
    }, 5000);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 resolved!!");
    }, 10000);
});


async function handlePromise() {
    console.log('Hello world');
    
    // Here, If this p1 = 10 sec, p2 = 5 sec => after 10 sec, both will print, 
    // becuase Although JS is single threaded lang, it can concurrently run async operations via event loop
    // So, when p1 is running, p2 is also running


    // If p1 = 5, p2 = 10 => Obv p1 log immediately after 5 seconds, then p2 log
    const val = await p1;
    console.log(val);
    
    const val2 = await p2;
    console.log(val2);
}

handlePromise();