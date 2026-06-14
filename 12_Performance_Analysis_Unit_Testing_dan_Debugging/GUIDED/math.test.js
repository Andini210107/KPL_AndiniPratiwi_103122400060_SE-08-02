import test from "node:test";
import assert from "node:assert/strict";

test("Memastikan 1 setara dengan 1", () => {
    assert.strictEqual(1, 1);
});

test("Memastikan 1 bukan 2", () => {
    assert.notStrictEqual(1, 2);
});

test("Hasil 1 + 2 adalah 3", () => {
    assert.strictEqual(1 + 2, 3);
});

test("Validasi ketidakakuratan floating point", () => {
    assert.notStrictEqual(0.1 + 0.2, 0.3);
});

test("Penjumlahan desimal dan integer", () => {
    assert.strictEqual(1.1 + 2, 3.1);
});