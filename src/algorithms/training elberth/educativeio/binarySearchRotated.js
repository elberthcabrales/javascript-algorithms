let binarySearchRotated = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if(start > end) return - 1;

  while (start <= end){
    const mid = start + Math.floor((end - start) / 2)

    if(nums[mid] === target) return mid;

    // start to mid is sorted
    if(nums[start] <= nums[mid]){
      if(nums[start] <= target && target < nums[mid]){
        end = mid - 1
      }else {
        start = mid + 1
      }
    }
    // mid to end is sorted
    else {
      if(nums[mid] < target && target <= nums[end]){
        start = mid + 1
      }else {
        end = mid - 1
      }
    }
  }

  return -1;
};

let targetList = [3,6,3,6];
let numsList = [
  [6, 7, 1, 2, 3, 4, 5],
  [6, 7, 1, 2, 3, 4, 5],
  [4, 5, 6, 1, 2, 3],
  [4, 5, 6, 1, 2, 3]
];

for(let i =0; i< targetList.length; i++){
  console.log((i + 1) + ". Rotated array: " + JSON.stringify(numsList[i]));
  console.log("   target " + targetList[i] +  " found at index " + binarySearchRotated(numsList[i], targetList[i]));
  console.log("----------------------------------------------------------------------------------------------------\n");
}
