function solution(X, Y, D) {
  if ((X === 0 && Y === 0) || D === 0 || Y - X < 0) {
    return 0;
  }

  let distance = Y - X;
  jumps = Math.ceil(distance / D);
  return jumps;
}
