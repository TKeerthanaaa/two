"use strict";

// 1.Write a JavaScript program to find the sum of all the numbers in an array.
let myArr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < myArr.length; i += 1) {
  sum += myArr[i];
}
console.log(sum);

// 2 Write a JavaScript program to find the largest and smallest elements in an array.
let numbers = [1, 2, 50, 56, 12, 13];
let largest = numbers[0];
let lowest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}
console.log(largest);
console.log(lowest);

// 3.Write a JavaScript program to check if a given number is positive, negative, or zero.
let num = 1;
if (num > 0) {
  console.log("Given number is positive");
} else if ((num = 0)) {
  console.log("Given number is zero");
} else {
  console.log("Given number is negative");
}

// 4. Write a JavaScript program to check if a given string, is a palindrome.
let str = "malayalam";
let word = str.split("");
let reverse = word.reverse("");
let join = reverse.join("");
console.log(word);
console.log(reverse);
console.log(join);
if ((str = join)) {
  console.log("It is Palindrome");
} else {
  console.log("It is Not Palindrome");
}

// 5. Write a JavaScript program to reverse a string without using the built-in reverse () method.
let words = "Hello World";
function reverseString(words) {
  let splitArray = words.split("");
  let reverseArray = splitArray.reverse();
  let joinArray = reverseArray.join();
  return joinArray;
}
console.log(reverseString("joinArray"));

// 6. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign. Sample numbers: 3, -7, 2 Output : The sign is -
let numOne = 3;
let numTwo = -7;
let numThree = 2;
let number = numOne * numTwo * numThree;
if (number > 0) {
  console.log("The sign is +");
} else if (number < 0) {
  console.log("The sign is -");
} else {
  console.log("The sign is 0");
}

// 7. Write a JavaScript program to remove items from a drop-down list. Sample HTML file:
const remove = document.getElementById("remove");
const selectElement = document.getElementById("colors");
const selectWord = selectElement.selectWord;
console.log(selectWord);
function removeColor(){
  if(selectWord) !== -1{
    selectElement = remove(selectWord)
  }
}
remove.addEventListener("click", removeColor);

// 8. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results. Sample numbers: 0, -1, 4 Output : 4, 0, -1
let sumOne = 0;
let sumTwo = -1;
let sumThree = 4;
let sortSum;
if (sumOne >= sumTwo && sumOne >= sumThree) {
  if (sumTwo >= sumThree) {
    sortSum = sumOne + "," + sumTwo + "," + sumThree;
  } else {
    sortSum = sumOne + "," + sumThree + "," + sumTwo;
  }
} else if (sumTwo >= sumOne && sumTwo >= sumThree) {
  if (sumOne >= sumThree) {
    sortSum = sumTwo + "," + sumOne + "," + sumThree;
  } else {
    sortSum = sumTwo + "," + sumThree + "," + sumOne;
  }
} else {
  if (sumThree >= sumOne) {
    sortSum = sumThree + "," + sumOne + "," + sumTwo;
  } else {
    sortSum = sumThree + "," + sumTwo + "," + sumOne;
  }
}

alert("Sorted number:" + sortSum);

// 9. Write a JavaScript function that returns a string that has letters in alphabetical order
// Example string: &#39;webmaster&#39;
// Expected Output : &#39;abeemrstw&#39;
function sortString(str) {
  const sortedArray = str.split("").sort();
  const sortedString = sortedArray.join("");
  return sortedString;
}
const inputString = "webmaster";
const newString = sortString(inputString);
console.log("Sorted number: ", newString);

// 10. Write a JavaScript program that adds a keydown event listener to a text input to detect when the &quot;Enter key&quot; is pressed.
const inputElement = document.getElementById("textInput");
inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
  }
});
