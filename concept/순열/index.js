const getPermutation = (arr, select) => {
  const resultArray = [];

  if (select === 1) {
    return arr.map((item) => [item]);
  }

  arr.map((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, select - 1);
    const result = permutations.map((item) => [fixed, ...item]);
    resultArray.push(...result);
  });

  return resultArray;
};

const test = getPermutation([1, 2, 3, 4], 2);

console.log(test);
