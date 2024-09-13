export function getDayOfWeek(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  const date = new Date(year, month - 1, day); // Необходимо вычесть 1 из месяца
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return daysOfWeek[date.getDay()];
}

export function minutesSinceStartOfDay() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - startOfDay; // Разница в миллисекундах
  return Math.floor(diff / 60000); // Переводим в минуты
}
