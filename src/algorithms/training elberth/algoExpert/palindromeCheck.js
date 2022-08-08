function isPalindrome(string) {
  // Write your code here.
  const arr = string.split('');
  const size = arr.length;
  let j = size - 1;
  for(let i = 0; i < Math.floor(size / 2); i++){
    if(arr[i] !== arr[j]) return false;
    --j;
  }
  return true;
}

isPalindrome('abcdcba')
