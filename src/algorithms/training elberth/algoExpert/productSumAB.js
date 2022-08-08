function removeNb (n) {
  const arr =  [ ,...Array(n+1).keys() ];
  const size = arr.length;
  const result = []
  for(let i =1; i< size; i++){
    const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
    const a = (sum - i)/(i + 1);
    if((sum - a - i) === i * a && Number.isInteger(a) && a < n){
      result.push([i, a])
    }
  }

  return result;
}

removeNb(26), [[15,21], [21,15]]
