function countChar(str, char){
  if(str.length ===0) return 0 // fixme: usar en todas las recursiones el mismo tipo de respuesta
  if(str[0] === char){
    return 1 + countChar(str.slice(1, str.length), char)
  }else {
    return countChar(str.slice(1, str.length), char)
  }
}

const str = "abacada"
const char = 'a'
//expected 4
console.log(countChar(str, char) === 4)
