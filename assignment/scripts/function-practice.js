console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  let hello = 'Hello World';
  return hello;
}
// Call the function to test
hello();
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'Latifa'
function helloName( name ) {
  console.log('in helloName', name);
  return name;
}
// Remember to call the function to test
console.log('running helloName with Latifa', helloName(name));

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber){
  console.log('in addNumbers:', firstNumber, secondNumber);
  return firstNumber + secondNumber;
  
}
console.log('running addNumbers with 2 & 3:', addNumbers(2,3));


// 4. Function to multiply three numbers & return the result
function multiplyThree( ){

}
function multiplyThree(num1, num2, num3){
  console.log('in multiplyThree:', num1, num2, num3);
  answer = num1 * num2 * num3;
  return answer
}
console.log('running multiplyThree with multiplying three numbers:', multiplyThree(4,3,3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    console.log('in Number');
    return true;
  }
  else if (number <= 0){
    console.log('in Number');
    return false;
  }
  
    
}
console.log(' Testing isPositive', isPositive(-3));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
isPositive();
console.log( 'isPositive - should say true', isPositive(3) );

isPositive();
console.log( 'isPositive - should say false', isPositive(0) );

isPositive();
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const ItemsInArray = 4;
let array = [];


function getLast(array ) {
  if (array.length >= 1){
    return array.slice(-1);
  }
  else if (array.length <= 0){
    console.log('undefined');
  }
}
console.log(' testing getLast', getLast([3,5,6,8]));
console.log(' testing getLast', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
const valuesInArray = [];

function find( value, valuesInArray ){
  
  console.log ('in find', value, valuesInArray);
  for(var i =0; i<valuesInArray.length;i++){
    if(valuesInArray[i]==value)
      return true;
   
    
  }
  return false;
  
}
console.log("Testing values in arrays,", find(3, [6,5,9,0,7]));
  // for number of ValuesInArray
  // if number = ValuesInArray[i];
 
  



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
