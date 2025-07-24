count = 0
for  (let i = 0; i < 1000; i++) {
  if (!(i%3) || !(i%5)) {
    count = count + i;
  }
}
console.log(count);
// Find the Sum of all multiples of  3 or 5 below 1000
//
