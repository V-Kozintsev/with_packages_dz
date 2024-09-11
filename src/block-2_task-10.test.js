import { userPrompt, user } from "./block-2_task-10";

describe("userPrompt", () => {
  let admin;
  beforeEach(() => {
    window.prompt = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user", () => {
    window.prompt.mockReturnValue("25");
    userPrompt();
    expect(user.age).toBe(25);
  });
  it("Создать копию объекта user с именем admin.Добавить новому объекту поле role со значением admin", () => {
    const result = userPrompt();
    admin = result.admin; // Получаем admin из результата функции
    expect(admin.role).toBe("admin");
  });
});
