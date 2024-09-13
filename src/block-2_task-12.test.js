import { diff } from "./block-2_task-12";

describe("diff", () => {
  it("возвращает разницу между 10 и 7", () => {
    expect(diff(10, 7)).toBe(3);
  });
  it("возвращает разницу между 5 и 9", () => {
    expect(diff(5, 9)).toBe(4);
  });
});
