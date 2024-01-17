const getCombination = (arr, select) => {
  const resultArray = [];
  if (select === 1) return arr.map((item) => [item]);

  arr.map((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, select - 1);
    const result = combinations.map((combination) => [fixed, ...combination]);
    resultArray.push(...result);
  });

  return resultArray;
};

const test = getCombination([1, 2, 3, 4, 5], 3);

console.log(test);
