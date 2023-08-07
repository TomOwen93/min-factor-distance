export function minDistance(n: number): number | undefined {
  if (n > 1) {
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
  } else {
    return undefined;
  }
}
