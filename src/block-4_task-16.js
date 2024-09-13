export function isRightTriangle(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y); // Сортируем стороны
  return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2; // Проверка по теореме Пифагора
}

export function circleLength(R) {
  return 2 * Math.PI * R; // Формула длины окружности
}

export function circleArea(R) {
  return Math.PI * R ** 2; // Формула площади круга
}

export function quadraticRoots(a, b, c) {
  const d = b * b - 4 * a * c; // Дискриминант
  if (d < 0) {
    return null; // Нет вещественных корней
  } else if (d === 0) {
    const root = -b / (2 * a);
    return [root]; // Один корень
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    return [root1, root2]; // Два корня
  }
}
