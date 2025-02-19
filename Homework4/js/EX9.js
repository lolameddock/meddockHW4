const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0, guess;

do {
    guess = Number(prompt("Guess the number (1-100):"));
    attempts++;
    if (guess < target) {
        console.log("Too low, guess again");
    } else if (guess > target) {
        console.log("Too high, guess again");
    }
} while (guess !== target);

console.log(`Correct! It took you ${attempts} attempts.`);
