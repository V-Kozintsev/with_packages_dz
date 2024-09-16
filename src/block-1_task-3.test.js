import { sumOfDigits } from "./block-1_task-3";

describe("сумма цифр 123 равна 6", () => {
  it("Проверка общего количества", () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(999)).toBe(27);
    expect(() => sumOfDigits(1000)).toThrow("Число должно быть трёхзначным.");
  });
});
