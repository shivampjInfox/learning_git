export function runDSAExample({ title, complexity, input, fn }) {
  console.log("\n" + "=".repeat(30) + " START " + "=".repeat(30));

  console.log(`📌 Problem      : ${title}`);
  console.log(`⏱ Complexity   : ${complexity}`);
  console.log(`📊 Input Size   : ${input.length}`);

  const start = performance.now();

  const result = fn();

  const end = performance.now();

  if (result !== undefined) {
    console.log(`✅ Output       :`, result);
  }

  console.log(`🚀 Execution    : ${(end - start).toFixed(4)} ms`);

  console.log("=".repeat(67) + "\n");
}
export function getFirst(arr) {
  return arr[0];
}

export function printAll(arr) {
  for (const item of arr) {
    console.log(item);
  }
}

export function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

export function binarySeach(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
