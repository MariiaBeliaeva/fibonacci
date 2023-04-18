const { fibonacciIter, fibonacciRec } = require("./index");

describe("Calculation of Fibonacci sequence  by iteration", () => {
  test("Function should return n-th number in Fibonacci sequence", () => {
    expect(fibonacciIter(3)).toBe(2);
    expect(fibonacciIter(5)).toBe(5);
    expect(fibonacciIter(7)).toBe(13);
  });
});

describe("Calculation of Fibonacci sequence  by recursion", () => {
  test("Function should return n-th number in Fibonacci sequence", () => {
    expect(fibonacciRec(2)).toBe(1);
    expect(fibonacciRec(4)).toBe(3);
    expect(fibonacciRec(6)).toBe(8);
  });
});
