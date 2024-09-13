export function isRightTriangle(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y);
  return (
    Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)
  );
}

// Функция для вычисления длины окружности и площади круга
export function circleCalculations(R) {
  const circumference = 2 * Math.PI * R;
  const area = Math.PI * Math.pow(R, 2);
  return { circumference, area };
}

// Функция для нахождения корней квадратного уравнения
export function quadraticRoots(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { root1, root2 };
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return { root };
  } else {
    return null;
  }
}
