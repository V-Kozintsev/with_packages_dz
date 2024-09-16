import { calculateSumFrom50To100 } from "./block-1_task-7";

describe("calculateSumFrom50To100", () => {
  it("сумма чисел от 50 до 100", () => {
    expect(calculateSumFrom50To100()).toBe(3825);
  });
});
