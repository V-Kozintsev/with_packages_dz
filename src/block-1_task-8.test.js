import { multiplicationTable } from "./block-1_task-8";

describe("multiplicationTable", () => {
  it("Должен вывести в консоль таблицу умножения на 7", () => {
    // Создаем шпиона для console.log
    const consoleSpy = jest.spyOn(console, "log");

    // Вызываем функцию
    multiplicationTable();

    // Проверяем, что console.log был вызван 9 раз
    expect(consoleSpy).toHaveBeenCalledTimes(9);

    // Проверяем, что строка, содержащая таблицу умножения, была выведена
    for (let i = 1; i <= 9; i++) {
      expect(consoleSpy).toHaveBeenCalledWith(`7 x ${i} = ${7 * i}`);
    }

    // Восстанавливаем оригинальный console.log
    consoleSpy.mockRestore();
  });
});
