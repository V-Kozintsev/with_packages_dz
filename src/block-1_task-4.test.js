import { maxOfTwo } from "./block-1_task-4";

describe("Функция какое число больше", () => {
  it("должен вернуть 5, если a = 5, b = 3", () => {
    expect(maxOfTwo(5, 3)).toBe(5);
  });
});
