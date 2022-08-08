const moveZerosToLeft = (nums) => {
  if(nums.length === 0 || nums.length === 1) return nums;
  const size =  nums.length - 1;
  let idxRight = size;
  let idxLeft = 0;
  for(let i = size; i >= 0; i--){
    if(nums[i] != 0) {
      nums[idxRight] = nums[i];
      idxRight--;
    }else{
      idxLeft++;
    }
  }

  while (idxLeft > 0){
    nums[idxLeft - 1] = 0;
    idxLeft--;
  }
  return nums;
}

var nums = [1, 10, 20, 0, 59, 63, 0, 88, 0]

console.log(moveZerosToLeft(nums) === [0, 0, 0, 1, 10, 20, 59, 63, 88])

