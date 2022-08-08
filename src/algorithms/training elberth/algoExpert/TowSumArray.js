var twoSum = function(nums, target) {
  // [2,7,11,15] when the index i 0
  const hash = {}
  hash[nums[0]] = 0
  for(let i = 1; i <  nums.length; i++) {
    const diff = target - nums[i]
    const val = hash[diff]
    if(val !== undefined){
      return [hash[diff], i]
    }
    hash[nums[i]] = i;
  }
};

var twoSumOther = function(nums, target) {

  const hash = {};

  hash[target - nums[0]] = 0

  for(let i = 1; i < nums.length; i++){
    if(hash[nums[i]] !== undefined){
      return [hash[nums[i]], i]
    }
    hash[target - nums[i]] = i;
  }
};

const arr = [3,2,4]
const target = 6
const result = twoSumOther(arr, target)
console.log(result)


