let prime_sum = 2;
function is_prime(num) {
  if (num < 2) {return false;} 
  for (let i = 2;i <= Math.floor(Math.sqrt(num));i++) {
    if (num % i === 0) {return false;} 
  }
  return true;
}
function subprime_sum(num) {
  for (let i = 3;i<=num;i +=2) {
    if (is_prime(i)) {prime_sum = prime_sum + i;}
  }
  return prime_sum;
}
console.log(subprime_sum(2000000));
