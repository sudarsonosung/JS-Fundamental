const rapor = {
  math: 80,
  english: 85,
  physics: 99,
  bahasa: 55,
  computer: 100,
  accounting: 67,
  chemistry: 35
};

const hasil_akhir =
  (rapor.math +
    rapor.english +
    rapor.physics +
    rapor.bahasa +
    rapor.computer +
    rapor.accounting +
    rapor.chemistry) /
  7;

const hasil_akhir_pembulatan = Math.round(hasil_akhir);
console.log(hasil_akhir_pembulatan);

//Requirements
// hasil_akhir_pembulatan lebih besar sama dengan 95 -----> Selamat! You are the greatest!
// hasil_akhir_pembulatan lebih besar sama dengan 80 dan hasil_akhir_pembulatan kurang dari 95 -----> Congratulations! Kamu hebat!
// hasil_akhir_pembulatan lebih besar sama dengan 60 dan hasil_akhir_pembulatan kurang dari 80 -----> Coba lagi!
// hasil_akhir_pembulatan lebih besar sama dengan 40 dan hasil_akhir_pembulatan kurang dari 60 -----> Kurangin main game!
// Selain dari semua aturan diatas ---> Tolong panggil orang tuamu!

if (hasil_akhir_pembulatan >= "95") {
  console.log("Selamat! You are the greatest!");
} else if (hasil_akhir_pembulatan >= "80" && hasil_akhir_pembulatan < "95") {
  console.log("Congratulations! Kamu hebat!");
} else if (hasil_akhir_pembulatan >= "60" && hasil_akhir_pembulatan < "80") {
  console.log("Coba lagi!");
} else if (hasil_akhir_pembulatan >= "40" && hasil_akhir_pembulatan < "60") {
  console.log("Kurangin main game!");
} else {
  console.log("Tolong panggil orang tuamu!");
}

let sum_nilai = 0;
let count = 0;
for (var nilai in rapor) {
  sum_nilai += rapor[nilai];
  count++;
}
let sum_nilai_pembulatan = Math.round(sum_nilai / count);
console.log(sum_nilai_pembulatan);
