function solution(A) {
  abs_arr = [];
  for (num of A) {
    abs_arr.push(Math.abs(num));
  }
  st = new Set(abs_arr);
  len = st.size;

  return len;
}
