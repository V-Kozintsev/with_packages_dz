import { arithmeticMean } from "./block-1_task-9";

describe("arithmeticMean", () => {
  it("Должен вернуть среднее арифметическое нечётных чисел", () => {
    const result = arithmeticMean(5);
    expect(result).toBe(
      `Среднее арифметическое нечётных чисел от 1 до 5 равно: 3`,
    );
  });

  it("Должен вернуть сообщение о том, что нет нечётных чисел", () => {
    const result = arithmeticMean(0);
    expect(result).toBe("Нет нечётных чисел.");
  });

  it("Должен вернуть сообщение о том, что нет нечётных чисел для отрицательного значения", () => {
    const result = arithmeticMean(-3);
    expect(result).toBe("Нет нечётных чисел.");
  });
});
