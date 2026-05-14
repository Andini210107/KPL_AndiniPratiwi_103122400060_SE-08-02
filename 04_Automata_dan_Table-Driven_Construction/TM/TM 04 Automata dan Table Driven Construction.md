## Tugas Mandiri 04: Automata dan Table Driven Construction

**Nama:** Andini Pratiwi <br>
**NIM:** 103122400060 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Tambahkan mode sepia dengan ketentuan:
| Elemen         | Warna   |
|----------------|---------|
| Latar belakang | #F4ECD8 
| Warna teks     | #5B4636 |    

Biarkan form tetap warna putih.

<img src="[def]">
Contoh tampilan

Ketentuan lainnya:
 1. Bagian mode-div harus menaungi tiga button: `light`, `dark`, dan `sepia` <br>
 2. Bisa berpindah state secara mulus: `sepia` menghasilkan `sepia-mode`, `dark` menghasilkan `dark-mode`, dan `light` menghasilkan `light-mode`

## Program/Kode
Tersedia di [index.html](index.html), [index.css](index.css), dan [index.js](index.js)

## Output
![Image1.jpg](Image1.jpg)
![Image2.jpg](Image2.jpg)
![Image3.jpg](Image3.jpg)

## Deskripsi
Program konversi gaya teks ini mampu menghitung jumlah karakter,
huruf kecil, dan huruf besar, serta menyediakan fitur untuk mengubah teks menjadi huruf besar maupun huruf kecil. 
Selain itu, aplikasi ini juga dilengkapi dengan beberapa pilihan tampilan, yaitu mode terang, mode gelap, dan mode sepia.
Pada bagian HTML, tombol untuk mengaktifkan mode sepia dibuat menggunakan elemen <button id="sepia">Mode Sepia</button> yang 
ditempatkan di dalam container <div class="mode-div">. Untuk mendukung tampilan tersebut, pada CSS dibuat sebuah class bernama .
sepia-mode. Ketika mode ini aktif, latar belakang halaman akan berubah menjadi warna krem (#F4ECD8) dengan teks berwarna cokelat 
gelap (#5B4636) sehingga memberikan nuansa sepia. Meskipun demikian, area input teks (.kotak-input) tetap menggunakan latar 
belakang putih dengan teks hitam agar isi teks tetap mudah dibaca. Sementara itu, tombol kontrol diberikan warna latar teal 
dengan teks berwarna hitam agar tetap terlihat jelas. Agar aplikasi bersifat interaktif, JavaScript digunakan untuk menangani 
aksi dari tombol sepia. Program akan mengambil elemen tombol menggunakan document.getElementById("sepia"), lalu mendeteksi klik 
pengguna melalui addEventListener. Saat tombol ditekan, sistem akan mengganti class pada elemen <body> menjadi "sepia-mode" 
dengan perintah document.body.className = "sepia-mode";. Dengan cara ini, tampilan halaman dapat langsung berubah ke mode sepia 
secara otomatis dan konsisten.