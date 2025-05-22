function fibo(num) {
  var a=1;b=0;temp=0;sum=0;
  while (a <= num) {
    temp = a;
    a = a + b;
    b = temp;
    if (a%2 == 0) {
      sum = sum + a;
    }
  }
  console.log(sum)
}
fibo(4000000)