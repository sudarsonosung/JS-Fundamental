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
    rating: 8
  },
  {
    name: "FIFA 2019",
    price: "Rp. 550.000,-",
    category: "Sport",
    transaction: "5",
    rating: 7
  }
];

//Iterasi / Looping / Perulangan
// 1 Map
// 2 For-Loop
// 3 ForEach

// Map
products.map((dataObj, id) => {
  console.log(dataObj.name, dataObj.price, dataObj.rating);
});
console.log("===============================================================");
// For-Loop
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name, products[i].price, products[i].rating);
}
console.log("===============================================================");
products.forEach(product => {
  console.log(product.name, product.price, product.rating);
});