function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b); // sort numbers to do binary search
  const result = [];
  const size = array.length;

  for(let i = 0; i < size; i++) {
    const current_number = array[i]; //get cn to use as pivot
    let left = 1 + i; // left start at next position of cn
    let right = size - 1; // right start from last row
    while (left < right) { //condition is left dont rebase right
      const sum = current_number + array[left] + array[right]; // cn + left + right
      // binary search
      /***
       * left y right
       * son los que van haciendo la comparacion con el ellos mismos y su incremento depende
       * de si se encontro la suma mayor que target o menor
       */
      if(sum === targetSum){
        result.push([current_number, array[left], array[right]])
        left++;
        right--;
      } else if(sum > targetSum){
        right--;
      } else if(sum < targetSum) {
        left++;
      }
    }
  }
  return result;
}
const arr = [12, 3, 1, 2, -6, 5, -8, 6];
threeNumberSum(arr, 0)
