import { isWord, pow } from "./block-2_task-13";

describe("isWord and pow", () => {
  it("строка состоит из одного слова", () => {
    expect(isWord("Hello")).toBe(true);
  });

  it("строка состоит из нескольких слов", () => {
    expect(isWord("Hello World")).toBe(false);
  });

  it("строка состоит только из пробелов", () => {
    expect(isWord("   ")).toBe(false);
  });

  test("2 в степени 3 равно 8", () => {
    expect(pow(2, 3)).toBe(8);
  });

  test("5 в степени 0 равно 1", () => {
    expect(pow(5, 0)).toBe(1);
  });
});
