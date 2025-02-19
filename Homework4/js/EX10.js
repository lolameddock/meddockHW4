const isEven = (n) => n % 2 === 0;

for (let i = 1; i <= 10; i++) {
    console.log(`${i} - ${isEven(i)}`);
}

console.log(isEven(4));
console.log(isEven(5));
