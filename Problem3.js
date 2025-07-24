// What is the largest prime factor of the number 600851475143?
//
function AllPrimeFactors(n)
{
 // Dividing n by 2 print number of 2s each time
  while (n%2 == 0) 
  {
    console.log(2);
    n = Math.floor(n / 2);
  }
  // primes are only odd after this point increment by 2 
  //sqrt optimization
  for(let i = 3;i<= Math.floor(Math.sqrt(n));i = i + 2) 
  {
    while (n%i == 0) 
    {
      console.log(i)
      n = Math.floor(n/i);
    }
  }
  if (n > 2)
    console.log(n);
}
let n = 600851475143;
AllPrimeFactors(n);
