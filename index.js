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
const fibonacciRec = () => {};
