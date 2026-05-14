/**
 * Mengubah angka menjadi "Fizz", "Buzz", "FizzBuzz",
 * atau tetap angka sesuai aturan FizzBuzz.
 *
 * @param {number} value Bilangan bulat
 * @returns {number|string}
 */
function zzzzOrNum(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError("Input harus bilangan bulat");
    }
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    }
    if (value % 3 === 0) {
        return "Fizz";
    }
    if (value % 5 === 0) {
        return "Buzz";
    }
    return value;
}

/**
 * Memproses array angka dengan aturan FizzBuzz.
 *
 * @param {number[]} sequence
 * @returns {(number|string)[]}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new TypeError("Input harus array");
    }
    for (const item of sequence) {
        if (!Number.isInteger(item)) {
            throw new TypeError("Semua elemen harus integer");
        }
    }
    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}
module.exports = {
    fizzBuzz,
    zzzzOrNum,
};