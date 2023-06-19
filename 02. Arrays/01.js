function solution(A, K) {
  let length = A.length;
  if (length === 0 || K === 0) {
    return A;
  }

  K = K % length;

  let part_to_move = A.slice(length - K);
  let remaining_part = A.slice(0, length - K);

  let shifted_array = part_to_move.concat(remaining_part);
  return shifted_array;
}
