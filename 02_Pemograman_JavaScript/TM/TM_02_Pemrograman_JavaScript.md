# Tugas Mandiri 02: Pemrograman JavaScript

**Nama:** Andini Pratiwi <br>
**NIM:** 103122400060 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Buatlah sebuah fungsi bernama `fizzBuzz` yang menerima input larik *(array)* dan mengembalikan deretan bilangan dan "Fizz" untuk kelipatan 2, "Buzz" untuk kelipatan 7, dan "FizzBuzz" untuk kelipatan 14. Beri nama berkas program sebagai `tm.js` dan taruh di direktori `TM`.

Contoh:
```
Input:
[8, 9, 32, 75, 84]

Output:
Fizz 9 Fizz 75 FizzBuzz
```

## Program/Kode
Tersedia di [test.js](test.js) dan [tm.js](tm.js)

## Output
![Screenshoot](image.png)

## Deskripsi
Program ini merupakan implementasi FizzBuzz modifikasi menggunakan bahasa pemrograman JavaScript. Program dibuat untuk memproses array angka dengan aturan tertentu, yaitu angka yang habis dibagi 14 akan diubah menjadi “FizzBuzz”, angka yang habis dibagi 2 menjadi “Fizz”, dan angka yang habis dibagi 7 menjadi “Buzz”. Jika angka tidak memenuhi kondisi tersebut, maka angka akan ditampilkan seperti semula. Pada file `tm.js`, program menggunakan perulangan dan percabangan `if-else` untuk memeriksa setiap elemen array, kemudian hasilnya disimpan ke dalam array baru sebelum digabung menjadi output akhir menggunakan method `join()`.
Selain itu, program juga menerapkan defensive programming dengan melakukan validasi input menggunakan `Array.isArray()` untuk memastikan data yang diterima berupa array. Jika input tidak valid, program akan menampilkan pesan “Input tidak valid”. Pada file `test.js`, dilakukan unit testing menggunakan module `assert` untuk menguji apakah output program sudah sesuai dengan yang diharapkan. Pengujian dilakukan pada beberapa kondisi, seperti input normal, angka negatif, penggunaan separator koma, serta input yang tidak valid. Dengan adanya pengujian tersebut, program menjadi lebih terstruktur, aman, dan mudah diverifikasi kebenarannya.