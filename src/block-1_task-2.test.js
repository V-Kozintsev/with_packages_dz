import { totalCharacterCount } from "./block-1_task-2";

describe("Тестирование функции подсчета символов", () => {
  it("Проверка общего количества символов в двух строках", () => {
    expect(totalCharacterCount("hello", "world")).toBe(10);
    expect(totalCharacterCount("", "world")).toBe(5);
    expect(totalCharacterCount("abc", "")).toBe(3);
    expect(totalCharacterCount("", "")).toBe(0);
  });
});
