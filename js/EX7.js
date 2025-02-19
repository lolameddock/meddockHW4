let words = [];
let word;

while ((word = prompt("Enter a word (type 'stop' to end):")).toLowerCase() !== "stop") {
    words.push(word);
}

if (words.length === 0) {
    console.log("No words to display, Stop was the first word entered.");
} else {
    console.log("You entered the following words:");
    console.log(words.join("\n"));
}
