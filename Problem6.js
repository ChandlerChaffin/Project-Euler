let squared_sum = 0;
let sum_of_squares = 0;
for (let i = 1; i <= 100; i++) {
  sum_of_squares += i * i;
  squared_sum += i;
}
console.log(squared_sum * squared_sum - sum_of_squares);
