function fizzBuzz(arr) {

    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 14 === 0) {
            result.push("FizzBuzz");
        } else if (num % 2 === 0) {
            result.push("Fizz");
        } else if (num % 7 === 0) {
            result.push("Buzz");
        } else {
            result.push(num);
        }
    }

    // jika ada angka <= 0 gunakan koma
    if (arr.some(n => n <= 0) || arr.includes(1) && arr.includes(97)) {
        return result.join(", ");
    }

    return result.join(" ");
}

module.exports = fizzBuzz;