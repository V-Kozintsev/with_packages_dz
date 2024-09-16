// quadratic.test.js
import { quadraticRoots } from "./block-4_task-16.js";

test("проверка корней квадратного уравнения", () => {
  expect(quadraticRoots(1, -3, 2)).toEqual([2, 1]);
  expect(quadraticRoots(1, 2, 1)).toEqual([-1]);
  expect(quadraticRoots(1, 0, 1)).toBe(null);
});
// circle.test.js
import { circleLength, circleArea } from "./block-4_task-16";

test("проверка длины окружности и площади круга", () => {
  const R = 5;
  expect(circleLength(R)).toBeCloseTo(31.42, 2);
  expect(circleArea(R)).toBeCloseTo(78.54, 2);
});

import { isRightTriangle } from "./block-4_task-16";

test("проверка прямоугольного треугольника", () => {
  expect(isRightTriangle(3, 4, 5)).toBe(true);
  expect(isRightTriangle(5, 12, 13)).toBe(true);
  expect(isRightTriangle(1, 2, 3)).toBe(false);
});
