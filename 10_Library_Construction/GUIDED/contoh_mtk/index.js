export function tambah(x,y) {
  return x + y;
}

export function kurang(x,y) {
  return x - y;
}

export function bagi(x,y) {
  return x / y;
}

export function kali(x,y) {
  return x * y;
}

export function pangkat(x,y) {
  return x ** y;
}

export function plsv_tiga(x, a, b) {
  const koef = parseInt(x.replace("x", ""));

  if (isNaN(koef)) {
    throw new Error("Koefisien tidak valid");
  }

  return (b - a) / koef;
}

export function plsv_dua(x, op, a) {
  const coeff = parseInt(x.replace("x", ""));

  const balikan_op = {
    ">=": "<=",
    "<=": ">=",
    "<": ">",
    ">": "<"
  };

  const op_baru = coeff < 0 ? balikan_op[op] : op;

  return {
    x: "x",
    dengan: op_baru,
    hasil: a / coeff
  };
}