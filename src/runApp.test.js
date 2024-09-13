import { runApp } from "./runApp";

describe("runApp", () => {
  let el;
  let input;
  let button;
  beforeEach(() => {
    el = document.createElement("div");
    runApp(el);
    input = el.querySelector("input");
    button = el.querySelector("button");
  });

  const hasButton = () => Boolean(button);
  const hasInput = () => Boolean(input);

  const getInputValue = () => input.value;
  const isButtonVisible = () => !button.hidden;

  const setInputValue = (val) => {
    input.value = val;
    input.dispatchEvent(new Event("input"));
  };

  const clickButton = () => button.click();

  const getParagraphs = () =>
    [...el.querySelectorAll("p")].map((el) => el.innerHTML);

  it("makes initial markup", () => {
    expect(hasButton()).toBe(true);
    expect(hasInput()).toBe(true);

    expect(getInputValue()).toBe("");
    expect(isButtonVisible()).toBe(false);
  });

  it("makes button visible depends on input value", () => {
    // если длинна больше 1 то кнопка видна
    setInputValue("1");
    expect(isButtonVisible()).toBe(true);

    // если длинна меньше 1 то кнопка скрыта
    setInputValue("");
    expect(isButtonVisible()).toBe(false);
  });

  it("adds new paragraph on button click", () => {
    expect(getParagraphs()).toEqual([]);

    setInputValue("123");
    clickButton();

    expect(getParagraphs()).toEqual(["123"]);
    expect(getInputValue()).toBe("");
    expect(isButtonVisible()).toBe(false);
  });

  it("does not make more than 5 paragraphs", () => {
    const p5 = ["11", "22", "33", "44", "55"];
    p5.forEach((el) => {
      setInputValue(el);
      clickButton();
    });
    expect(getParagraphs()).toEqual(p5.reverse());

    setInputValue("66");
    clickButton();
    expect(getParagraphs()).toEqual(["66", "55", "44", "33", "22"]);
  });
});
