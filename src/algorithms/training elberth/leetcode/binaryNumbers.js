/**
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */
var addBinary = function(a, b) {
  //[0, 1, 10, 11, 100, 101, 110, 111]
  //
  return (Number(`0b${a}`) + Number(`0b${b}`)).toString(2);;
};

function addBinary2(a, b){
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  let carry = 0;
  let output = "";

  while (a[aIdx] || b[bIdx]) {
    let sum = carry;
    if (a[aIdx]) sum += +a[aIdx--]; // + sign makes it a number
    if (b[bIdx]) sum += +b[bIdx--]; // -- decrements bIdx after the operation
    let val = sum % 2;
    output = val + output;
    carry = Math.floor(sum/2);
  }

  if (carry) return carry + output;
  return output;
};

console.log(addBinary2('1010', '1011')) //10101
