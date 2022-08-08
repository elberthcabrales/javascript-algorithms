/**
 * es un numero que no puede ser dividio más que por el mismo y 1
 * @param num
 * @returns {boolean}
 */
const isPrime = num => {
  // i es donde empiezan los primos y el mismo es el parametro num
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
isPrime(7)
