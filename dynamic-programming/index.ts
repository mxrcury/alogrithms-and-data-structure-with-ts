const fib = (num: number): number => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(8));
