var romanToInt = function(s) {
  const numbers = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "VI": 6,
    "VII": 7,
    "VIII": 8,
    "IX": 9,

    "X": 10,
    "XL": 40,
    "L": 50,
    "LX": 60,
    "LXX": 70,
    "LXXX": 80,
    "XC": 90,

    "C": 100,
    "CD": 400,
    "D": 500,
    "DC": 600,
    "DCC": 700,
    "DCCC": 800,
    "CM": 900,
    "M": 1000,
  };

  if(s.length === 1){
    return numbers[s]
  }
  let result = 0
  for(let i = 0; i < s.length; i++){
    if(numbers[s.slice(i,2+i)]){
      result += numbers[s.slice(i,2+i)]
      i = i + 1;
    }else{
      result += numbers[s[i]]
    }
  }

  return result;
};

console.log(romanToInt('III'))
