/**
 * 1. Buatlah sebuah array yang berisi 3 minuman favorit kalian, dan simpan dalam variabel
 * bernama ListMinuman.
 * 2. Setelah itu, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan.
 * 3. Terakhir, tambahkan minuman baru di depan array
 */ 

const ListMinuman = ["Es Teh", "Jus", "Es Kuwut"];
ListMinuman[0] = "Es Jeruk";
ListMinuman[1] = "Es Red Velvet";
ListMinuman.unshift("Matcha");
console.log(ListMinuman);