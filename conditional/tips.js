const peopleName = "DEF";

// Ternary Operator
const greetings =
  peopleName === "ABC"
    ? `Yes, my name is ${peopleName}`
    : `No, I don't even know who I am!`;

console.log(greetings);

// Conditional statement
const phone = "081234567890";
const answerMyNumber =
  phone === "081234567890" || phone === "01234567891" || phone === "01234567892"
    ? `Please choose one between the two!`
    : `My number is not one of them!`;
