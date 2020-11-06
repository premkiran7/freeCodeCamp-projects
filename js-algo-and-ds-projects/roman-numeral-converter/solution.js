// no single roman numeral letter should get repeated more
// than thrice, thus added prebuilt numerals for 4, 9 etc
const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertToRoman(num) {
  let convertedNum = "";
  for (let [constant, romanNumeral] of Object.entries(
    romanNumerals
  ).reverse()) {
    while (num >= constant) {
      convertedNum += romanNumeral;
      num = num - constant;
    }
  }
  return convertedNum;
}

console.log(convertToRoman(2));
