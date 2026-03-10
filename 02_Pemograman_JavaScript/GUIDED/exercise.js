/**
 * tulislah sebuah fungsi yang menerima bilangn N dan mencetak penjumlahan dari 1 hingga N. contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3)
 */

function sumValue(N) {
    let result = N * (N + 1) / 2;
    console.log(result);
}

sumValue(5);