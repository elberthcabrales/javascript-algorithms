const plusOne = function(digits) {
  let size = digits.length;
  if(digits[size - 1] === 9){
    if(size === 1){
      digits[0] = 1;
      digits.push(0);
      return digits;
    }else{
      while (size > 0){
        size--
        if(digits[size] != 9){
          digits[size] += 1;
          break;
        }
        if(size === 0 && digits != 9){
          digits[0] = 1
          digits.push(0)
        }
      }
      for(let i = size+1; i < digits.length; i++){
        digits[i] = 0
      }
    }
  }else{
    digits[size - 1] += 1;
  }

  return digits;
};

const plusOneOther = function(digits) {
  // if last number is <9 just add 1
  if(digits[digits.length - 1] !== 9){
    digits[digits.length - 1] += 1;
    return digits;
  }else{
    for(let i = digits.length - 1; i >= 0;i--){
      // if last number is 9 traverse in all elements until to find a number less than 9
      if(digits[i] < 9){
        digits[i] += 1
        return digits;
      }
      digits[i] = 0;
      if(i === 0){
        digits.unshift(1)
        return digits;
      }
    }
  }

};


const n = [4,9,9]
console.log(plusOneOther(n)) // 9999
