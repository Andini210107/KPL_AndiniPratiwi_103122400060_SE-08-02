const { hitungHuruf, hitungKata } = require('./textUtils');

const teks = "Bar bar 123 Hello!";

console.log(hitungHuruf(teks)); // 14
console.log(hitungKata(teks)); // 3