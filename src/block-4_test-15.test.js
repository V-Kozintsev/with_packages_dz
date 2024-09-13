import { getDayOfWeek, minutesSinceStartOfDay } from "./block-4_test-15.js";

describe("Тест функции getDayOfWeek", () => {
  test("Проверка даты 25.12.2022", () => {
    expect(getDayOfWeek("25.12.2022")).toBe("Вс");
  });
  test("Проверка даты 01.01.2022", () => {
    expect(getDayOfWeek("01.01.2022")).toBe("Сб");
  });
});

describe("Тест функции minutesSinceStartOfDay", () => {
  test("Проверка, что функция возвращает неотрицательное значение", () => {
    expect(minutesSinceStartOfDay()).toBeGreaterThanOrEqual(0);
  });
});
