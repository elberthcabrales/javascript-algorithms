// Implement a function that merges two sorted lists of m and n elements respectively,
// into another sorted list. Name it mergeTowSortedArrays(arr1, arr2).

function mergeTowSortedArrays(arr1, arr2) {
 let idx1 = 0;
 let idx2 = 0;
 const result = new Array(arr1.length + arr2.length);

 for(let i = 0; i < result.length; i++){
   if(arr1[idx1] < arr2[idx2]){
     result[i] = arr1[idx1];
     idx1++;
   }else{
     result[i] = arr2[idx2];
     idx2++;
   }
 }

 return result;
}

const arr1 = [1, 3, 4, 5]
const arr2 = [2, 6, 7, 8]

const result = mergeTowSortedArrays(arr1, arr2)

console.assert(
  JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]),
  `${result} should be [1, 2, 3, 4, 5, 6, 7, 8]`,
);
console.log(result)
