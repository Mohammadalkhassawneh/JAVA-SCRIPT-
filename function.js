/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune (Job , Location, Wife , numOfChild) {


var Status = 'You will be a ' + Job + ' at ' + Location + ' and married to ' + Wife + ' with ' + numOfChild + ' kids'
console.log(Status);
}
tellFortune('Web Developer', 'Jordan','Alice', 2 )
/*5
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(yourPuppyAge) {
  age = yourPuppyAge/7;
  let result = `your doggie is ${age}  in dog years`;
  console.log(result);
  

}
calculateDogAge(70);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {
consumption = ((100-age) * 365) * amountPerDay;
let result = `You will need ${consumption} cups of coffee to last you until the ripe old age of 100`;
console.log(result);
}
calculateSupply(24, 3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet (name) {
  let result = `Hello ${name}`
  console.log (result);
}
greet ('Mohammad');

/*
5
what is the error:
function double(cat) {

  return 2 * x;
}
Declaration x

function double(7) {
  return 2 * 7;
}
parameter not variable

function double('7') {
  return 2 * 'x';
}
x between quotations
*/



/*
6
fix these functions:
func double1(x) {
  return 2 * x ;
}

function double2 (x) {
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num){

  cubic = Math.pow (num, 3);
  console.log (cubic);
}
cube(3)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  result= num1 * num2;
  console.log (result);
}
multiply(5,4)

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense (age) {
  if (age <= 20) {
    period = '20' - age ;
    licence = `please come back after ${period} years to get one`
  
  }
  else {
    licence = ("yes you can")
    
  }
  console.log (licence)
}
canIGetADrivingLicense (30);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength (string1, string2) {
  if (string1.length == string2.length){
    console.log('True')
  }
  else {
    console.log('False')
  }
}
sameLength ('Ahmad', 'amjad')
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer (Num1, Num2) {
  console.log(Math.max(Num1, Num2));
}
largerNubmer (4, 10);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNumber (num1, num2, num3){
  console.log (Math.min(num1, num2, num3) )
}
smallerNumber (5, 1, -5)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString (str1,str2,str3,str4) {
  const s1=str1.length;
  const s2=str2.length;
  const s3=str3.length;
  const s4=str4.length;
  shortest = Math.min (s1, s2, s3, s4)
 
  if(s1 == shortest) {
console.log(str1)
  }
  if(s2 == shortest ){
    console.log(str2)
  }
  if( s3 == shortest ){
    console.log(str3)
  }
  if( s4 == shortest ){
    console.log(str4)
 }
  
  
}
shorterString ('AA' ,'AAAA','A','AAAAAAA')
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString (str1,str2,str3,str4) {
  const s1=str1.length;
  const s2=str2.length;
  const s3=str3.length;
  const s4=str4.length;
  shortest = Math.max (s1, s2, s3, s4)
 
  if(s1 == shortest) {
console.log(str1)
  }
  if(s2 == shortest ){
    console.log(str2)
  }
  if( s3 == shortest ){
    console.log(str3)
  }
  if( s4 == shortest ){
    console.log(str4)
 }
  
  
}
longerString ('BB' ,'BBBB','B','BBBBBBBB')
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number){
  Num = number % 2 
  if (Num ==0) {
    console.log ('True')
  }
  else {
    console.log ('False')
  }
}
isEven (8)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number){
  Num = number % 2 
  if (Num ==0) {
    console.log ('False')
  }
  else {
    console.log ('True')
  }
}
isOdd (8)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive (number){
result = Math.abs (number)
console.log (result)
}
positive (-10)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullname (firstName, lastName){
  console.log (firstName.concat(' ',lastName) )
}
fullname ('Mohammad', 'khasawneh')
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average (num1, num2, num3, num4, num5) {
  avg= ((num1 + num2 + num3 + num4 + num5 )/5)
  console.log(avg)
}
average (5, 7, 10, 4, 77)
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber () {
  console.log (Math.random())
}
randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(num1, num2) {
  number =  Math.floor((Math.random() *(num1- num2 + 1)) + num2) ;
  console.log (number)
}
randomBetweenNumbers (7000, 1100)
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty (score) {
  if (score >= 95 && score <= 100) {
    console.log ('A')
  }
  if (score >= 85 && score <= 94) {
    console.log ('B')
  } 
  if (score >= 70 && score <= 84) {
    console.log ('C')
  }
  if (score >= 50 && score <= 69) {
    console.log ('D')
  }

if (score >= 0 && score <= 49) {
  console.log ('F')
}
}
scoreInUniversty (85)

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=0;
function counter(){
console.log(count++);
}

counter();
counter();
counter();
counter();



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter ( ){
  console.log ( `${count} and the counter reset now` );
  count=0;
}
resetCounter ()
counter()
resetCounter ()
/*

*/