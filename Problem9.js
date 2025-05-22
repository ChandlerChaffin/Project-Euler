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