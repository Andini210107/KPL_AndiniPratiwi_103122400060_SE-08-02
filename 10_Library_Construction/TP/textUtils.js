function hitungHuruf(teks) {
  let jumlah = 0;

  for (const char of teks) {
    if (/[a-zA-Z]/.test(char)) {
      jumlah++;
    }
  }

  return jumlah;
}

function hitungKata(teks) {
  const kata = teks.match(/[a-zA-Z]+/g);

  return kata ? kata.length : 0;
}

module.exports = {
  hitungHuruf,
  hitungKata,
};