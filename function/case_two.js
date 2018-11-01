const dataProduct = [
  {
    name: "Nabati Chocolate Wafer",
    price: 20000,
    category: "Food",
    location: "Bandung"
  },
  {
    name: "Adapter Macbook Pro",
    price: 850000,
    category: "Electronics",
    location: "Jakarta"
  },
  {
    name: "Batik Shirt",
    price: 399000,
    category: "Fashion",
    location: "Bandung"
  },
  {
    name: "Boardmarker Snowman",
    price: 25000,
    category: "Office",
    location: "Tangerang"
  }
];

// Todo list :
// 1. Buat function untuk menghitung diskon. Kategori food, diskon 50%
// 2. buat function utk hitung ongkir (tangerang 15000, jakarta 10000, bandung 20000)
// 3. buat function utk hitung biaya admin (2000)
// 4. buat function utk hitung total harga yg harus dibayar user
// 5. buat looping / perulangan
// 6. panggil semua function tersebut

const countDiscount = (price, category) =>
  category === "Food" ? price * 0.5 : 0;
const countShippingFee = location => {
  let fee = 0;
  if (location == "Jakarta") {
    fee = 10000;
  } else if (location == "Tangerang") {
    fee = 15000;
  } else {
    fee = 20000;
  }
  return fee;
};
const countAdminFee = () => 2000;
const countTotalPrice = (price, discount, shippingFee, adminFee) => {
  const totalPrice = price - discount + shippingFee + adminFee;
  return totalPrice;
};

dataProduct.map((product, id) => {
  const price = product.price;
  const discount = countDiscount(product.price, product.category);
  const shippingFee = countShippingFee(product.location);
  const adminFee = countAdminFee();
  const totalPrice = countTotalPrice(price, discount, shippingFee, adminFee);
  console.log(`=======================================`);
  console.log(`Nama Product : ${product.name}`);
  console.log(`Total Harga yang harus dibayar : Rp. ${totalPrice},-`);
});
