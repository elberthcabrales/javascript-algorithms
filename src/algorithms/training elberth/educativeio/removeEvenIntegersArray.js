function checkRemoveEven(arr){
  const result = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2!=0){
      result.push(arr[i])
    }
  }

  return result
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(checkRemoveEven(arr)) //                                    1 3 5 7 9

