const dog = {
    name: "Buddy",
    species: "Golden Retriever",
    size: "Large",
    bark: function() {
        return "Woof! Woof!";
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
