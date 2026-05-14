## Tugas Pendahuluan 04: Automata dan Table Driven Construction

**Nama:** Andini Pratiwi <br>
**NIM:** 103122400060 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Tambahkan mode gelap sekaligus untuk editor-kecil dan tombol-tombolnya. Ketentuan warna untuk latar belakang editor-kecil adalah [#2e3443](https://encycolorpedia.com/2e3443), sementara untuk tombol adalah [#29ddcc](https://encycolorpedia.com/29ddcc). Teks untuk tombol tetap mengikuti warna teks sebelumnya.

Untuk menghapus pinggiran tombol, nyatakan properti `border` untuk tidak ditunjukkan.

<img src="[def]">
contoh tampilan

## Program/Kode
Tersedia di [index.html](index.html), [index.css](index.css), dan [index.js](index.js).

## Output
![Image1.jpg](Image1.jpg)
![Image2.jpg](Image2.jpg)

## Deskripsi
Program konversi gaya teks ini tidak hanya mampu menghitung jumlah karakter, huruf kecil, dan huruf besar, tetapi juga 
menyediakan fitur untuk mengubah teks menjadi huruf besar maupun huruf kecil. Selain itu, aplikasi ini kini dilengkapi dengan dua 
pilihan tampilan, yaitu mode terang dan mode gelap.
Pada file index.html, pengaturan mode tampilan dikendalikan melalui dua tombol utama, yaitu <button id="tombol-terang">Mode 
Terang</button> dan <button id="tombol-gelap">Mode Gelap</button>. Ketika pengguna menekan tombol mode gelap, file index.css akan 
mengaktifkan class .mode-gelap. Saat class ini aktif, tampilan halaman berubah menjadi lebih gelap, dengan latar belakang 
berwarna #171b25 dan teks berwarna terang #EBECF7.
Tidak hanya itu, beberapa elemen lain juga ikut menyesuaikan, seperti kotak input (.kotak-input) yang berubah menjadi warna latar 
#2e3443, serta tombol-tombol yang menggunakan warna latar #29ddcc. Selain perubahan warna, garis tepi pada tombol juga 
dihilangkan dengan properti border: none; agar tampilannya lebih sederhana.
Sebaliknya, ketika tombol mode terang ditekan, class .mode-gelap akan dinonaktifkan sehingga tampilan halaman kembali ke kondisi 
awal yang lebih cerah.
[def]: 
:\Users\LOQ\Downloads\Praktikum_KPL\KPL_AndiniPratiwi_103122400060_SE-08-02\04_Automata_dan_Table-Driven_Construction\TP\Image1.pn