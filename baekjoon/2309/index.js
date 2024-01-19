const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dwarfs = input.map(Number);

const getCombination = (arr, select) => {
  const results = [];

  if (select === 1) return arr.map((item) => [item]);

  arr.map((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, select - 1);
    const result = combinations.map((combination) => [fixed, ...combination]);
    results.push(...result);
  });

  return results;
};

const dwarfsCombinations = getCombination(dwarfs, 7);

for (let i = 0; i < dwarfsCombinations.length; i++) {
  const sum = dwarfsCombinations[i].reduce((acc, current) => acc + current);
  if (sum === 100) {
    dwarfsCombinations[i]
      .sort((a, b) => a - b)
      .map((item) => console.log(item));
    break;
  }
}
