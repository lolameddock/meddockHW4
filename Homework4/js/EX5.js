const values = [3, 11, 7, 2, 9, 10];

let sum = 0, min = values[0], max = values[0];
for (let val of values) {
    sum += val;
    if (val < min) min = val;
    if (val > max) max = val;
}

console.log(`Sum: ${sum}`);
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);
