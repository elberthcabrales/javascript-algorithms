/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let idx = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] != val){
      nums[idx] = nums[i]
      idx++
    }
  }
  return idx;
};

let arr = [0,1,2,2,3,0,4,2]
const val = 2
console.log(removeElement(arr, val)) //
console.log(JSON.stringify(arr, null))
/**
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 */
