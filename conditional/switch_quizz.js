const profile = {
  name: "DEF",
  phone: "123456789"
};

// switch phone number
// 1. 081234567890 --> Operator yang anda gunakan adalah Telkomsel Simpati
// 2. 08134567890 --> Operator yang anda gunakan adalah Telkomsel Halo
// 3. 08578912345 --> Operator yang anda gunakan adalah Indosat Ooreedo
// 4. Selain dari 3 diatas, Silahkan masukkan nomor handphone anda!

switch (profile.phone) {
  case "081234567890":
    console.log("Operator yang anda gunakan adalah Telkomsel Simpati");
    break;
  case "08134567890":
    console.log("Operator yang anda gunakan adalah Telkomsel Halo");
    break;
  case "08578912345":
    console.log("Operator yang anda gunakan adalah Indosat Ooreedo");
    break;
  default:
    console.log("Silahkan masukkan nomor handphone anda!");
}
