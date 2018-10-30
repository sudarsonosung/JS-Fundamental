const dataProducts = [
  {
    name: "Red Dead Redemption 2",
    price: "850000",
    category: "RPG",
    rating: "10",
    location: "Jakarta"
  },
  {
    name: "Ghost of Tsukushima",
    price: "745000",
    category: "Action",
    rating: "9",
    location: "Bandung"
  },
  {
    name: "Spiderman",
    price: "750000",
    category: "Humor",
    rating: "8",
    location: "Tangerang"
  },
  {
    name: "Shadow of The Tomb Raider",
    price: "680000",
    category: "Adventure",
    rating: "7",
    location: "Batam"
  }
];

// Expected result:
// ===========================
// Game name: Shadow of The Tomb Raider
// Price: Rp. 680000
// Category:Adventure
// Rating:7
// Ongkos Kirim: Rp. 35000

//Ongkir dari Jakarta = 10000
//Ongkir dari Tangerang = 15000
//Ongkir dari Bandung = 20000
//Ongkir dari Batam = 35000

//Clues / To do list:
// 1. Gunakan looping atua perulangan untuk mengolah data secara satu persatu
// 2. Didalam looping tersebut gunakan conditional untuk menghitung ongkir
dataProducts.map((game) => {
  console.log(`=====================================`);
  console.log(`Game name: ${game.name}`);
  console.log(`Price: Rp. ${game.price}`);
  console.log(`Category: ${game.category}`);
  console.log(`Rating: ${game.rating}`);
  let ongkir = 0;
  if (game.location == "Jakarta") {
    ongkir = 10000;
  } else if (game.location == "Tangerang") {
    ongkir = 15000;
  } else if (game.location == "Bandung") {
    ongkir = 20000;
  } else {
    ongkir = 35000;
  }
  console.log(`Ongkos Kirim: Rp. ${ongkir}`);
});
