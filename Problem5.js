function smallest_multiple() {
  let are_done = false;
  let num = 20;
  while (!are_done) {
    for (let i = 1; i <= 20; i++) {
      if (num % i !== 0) {
        num++
        break;
      }
      else {
        if (i === 20) {
          are_done = true;
          return num;
        }
      }
    }
  }
}
console.log(smallest_multiple());