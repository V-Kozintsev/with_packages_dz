export function getMonthName(monthNumber) {
  const months = [
    "",
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Введите число от 1 до 12");
  }

  return months[monthNumber];
}
