function solution(N) {
  let minPerimeter = Infinity;

  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      const sideA = i;
      const sideB = N / i;
      const perimeter = 2 * (sideA + sideB);

      minPerimeter = Math.min(minPerimeter, perimeter);
    }
  }

  return minPerimeter;
}

function solution(N) {
  let A = 1;
  let B = 1;

  while (A * B !== N) {
    A++;
    B = N / A;
  }

  const perimeter = 2 * (A + B);
  return perimeter;
}
