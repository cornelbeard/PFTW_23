// 3 games and details
const gameOne = { title: "Spades", type: "card", numberOfPlayers: "2-4", rating: "5-stars", description: "Spades is a trick-taking card game devised in the United States in the 1930s. It can be played as either a partnership or solo game." };
console.log("Game One Details", gameOne);

const gameTwo = { title: "Go Fish", type: "card", numberOfPlayers: "2 - 10", rating: "3-stars", description: "Go Fish is a fun game that will amuse and entertain even the youngest card players. It is similar to the game Authors." };
console.log("Game Two Details", gameTwo);

const gameThree = { title: "Garbage", type: "card", numberOfPlayers: "2", rating: "4-stars", description: "Garbage card game is an easy family game that a wide range of ages will enjoy. It also helps preschoolers working on number recognition." };
console.log("Game Three Details", gameThree);


// input number
const pickNumber = parseInt(window.prompt("Choose a number between 1 and 3 and I'll tell you about my favorite game that corresponds to that number."));
console.log("user chose the number ", pickNumber);

if (pickNumber === 1){
    window.alert("You have selected " + gameOne.title + ", a " + gameOne.type + " game that I grew up playing with my family, but really used it as a pasttime while deployed with the US Army. Due to it's importance in my life, I have given it a " + gameOne.rating + " rating. In order to play you need " + gameTwo.numberOfPlayers + " players. Haven't heard of the game? No worries, here is the run down: " + gameOne.description);
}

if (pickNumber === 2){
    window.alert("You have selected " + gameTwo.title + ", a " + gameTwo.type + " game that I grew up playing in after school programs in third and fourth grade. Due to it's sentimental value in my life, but boring nature, I have given it a " + gameTwo.rating + " rating. In order to play you need " + gameTwo.numberOfPlayers + " players. Haven't heard of the game? No worries, here is the run down: " + gameTwo.description);
}
if (pickNumber === 3){
    window.alert("You have selected " + gameThree.title + ", a " + gameThree.type + " game that I grew up playing with my family, but really used it as a pasttime while deployed with the US Army. Due to it's importance in my life, I have given it a " + gameThree.rating + " rating. In order to play you need " + gameThree.numberOfPlayers + " players. Haven't heard of the game? No worries, here is the run down: " + gameThree.description);
}

if (pickNumber > 3){
    window.alert("Invalid selection. Please refresh the page and choose a value between 1 and 3.")
}

if (pickNumber < 1){
    window.alert("Invalid selection. Please refresh the page and choose a value between 1 and 3.")
}