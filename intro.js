// var c = 23;
// var d = 27;
// const PI = 3.14;
// // console.log(PI);

// // console.log(Math.pow(6, 2));
// // Arithemetic Operations and Symbols
// var e = c + d;
// var f = d - c;
// var g = c * d;
// var h = d / c;
// var i = 25 ** 2;
// // type coersion
// var j = 25 + "25";
// //Symbol Constructor
// var k = Symbol("y");
// var l = Symbol("5");
// //Object Data Type:consists of properties and functions or more practically consists of key and value pairs seperated by a comma
// let student = {
//   name: "Kolade",
//   age: 40,
//   course: "Software Enngineering",
//   maritalStatus: undefined,
// };
// //Array Data Type
// let bigArr = [undefined, "hi", 67, null, { name2: "Moses" }, Symbol("d"), []];
// let smallArr = ["hey", "hello", "what's good", "wow"];
// bigArr[5];
// bigArr.length;
// smallArr[3];
// smallArr.length;

// let randomNum = Math.floor(Math.random() * 90);
// // console.log(randomNum);

// // console.log(e, f, g, h, i, typeof j, k === l);
// // console.log(student.name, student.age, student.course, student.maritalStatus);
// // console.log(bigArr[3], bigArr.length);
// // console.log(smallArr[3], smallArr.length);

// let string1 = "I";
// let string2 = "love";
// let string3 = "Java";
// let string4 = "Script";
// let string5 = ".";

// // console.log(string1 + " " + string2 + " " + string3 + string4 + string5);

// let fullString = `${string1} ${string2} ${string3}${string4}${string5}`;
// // console.log(fullString);

// let phrase1 = "The sum of";
// let a = 4;
// let b = 20;
// let phrase2 = "and";
// let phrase3 = "is";
// let sentence1 = `${phrase1} ${a} ${phrase2} ${b} ${phrase3} ${a + b}`;
// console.log(sentence1);
// console.log(sentence1.length);

// let string6 = "javascript";
// let string7 = string6.toUpperCase();
// let string8 = string7.toLowerCase();
// console.log(string6, string7, string8);

// let string10 = string7.substring(4, 12);
// console.log(string10);

// let mySentence = "God is good, all the time";
// let word1 = mySentence.substr(21, 4);
// let word2 = mySentence.substr(4, 2);
// let word3 = mySentence.substr(7, 4);

// console.log(word1 + " " + word2 + " " + word3);

// let string11 = "Hello Kolade Moses Awoleye";
// console.log(string11.split("o"));
// console.log(string11.includes("Hello"));
// console.log(string11.replace("Kolade Moses Awoleye", "007"));
// console.log(string11.charCodeAt(9));

// let ourString = "I love to  eat jollof rice";
// console.log(ourString);
// console.log(ourString.replace("  ", " "));

// let imgAddress =
//   "https://theportablewife.com/wp-content/uploads/best-places-to-take-pictures-in-paris-newfeatured.jpg";

// let img = document.getElementById("my-img");

// img.src = imgAddress;
// let div = document.getElementById("myDiv");
// console.log(div.innerHTML);

// div.innerHTML = "I'm coming for you!";

// function outputConsole() {
//   let text = "I love Javascript";
//   console.log(text);
// }

// let num = Math.random() * 19; // 0 - 18.999
// let roundedNum = Math.floor(num + 2);
// console.log(roundedNum);

// let num2 = Math.random() * 10; // 0 - 9.999
// let roundedNum2 = Math.ceil(num2 + 5);
// console.log(roundedNum2);

let fruit = "banana";
let newFruit = fruit.slice(0, 4);
console.log(newFruit);
console.log(newFruit.lastIndexOf("a"));
