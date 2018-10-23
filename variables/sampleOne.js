const peopleName = "Asip";
const peopleAge = 26;
const peopleGender = "Male";
const peopleAddress = "Jakarta";
const peoplePhone = "08123456789";
const peopleRide = "Motor";

/* console.log(
  "Hello, " +
    peopleName +
    ". I am " +
    peopleAge +
    " years old. I live in " +
    peopleAddress
);

console.log(
  `Hello, ${peopleName}. I am ${peopleAge} years old. I live in ${peopleAddress}`
); */

const hero = {
  heroName: "Captain America",
  heroAlias: "Capt",
  heroColor: "Red-Blue",
  heroGender: "Male"
};

console.log(`${hero.heroName} ${hero.heroGender}`);

const shops = {
  shop_id: 1234567,
  shop_name: "Zippy Shop",
  shop_url: "www.zippyshop.com",
  logo_url: "www.zippyshop.com/img.jpg"
};

console.log(`${shops.shop_name}`);

const shopArray = [
  {
    shop_id: 1234567,
    shop_name: "Zippy Shop",
    shop_url: "www.zippyshop.com",
    logo_url: "www.zippyshop.com/img.jpg",
    is_new: 0
  },
  {
    shop_id: 321,
    shop_name: "Zippy Shop 2",
    shop_url: "www.zippyshop2.com",
    logo_url: "www.zippyshop2.com/img.jpg",
    is_new: 0
  }
];

for (let i = 0; i < shopArray.length; i++) {
  console.log(`${shopArray[i].shop_name}`);
}

shopArray.forEach(function(shop) {
  console.log(`${shop.shop_name}`);
});
