"use strict";
// Q No.1.	Create a function that takes an array, an index, and a value as parameters. Inside the function, use the 
// splice method to insert the value at the specified index in the array. Return the modified array.
var studentNames = ["asif", "adnan", "umer", "kamran", "Zeeshan", "Shafie", "Hussain"];
function correctionsInArray(a, b, c) {
    studentNames.splice(a, b, c);
    //console.log(studentNames)
    return studentNames;
}
var nameOfStudents = correctionsInArray(3, 1, "Sarfraz");
console.log(nameOfStudents);
// Q No.2.	Implement a simple shopping cart program using an array. Create functionns to add items, remove items, 
// and update quantities using the splice method. Print the cart's contents after each operation
// Q No.3.	Write a program that uses a while loop to print the first 25 integers.
// Q No.4.	Write a program that uses a while loop to print the first 10 even numbers.
// Q No.5.	Create a function that takes a positive integer as parameter and uses a while loop to calculate and 
// return the factorial of that number.
// Q No.6.	Write a program having an array of numbers if the number is negative it should remove the negative 
// number from the array.
// Q No.7.	Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return 
// the sum of all the numbers in the array.
// Q No.8.	Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each 	temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in 	an array. Use a while loop to perform the conversion for each temperature.
