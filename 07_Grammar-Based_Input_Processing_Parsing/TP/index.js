function toNumberArray(number) {
  let result = [];

  if (typeof number === "string") {
    result = number
      .split(",")
      .map(item => Number(item.trim()))
      .filter(item => !isNaN(item));
  }

  else if (Array.isArray(number)) {
    result = number
      .map(item => Number(item))
      .filter(item => !isNaN(item));
  }

  return result;
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]