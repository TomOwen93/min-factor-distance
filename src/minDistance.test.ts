import { minDistance } from "./minDistance";

test("minDistance finds the smallest difference between two factors of a number", () => {
  expect(minDistance(13013)).toBe(2);
  expect(minDistance(8)).toBe(1);
  expect(minDistance(25)).toBe(4);
  expect(minDistance(218683)).toBe(198);
});
