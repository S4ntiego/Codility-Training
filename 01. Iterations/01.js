function solution(N) {
  let binary = N.toString(2);
  let max = 0;
  let current = 0;
  let counting = false;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (counting && current > max) {
        max = current;
      }
      counting = true;
      current = 0;
    } else {
      current += 1;
    }
  }

  return max;
}
