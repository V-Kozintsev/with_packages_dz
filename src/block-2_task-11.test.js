import { sumNumber, arrayNumber } from "./block-2_task-11";

describe("arrayNumber", () => {
  let result;

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
    result = sumNumber(arrayNumber); // Получаем результат один раз
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Выведите в консоль сумму всех элементов массива.", () => {
    expect(result.sumResult).toBe(55);
    expect(console.log).toHaveBeenCalledWith(55);
  });

  it("Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.", () => {
    expect(result.newArrayNumber).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  it("Найдите и выведите в консоль наибольший элемент исходного массива", () => {
    expect(result.maxNum).toBe(10);
    expect(console.log).toHaveBeenCalledWith(10);
  });
  it("Найдите и выведите в консоль наименьший элемент исходного массива", () => {
    expect(result.minNum).toBe(1);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
