import { isWord } from "./block-2_task-13";

describe("isWord", () => {
  it("строка состоит из одного слова", () => {
    expect(isWord("Hello")).toBe(true);
  });

  it("строка состоит из нескольких слов", () => {
    expect(isWord("Hello World")).toBe(false);
  });

  it("строка состоит только из пробелов", () => {
    expect(isWord("   ")).toBe(false);
  });
});
