function twoSumOther(arr, target) {
  if (arr.length <= 1) return [];
  const dir = {}
  dir[arr[0]] = 0;

  for (let i = 1; i < arr.length; i++) {
    const diff = target - arr[i];
    if (dir[diff]) {
      return [dir[diff], i]
    }
    dir[arr[i]] = i
  }

  return [];
}

const arr = [3, 2, 4];
const target = 6;
const result = twoSumOther(arr, target);
console.log(result);
