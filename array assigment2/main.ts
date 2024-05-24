// Question 1
// Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango","orange"

const friuts :string[] =["apple","banana","mango","orange"];

// Question 2
// Declare an array named numbers that can contain only number 
// elements and initialize it with the values 10, 20, 30 and 40

const numbers :number[] = [10,20,30,40];


// Question 3
// Access the third element of the fruits array and assign it to a 
// variable named thirdFruit.


let thirdfriut = [2];

// Question 4
// Change the second element of the numbers array to 25

numbers[1] = 25;

console.log(numbers);

// Question 5
// Add the element "grape" to the end of the fruits array using the 
// method

friuts.push("grapes");
console.log(friuts);

// Question 6
// Remove the last element from the fruits array using the 
// method and assign it to a variable named lastFruit


let lastfriut= friuts.pop();

//display the result
console.log (friuts);
console.log(lastfriut);

// Question 7
// Remove the first element from the fruits array using the 
// method and assign it to a variable named firstFruit

let firstfriut = friuts.shift();

//display the result

console.log(firstfriut);
console.log(friuts);   // ['banana', 'mango', 'orange' ]

// Question 8
// Add the element "kiwi" to the beginning of the fruits array 
// using the method

friuts.unshift("kiwi");

//display the result

console.log(friuts);  //[ 'kiwi', 'banana', 'mango', 'orange' ]

// Question 9
// Remove 2 elements from the fruits array starting from index 1 
// using the method

friuts.splice(1,2);

//dispay the output

console.log(friuts);    //[ 'kiwi', 'orange' ]

// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the 
// fruits array using the method

friuts.splice(1,0,"pineapple" , "pear");

//display rhe result
console.log(friuts);  //[ 'kiwi', 'pineapple', 'pear', 'orange' ]


//Question 11
// Create a new array named citrusFruits that contains the first 
// two elements of the fruits array using the method

const citrusFriuts = friuts.slice(0,2);
//display the result

console.log(citrusFriuts);  //[ 'kiwi', 'pineapple' ]

// Question 12
// Create a new array named lastTwoFruits that contains the last 
// two elements of the fruits array using the method

let lastTwoFriuts = friuts.slice(-2);

//display the result
console.log(lastTwoFriuts); //[ 'pear', 'orange' ]


