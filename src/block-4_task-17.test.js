import { isDate, isEmail, isPhoneNumber } from "./block-4_task-17.js";

describe("Validators", () => {
  test("isDate: проверяет правильность даты", () => {
    expect(isDate("2023-10-31")).toBe(true);
    expect(isDate("31-10-2023")).toBe(false);
  });

  test("isEmail: проверяет правильность адреса электронной почты", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user.name+tag@example.co.uk")).toBe(true);
  });

  test("isPhoneNumber: проверяет правильность номера телефона", () => {
    expect(isPhoneNumber("+1234567890")).toBe(true);
    expect(isPhoneNumber("1234567890")).toBe(true);
  });
});
