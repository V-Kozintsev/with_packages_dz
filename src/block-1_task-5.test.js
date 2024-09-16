import { getMonthNameFromPrompt } from "./block-1_task-5";

describe("getMonthNameFromPrompt", () => {
  beforeEach(() => {
    // Замена console.log для проверки вызовов
    console.log = jest.fn();
    // Замена prompt для передачи тестового значения
    window.prompt = jest.fn();
    console.error = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('должен вернуть "январь" для ввода 1', () => {
    window.prompt.mockReturnValue("1"); // Имитация ввода пользователя
    getMonthNameFromPrompt();
    expect(console.log).toHaveBeenCalledWith("Месяц: январь");
  });

  it('должен вернуть "февраль" для ввода 2', () => {
    window.prompt.mockReturnValue("2");
    getMonthNameFromPrompt();
    expect(console.log).toHaveBeenCalledWith("Месяц: февраль");
  });

  it("должен вернуть ошибку для ввода 13", () => {
    window.prompt.mockReturnValue("13");
    getMonthNameFromPrompt();
    expect(console.error).toHaveBeenCalledWith("Введите число от 1 до 12");
  });

  it("должен вернуть ошибку для ввода 0", () => {
    window.prompt.mockReturnValue("0");
    getMonthNameFromPrompt();
    expect(console.error).toHaveBeenCalledWith("Введите число от 1 до 12");
  });
});
