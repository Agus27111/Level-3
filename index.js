//NOMOR 1
/* 
Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.
In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/
//Example
// Mendefinisikan variabel
let angka = 10;

// Memeriksa kondisi menggunakan if else
if (angka > 0) {
    // Jika angka lebih besar dari 0, tampilkan pesan ini
    console.log("Angka adalah bilangan positif");
} else {
    // Jika tidak, tampilkan pesan ini
    console.log("Angka bukan bilangan positif");
}

//NOMOR 2
// Fungsi untuk memeriksa apakah angka adalah kelipatan 5
function cekKelipatan5() {
  // Acak nomor antara 1-100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number between 1 and 100:", randomNumber);

  if (randomNumber % 5 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Memanggil fungsi dua kali
cekKelipatan5();
cekKelipatan5();



