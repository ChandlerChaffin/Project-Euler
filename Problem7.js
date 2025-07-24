// By listing the first 6 prime numbers 2 3 5 7 11 13  we can see that the 6th  prime is 13. What is the 10001st number?
//
function is_prime(num) {
  if (num < 2) {return false;} 
  for (let i = 2;i <= Math.floor(Math.sqrt(num));i++) {
    if (num % i === 0) {return false;} 
  }
  return true;
  }
function nth_prime(index) {
  let prime_count = 1;
  let prime  = 3;
  let count_done = false;
  while (!count_done) {
    if (is_prime(prime)) {
      prime_count = prime_count + 1;
      if (prime_count === index) {
        count_done = true;
        return prime;
      }
      else {prime += 2;}
    }
    else {prime += 2;}
  }
}
console.log(nth_prime(10001));
