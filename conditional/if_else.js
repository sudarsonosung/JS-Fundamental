// import { peopleName, profile } from "../variable";
// const { peopleName, profile } = require("../variable");

// console.log(peopleName);
// console.log(profile);

// conditional with if - else
const peopleName = "ABC";
const age = '35';
const profile = {
  name: "DEF",
  phone: "123456789"
};

// >, <, >=, <=, !==, ===, == operator comparison
// +, -, /, * operator aritmatik
// &&, ||, ! operator logical

if (age === 17) {
  console.log(`I am ${age} years old!`);
} else if (age >= 17 && age <= 25 && age < 30) {
  console.log(`Guess my age!`);
} else if (age == 35 || age === "35") {
  console.log(`....`);
}else{
    console.log(`ABCDEFGHI`);
}
