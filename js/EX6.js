function arrayInfo(arr) {
    return {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };
}

console.log(arrayInfo([4, 8, 12, 5, 20]));
console.log(arrayInfo(["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}]));
