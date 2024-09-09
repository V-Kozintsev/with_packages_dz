import { sumNumber } from "./block-1_task-7";

describe("sumNumber", () => {
  it("сумма чисел от 50 до 100", () => {
    expect(sumNumber()).toBe(3825);
  });
});
