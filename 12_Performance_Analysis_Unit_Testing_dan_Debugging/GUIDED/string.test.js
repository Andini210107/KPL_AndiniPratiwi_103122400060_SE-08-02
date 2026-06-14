import test from "node:test";
import assert from "node:assert/strict";

test("Memastikan string kosong bersifat falsy", () => {
    const value = "";
    assert.strictEqual(Boolean(value), false);
});

test("Memastikan string berisi teks bersifat truthy", () => {
    const value = "Belajar Node.js";
    assert.strictEqual(Boolean(value), true);
});