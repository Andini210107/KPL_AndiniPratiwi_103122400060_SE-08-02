// @ts-nocheck
const fb = require("./index.js");
const assert = require("assert");

try {

    console.log("Seri: fizzBuzz");

    assert.deepStrictEqual(
        fb.fizzBuzz([1, 2, 3, 4, 5]),
        [1, 2, 'Fizz', 4, 'Buzz']
    );

    console.log("✅ Tes 1 berhasil");

    assert.strictEqual(
        fb.zzzzOrNum(15),
        "FizzBuzz"
    );

    console.log("✅ Tes 2 berhasil");

    assert.strictEqual(
        fb.zzzzOrNum(7),
        7
    );

    console.log("✅ Tes 3 berhasil");

} catch (error) {
    console.error(`❌ Gagal: ${error}`);
}