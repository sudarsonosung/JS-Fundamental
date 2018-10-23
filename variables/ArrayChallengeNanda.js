// Perulangan / Iterasi / Looping

// Lv 1
const ratingProduct = "* ";
// *
console.log(ratingProduct);
console.log("======================================================");
// Lv 2
const ratingProductGame = 2;
//* *
let ratingLV2 = "";
for (let i = 0; i < ratingProductGame; i++) {
    ratingLV2 += " *";
}
console.log(ratingLV2);
console.log("======================================================");
// Lv 3
// *
// * *
// * * *
// * * * *
// * * * * *
let lstar = '' ;
for (let i = 0; i < 5; i++) {
    console.log(lstar += '*');
}

console.log("======================================================");
// Lv 4
const products = [
  {
    name: "Uncharted 4",
    price: "Rp. 550.000,-",
    category: "Action",
    transaction: "25",
    rating: 9
  },
  {
    name: "GTA V",
    price: "Rp. 650.000,-",
    category: "RPG",
    transaction: "134",
    rating: 6
  },
  {
    name: "FIFA 2019",
    price: "Rp. 550.000,-",
    category: "Sport",
    transaction: "5",
    rating: 3
  }
];
for (let a = 0; a < products.length; a++) {
    let lstar = '' ;
    for (let i = 0; i < products[a].rating; i++) {
        lstar += '*';
    }
    console.log(`Game : ${products[a].name}, transaction :${products[a].transaction},rating ${lstar}`);
};

// Game : Uncharted 4, Transaction : 25, Rating : * * * * * * * * *
// Game : GTA V, Transaction : 134, Rating : * * * * * * * *
// Game : FIFA 2019, Transaction : 25, Rating : * * * * * * *

