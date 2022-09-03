const isPalindrome = function (x) {
  const input = x.toString();
  let size = input.length - 1;
  for (let e = 0; e < size; e++) {
    if (input[e] != input[size]) {
      return false;
    }
    size--;
  }
  return true;
};

const x = 121;
isPalindrome(x);
