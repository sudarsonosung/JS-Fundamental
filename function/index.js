const angka_satu = 8;
const angka_dua = 5;

// // cara 1
// function penjumlahanAngka(data_satu, data_dua) {
//   const hasil = data_satu + data_dua;
//   return hasil;
// }

// const hasilPenjumlahan = penjumlahanAngka(10, 5); // parse variable
// console.log(hasilPenjumlahan);

// // // cara 2
// const penjumlahanAngkaLagi = (data_satu, data_dua) => data_satu + data_dua;

// const hasilPenjumlahanLagi = penjumlahanAngkaLagi(10, 5); // parse variable
// console.log(hasilPenjumlahanLagi);

const penjumlahanAngka = (data_satu, data_dua) => data_satu + data_dua;
const penguranganAngka = (data_satu, data_dua) => data_satu - data_dua;
const perkalianAngka = (data_satu, data_dua) => data_satu * data_dua;
const penjumlahanTotal = (data_satu, data_dua, data_tiga) =>
  data_satu + data_dua + data_tiga;

const hasil_penjumlahan = penjumlahanAngka(angka_satu, angka_dua);
const hasil_perkalian = perkalianAngka(hasil_penjumlahan, angka_dua);
const hasil_pengurangan = penguranganAngka(hasil_perkalian, angka_dua);
const hasil_total = hasil_penjumlahan + hasil_perkalian + hasil_pengurangan;

console.log(hasil_total);