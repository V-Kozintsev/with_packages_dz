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
    expect(result).toBe(55);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});
