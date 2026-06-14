# Tugas Mandiri 03: GUI dengan HTML dan CSS

**Nama:** Andini Pratiwi <br>
**NIM:** 103122400060 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Setelah kamu menyelesaikan tugas pendahuluan (bisa buka di atas), terapkanlah fungsi untuk (1) menghitung huruf kecil yang disediakan di #hk, (2) mengubah huruf kecil ke huruf besar ketika pengguna menekan tombol #huruf-besar, dan (3) mengubah huruf besar ke huruf kecil ketika pengguna menekan tombol #huruf-kecil. <br>

Untuk nomor 2 dan 3, tampilkan hasilnya di dalam editor-kecil. <br>
Kemudian, hapuslah fitur "Paragrafkan" dari alat. <br>
Contoh uji kasus untuk hitung huruf kecil:
```
reverse one nine nine nine -> 22

reverse 1999 -> 7

Konstruksi KPL -> 9

You're already coding statecharts, they’re just implied. -> 46

eglassick@sanmiguelschools.org -> 28 
```
Contoh uji kasus untuk "Besarkan" huruf:
```
Deskripsi program Pada function mulOfArray -> DESKRIPSI PROGRAM PADA FUNCTION MULOFARRAY

THE DEVIL WEARS PRADA 2 -> THE DEVIL WEARS PRADA 2

Write, test, and fix code quickly with GitHub Copilot -> WRITE, TEST, AND FIX CODE QUICKLY WITH GITHUB COPILOT
```
Contoh uji kasus untuk "Kecilkan" huruf:
```
Deskripsi program Pada function mulOfArray -> deskripsi program pada function mulofarray

THE DEVIL WEARS PRADA 2 -> the devil wears prada 2

Write, test, and fix code quickly with GitHub Copilot -> write, test, and fix code quickly with github copilot
```
## Program/Kode
Tersedia di [index.html](index.html), [index.css](index.css), dan [index.js](index.js)

## Output
![image1.png](image1.png)
![image2.png](image2.png)
![image3.png](image3.png)

## Deskripsi
Program ini merupakan sebuah web sederhana yang berfungsi sebagai pengonversi gaya teks. Pengguna dapat memasukkan teks ke dalam kolom textarea yang tersedia, kemudian sistem akan secara otomatis menampilkan jumlah karakter serta jumlah huruf kecil dari teks yang diketik secara real-time. Selain itu, aplikasi ini juga menyediakan dua tombol utama, yaitu tombol untuk mengubah seluruh teks menjadi huruf besar (uppercase) dan tombol untuk mengubah teks menjadi huruf kecil (lowercase). Dari segi tampilan, desain antarmuka dibuat menggunakan CSS dengan konsep flexbox agar posisi konten berada di tengah layar, serta ditambahkan elemen seperti padding, border radius, dan bayangan (shadow) untuk memberikan kesan modern dan rapi. Interaksi pada aplikasi ini dikendalikan oleh JavaScript yang menangani event input dan klik tombol, sehingga aplikasi dapat merespons tindakan pengguna secara langsung. Secara keseluruhan, aplikasi ini merupakan contoh implementasi dasar dari pengolahan teks berbasis web yang menggabungkan HTML sebagai struktur, CSS sebagai tampilan, dan JavaScript sebagai pengatur logika program.