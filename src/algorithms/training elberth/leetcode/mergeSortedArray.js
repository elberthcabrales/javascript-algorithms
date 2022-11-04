const merge = function(nums1, m, nums2, n) {
  let oneIdx = m -1;
  let twoIdx = n-1;
  let i = m + n - 1;
  while (twoIdx >= 0) {
    if (nums1[oneIdx] > nums2[twoIdx]) {
      nums1[i] =  nums1[oneIdx];
      oneIdx--;
    } else {
      nums1[i] = nums2[twoIdx];
      twoIdx--;
    }
    i--;
  }
  return nums1
};
/**
 * the first array will be edited because if n = 0 return
 * oneIdx:0 [4,0,0,0,0,0] twoIdx: 4 [1,2,3,5,6]
 * oneIdx:0 [4,0,0,0,0,6] twoIdx: 3 [1,2,3,5,6]
 * oneIdx:0 [4,0,0,0,5,6] twoIdx: 2 [1,2,3,5,6]
 *
 * case nums1[oneIdx] > nums2[twoIdx]
 *  nums1[i] =  nums1[oneIdx];
 * oneIdx:-1 [4,0,0,4,5,6] twoIdx: 2 [1,2,3,5,6]
 *
 * oneIdx:-1 [4,0,3,4,5,6] twoIdx: 1 [1,2,3,5,6]
 * oneIdx:-1 [4,2,3,4,5,6] twoIdx: 0 [1,2,3,5,6]
 * oneIdx:-1 [1,2,3,4,5,6] twoIdx: 0 [1,2,3,5,6]
 */
merge([4,0,0,0,0,0], 1, [1,2,3,5,6], 5) //[1,2,3,4,5,6]
merge([0,0,3,0,0,0,0,0,0], 3, [-1,1,1,1,2,3], 6) //[-1,0,0,1,1,1,2,3,3]
merge([4,5,6,0,0,0],3, [1,2,3], 3) // [1,2,3,4,5,6]
merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([0],0, [1], 1) //[1]
merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([4,5,6,0,0,0], 3, [1,2,3], 3) //[1,2,3,4,5,6]

