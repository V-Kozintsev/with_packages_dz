export const arithmeticMean = (maxNumber) => {
  if (maxNumber < 1) {
    return "Нет нечётных чисел.";
  }

  let sum = 0;
  let count = 0;

  for (let i = 1; i <= maxNumber; i += 2) {
    sum += i;
    count++;
  }

  return count > 0
    ? `Среднее арифметическое нечётных чисел от 1 до ${maxNumber} равно: ${sum / count}`
    : "Нет нечётных чисел.";
};
