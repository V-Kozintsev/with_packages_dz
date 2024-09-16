export const isDate = (str) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(str);
};

// Функция для проверки, является ли строка адресом электронной почты
export const isEmail = (str) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(str);
};

// Функция для проверки, является ли строка номером телефона
export const isPhoneNumber = (str) => {
  const phonePattern = /^\+?\d{10,15}$/; // Для международных форматов
  return phonePattern.test(str);
};
