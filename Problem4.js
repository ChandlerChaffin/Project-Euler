function isPalindrome(n) 
{
if (n == Number(String(n).split('').reverse().join('')))
  return true;
else 
  return false;
}
function LargestPalindromeProduct() 
{
  const answer_arr = [];
  b = 999;
  for (a = 999;a > 99;--a) 
  {
    while(b > 99)
    {
      let result = a*b;
      if (isPalindrome(result)) 
      {
      answer_arr.push(result);
      break;
      }
      else 
      {
      --b;
      if (b == 100) 
      {
        b = 999
        break;
      }
      }
    }
    if(a > 99) 
    {
      continue
    }
  }
  console.log(answer_arr.sort(function(a,b){return b - a}))
}
LargestPalindromeProduct();


