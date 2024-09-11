import { sumNumber, arrayNumber } from "./block-2_task-11";

describe("arrayNumber", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Выведите в консоль сумму всех элементов массива.", () => {
    const result = sumNumber(arrayNumber);
    expect(result.sumResult).toBe(55);
    expect(console.log).toHaveBeenCalledWith(55);
  });
  it(".Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив)", () => {
    const result = sumNumber(arrayNumber);
    expect(result.newArrayNumber).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
