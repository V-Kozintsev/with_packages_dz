export function canCircleFitInSquare(circleArea, squareArea) {
  // Находим радиус круга
  const radius = Math.sqrt(circleArea / Math.PI);
  // Находим длину стороны квадрата
  const squareSide = Math.sqrt(squareArea);
  // Проверяем, помещается ли круг в квадрат
  return radius * 2 <= squareSide;
}
