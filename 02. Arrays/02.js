function solution(A) {
  let result = 0;

  for (let num of A) {
    result = result ^ num;
  }

  return result;
}
