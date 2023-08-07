export function minDistance(n: number): number {
  let result = 0;

  const factorArray = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? factorArray.push(i) : "";
  }

  let resArray = [];
  let min = n;
  factorArray.map((num, index, array) =>
    array[index + 1] - num < min ? (min = array[index + 1] - num) : ""
  );
  return min;
}
