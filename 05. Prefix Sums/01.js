function solution(A) {
  let pairs = 0;
  let eastCars = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastCars++;
    } else {
      pairs += eastCars;
    }

    if (pairs > 1000000000) {
      return -1;
    }
  }

  return pairs;
}
