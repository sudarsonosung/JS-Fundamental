const peopleName = "ABC";
const age = "35";
const profile = {
  name: "DEF",
  phone: "123456789"
};

switch (peopleName) {
  case "DEF":
    console.log(`My Name is ${peopleName}`);
    break;
  case "GHI":
    console.log("My Name is GHI");
    break;
  case "JKL":
    console.log("My Name is JKL");
    break;
  default:
    console.log("I don't know who I am");
}