import { canCircleFitInSquare } from "./block-1_task-6";

describe("Тестирование функции canCircleFitInSquare", () => {
  it("должен вернуть true, когда круг помещается в квадрат", () => {
    const circleArea = Math.PI * Math.pow(1, 2); // Площадь круга радиусом 1
    const squareArea = Math.pow(2, 2); // Площадь квадрата со стороной 2
    expect(canCircleFitInSquare(circleArea, squareArea)).toBe(true);
  });

  it("должен вернуть false, когда круг не помещается в квадрат", () => {
    const circleArea = Math.PI * Math.pow(3, 2); // Площадь круга радиусом 3
    const squareArea = Math.pow(4, 2); // Площадь квадрата со стороной 4
    expect(canCircleFitInSquare(circleArea, squareArea)).toBe(false);
  });
});
