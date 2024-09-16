export function getMonthNameFromPrompt() {
  const monthNumber = parseInt(prompt("Введите номер месяца от 1 до 12:"));

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
    console.error("Введите число от 1 до 12");
    return;
  }

  console.log(`Месяц: ${months[monthNumber]}`);
}
