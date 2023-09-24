// var ubaidraza =prompt("ERnter a value");
// ubaidraza=ubaidraza.toUpperCase();
// console.log("job")
// // Q2
// var ubaidraza =prompt("ERnter a value");
// ubaidraza=ubaidraza.toLocaleLowerCase();
// console.log(" match")
// Q3
// var str = "Ubaidraza";
// var firstChar = str.slice(0, 1);
// var remainChar = str.slice(1);
// console.log(firstChar, remainChar);
// // Q2

// var n=prompt("Enter your dada nmae")
// n=n.length
// console.log(n)
// Q3
// var str = "Ubaidraza";
// var firstChar = str.slice(3,8);
// // console.log(firstChar);
// // Q4
// var text = "My name is Muhammad mohtashim. I am a js developer";

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 9) === "mohtashim") {
//     text = text.slice(0, i) + "ubaidraza" + text.slice(i + 9);
//   }
// }

// console.log(text);
// Q5
// // Sample string represented by a variable
// const myString = "Hello, World!";

// // Measure the number of characters in the string
// const characterCount = myString.length;

// // Slice the string to keep the first character and remove the last 3 characters
// const slicedPortion = myString.slice(1, -3);

// // Print the results
// console.log("Number of characters in the string:", characterCount);
// console.log("Sliced portion of the string:", slicedPortion);
// // Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(text,indx )

// Q8
// var text = "Let's go for a walk. It's a good day to go out and enjoy the weather, don't you think?";
// var indx = text.lastIndexOf("go");

// if (indx !== -1) {
//   // The substring "go" was found in the string
//   console.log("Index of the first character of the last instance of 'go':", indx);
// } else {
//   // The substring "go" was not found in the string
//   console.log("Substring 'go' was not found in the string.");
// }
// Q10
// var str = "abcde";
// var characterAtIndex2 = str.charAt(2);

// console.log("Character at index 2:", characterAtIndex2);


// Q11
var text = "This is a sample text.";
var cha = text.charAt(9);

console.log("The 10th character in the string is:", cha);
// Q12
var str = "This is a sample string.";
var x = str[str.length - 1];

console.log(str,x);
// Q15
// String represented by a variable
var reply = "no, I don't want to go. It's a no from me.";

// Array to store characters
var charArray = [];

// Iterate through the characters of the string and store them in the array
for (var i = 0; i < reply.length; i++) {
  charArray.push(reply.charAt(i));
}

// Replace the first instance of "no" with "yes"
var revisedReply = reply.replace("no", "yes");

console.log("Array of characters:", charArray);
console.log("Revised reply:", revisedReply);

// chapter 26
var roundedValue = Math.round(0.5);
console.log(roundedValue)
// chapter27
var randomNumber = Math.random() * 50;

console.log(randomNumber.toFixed(0));
// chapter30
var total; // Declare the 'total' variable

// Now you can use the 'total' variable in your code
total = 100; // Assign a value to 'total'

var prettyTotal = total.toFixed(100);
console.log(prettyTotal)
// Q2
var num = 3.456789; // Replace with your number
num = Math.round(num * 100) / 100;
var num = 3.456789; // Replace with your number
num = parseFloat(num.toFixed(2));
console.log(num+num)
// Q3
if (num.toFixed(2).toString().length > 4) {
    // Your code here if the condition is true
  }