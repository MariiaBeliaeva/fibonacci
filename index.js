// Итерационный подсчет n-го числа Фибоначчи
const fibonacciIter = (n) => {
  let firstNumber = 0;
  let secondNumber = 1;
  let nthNumber;
  for (let i = 2; i <= n; i++) {
    nthNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nthNumber;
  }
  return nthNumber;
};
console.log(fibonacciIter(7));

// Рекурсивное вычисление n-го числа Фибоначчи
const fibonacciRec = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
  }
};

console.log(fibonacciRec(6));

module.exports = { fibonacciIter, fibonacciRec };
