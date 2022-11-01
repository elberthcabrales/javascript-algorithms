/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let insertIndex = 1;
  for(let i = 1; i < nums.length; i++){
    if(nums[i - 1] != nums[i]){
      nums[insertIndex] = nums[i];
      insertIndex++;
      console.log(JSON.stringify(nums, null, null))
    }
  }
  return insertIndex;
};
/**
 * [0,0,1,1,1,2,2,3,3,4]
 *
 * [0,1,1,1,1,2,2,3,3,4]
 * [0,1,"2",1,1,2,2,3,3,4]
 * [0,1,2,"3",1,2,2,3,3,4]
 * [0,1,2,3,"4",2,2,3,3,4]
 *
 * [0,1,2,3,4,_,_,_,_,_]
 */
const nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums)) // 5
