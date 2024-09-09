import { getMonthName } from "./block-1_task-5";

describe("getMonthName", () => {
  it("должен возвращать январь для 1", () => {
    expect(getMonthName(1)).toBe("январь");
  });

  it("должен возвращать март для 3", () => {
    expect(getMonthName(3)).toBe("март");
  });

  it("должен возвращать декабрь для 12", () => {
    expect(getMonthName(12)).toBe("декабрь");
  });

  it("должен выбросить ошибку для числа < 1", () => {
    expect(() => getMonthName(0)).toThrow("Введите число от 1 до 12");
  });

  it("должен обрабатывать ввод через prompt", () => {
    // Замокируем prompt в этом тесте
    global.prompt = jest.fn(() => "3"); // Всегда возвращает число 3

    const monthNumber = parseInt(prompt(), 10);
    expect(getMonthName(monthNumber)).toBe("март");

    // Сбрасываем моки после использования
    jest.resetAllMocks();
  });
});
