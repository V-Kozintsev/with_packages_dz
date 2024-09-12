const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumNumber(sum) {
  const sumResult = sum.reduce((acc, num) => acc + num, 0);
  console.log(sumResult);

  const newArrayNumber = arrayNumber.map((num) => num * 2);
  const maxNum = Math.max(...arrayNumber);
  const minNum = Math.min(...arrayNumber);
  console.log(maxNum);
  console.log(minNum);
  return { sumResult, newArrayNumber, maxNum, minNum };
}

export { arrayNumber };
