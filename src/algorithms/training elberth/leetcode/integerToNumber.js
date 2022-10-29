/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, 2 is written as II in Roman numeral, just two one's added together.
 * 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written as IV.
 * Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given an integer, convert it to a roman numeral.
 */
const intToRoman = function(num) {
  const numbers = {
    1:"I",
    4: "IV",
    5:"V",
    6:"VI",
    7:"VII",
    8:"VIII",
    9: "IX",

    10: "X",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",

    100: "C",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
  }
  let result = ''
  const m = Math.floor(num/1000);
  if(m > 0){
    result += numbers[1000].repeat(m)
  }
  const c = Math.floor((num%1000)/100) * 100
  if(c >= 100){
    if(c > 300){
      result += numbers[c]
    }else {
      result += numbers[100].repeat(c/100)
    }
  }
  const d = Math.floor((num%100)/10) * 10
  if(d >= 10){
    if(d > 30){
      result += numbers[d]
    }else {
      result += numbers[10].repeat(d/10)
    }
  }
  const u = num%10
  if(u > 0){
    if(u > 3){
      result += numbers[u]
    } else{
      result += numbers[1].repeat(u)
    }
  }
  return result;
};
let num = 60
console.log(intToRoman(num)) // "LX"
num = 58
console.log(intToRoman(num)) // "LVIII"
num = 1994
console.log(intToRoman(num)) // "MCMXCIV"
num = 3
console.log(intToRoman(num)) // "III"


