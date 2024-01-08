const getCombinations = (arr, select) => {
  let results = [];

  if (select === 1) return arr.map((el) => [el]);

  arr.map((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, select - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const test = getCombinations([1, 2, 3], 2);
// console.log(test);
