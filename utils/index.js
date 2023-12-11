export function definePrime(a) {
  let isPrime, res;
  isPrime =true;
    
  if ( a >1 && a <=1000){
    for (let i = 2 ; i < a ; i++){
      if (a % i ===0){
        isPrime = false;
      }
    }
    res=isPrime ? `${a} -простое` : `${a} -составное`
  } else if (a > 1000 || a< 1){
    res = "данные неверны"
  }
  return res;
}