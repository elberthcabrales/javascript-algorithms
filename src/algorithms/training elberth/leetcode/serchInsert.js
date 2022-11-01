/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */
const searchInsert = function(nums, target) {
  const result = binarySearchRecursive(nums, target, 0, nums.length - 1, 0);

  return result;
};

function binarySearchRecursive(nums, target, low, high){
  const mid = Math.floor((low+high)/2)
  if(low > high) return low
  if(nums[mid] === target){
    return mid;
  }else if(nums[mid] > target){
    return binarySearchRecursive(nums, target, low,mid - 1)
  }else{
    return binarySearchRecursive(nums, target, mid + 1, high)
  }
}
let nums = [1,3,5,6]; let target = 7; // 4
console.log(searchInsert(nums, target))
/**
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */
