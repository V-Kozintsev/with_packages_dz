import {
  isRightTriangle,
  circleCalculations,
  quadraticRoots,
} from "./block-4_task-16.js";

// Пример 1: Проверка, является ли треугольник прямоугольным
const a = prompt("Введите сторону a:");
const b = prompt("Введите сторону b:");
const c = prompt("Введите сторону c:");
if (isRightTriangle(Number(a), Number(b), Number(c))) {
  console.log("Треугольник является прямоугольным.");
} else {
  console.log("Треугольник не является прямоугольным.");
}

// Пример 2: Вычисление длины окружности и площади круга
const R = prompt("Введите радиус R:");
const { circumference, area } = circleCalculations(Number(R));
console.log(`Длина окружности: ${circumference}`);
console.log(`Площадь круга: ${area}`);

// Пример 3: Нахождение корней квадратного уравнения
const coeffA = prompt("Введите коэффициент a:");
const coeffB = prompt("Введите коэффициент b:");
const coeffC = prompt("Введите коэффициент c:");
const roots = quadraticRoots(Number(coeffA), Number(coeffB), Number(coeffC));
if (roots) {
  if (roots.root1 && roots.root2) {
    console.log(`Корни уравнения: ${roots.root1} и ${roots.root2}`);
  } else {
    console.log(`Корень уравнения: ${roots.root}`);
  }
} else {
  console.log("Уравнение не имеет действительных корней.");
}
