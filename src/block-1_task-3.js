export function sumOfDigits(number) {
  if (number >= 100 && number <= 999) {
    const digits = String(number).split("").map(Number);
    return digits.reduce((acc, curr) => acc + curr, 0);
  } else {
    throw new Error("Число должно быть трёхзначным.");
  }
}
