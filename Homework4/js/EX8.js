function countVowels(word) {
    return (word.match(/[aeiouy]/gi) || []).length;
}

function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    return lowerWord === lowerWord.split('').reverse().join('');
}

const userInput = prompt("Enter a word:");
console.log(`${userInput} contains ${countVowels(userInput)} vowels and is ${isPalindrome(userInput) ? '' : 'not '}a palindrome`);
