/**
 * constrains
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 */
var longestCommonPrefix_ = function(strs) {
  let result  = '';
  if(!Array.isArray(strs) || strs.length === 0) return result

  const [baseStr] = strs;
  for(let i = 0;i < baseStr.length; i++){
    const currentChar = baseStr[i];
    let isEqual = true;
    for(let j = 1; j < strs.length; j++){
      const str = strs[j];
      if(str.length < i || str[i] !== currentChar){
        isEqual = false;
        break;
      }
    }
    if(isEqual){
      result += currentChar;
    }else {
      break;
    }
  }

  return result;
};
var longestCommonPrefix = function(strs) {
  let result  = '';
  if(!Array.isArray(strs) || strs.length === 0) return result

  const [baseStr] = strs;
  for(let i = 0;i < baseStr.length; i++){

  }

  return result;
};

let strs = ["flower","flow","flight"] // fl
console.log(longestCommonPrefix(strs))
strs = ["dog","racecar","car"] //  ""
console.log(longestCommonPrefix(strs))
