import {
  binarySeach,
  getFirst,
  printAll,
  printPairs,
  runDSAExample,
} from "./helper.js";

const arr = Array.from({ length: 10 }, (_, i) => i + 1);
const largeArr = Array.from({ length: 100 }, (_, i) => i * 1);

runDSAExample({
  title: "Get First Element",
  complexity: "O(1)",
  input: arr,
  fn: () => getFirst(arr),
});

runDSAExample({
  title: "Print All Elements",
  complexity: "O(n)",
  input: arr,
  fn: () => printAll(arr),
});

runDSAExample({
  title: "Print Pairs",
  complexity: "O(n2)",
  input: arr,
  fn: () => printPairs(arr),
});

runDSAExample({
  title: "binary Search",
  complexity: "O(log n)",
  input: arr,
  fn: () => binarySeach(arr, 3),
});
