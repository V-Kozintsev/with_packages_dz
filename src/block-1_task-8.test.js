import { multiplicationTable } from "./block-1_task-8";

describe("multiplicationTable", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("должен вывести в консоль таблицу умножения на 7", () => {
    multiplicationTable();
    for (let i = 1; i <= 9; i++) {
      expect(console.log).toHaveBeenCalledWith(`7 x ${i} = ${7 * i}`);
    }
  });
});
