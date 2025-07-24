// A pythagorean triplet is a set of three natural numbers a < b < c , for which, a^2+b^2=c^2.For example 3, 4 , 5. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product a*b*c.
//
function pythagorean_triplet() {
  var a, b, c, big, small;
  for (a = 1; a <1000; a++){
    for (b = 1; b <1000; b++) {
      c = Math.sqrt(a*a + b*b);
      if (a+b+c === 1000) {
        console.log(a);
        console.log(b);
        console.log(c);
        return a*b*c;
      }
    }
  }
}
console.log(pythagorean_triplet());
