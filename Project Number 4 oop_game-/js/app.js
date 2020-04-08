//  Treehouse FSJS Techdegree
//  Project 4 - OOP Game App
//  app.js */

// -- Test constructors --
// const phrase = new Phrase();
// const game = new Game();

// -- Test phrase --
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// -- Test if phrase goes to lower case on initialization --
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// -- Test get random phrase --
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// -- Test adding phrase to display --
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// -- Test starting new game --
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

var game;
document.getElementById("btn__reset").addEventListener("click", function (
	event
) {
	game = new Game();
	game.startGame();
});
// add key listeners
const keys = document.getElementsByClassName("key");
for (var i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", function (event) {
		const letterSelected = event.target.innerText;
		game.handleInteraction(letterSelected);
	});
}
// add key press listeners
// pressing a physical keyboard button results in the handleInteraction() 
// method being called for the associated onscreen keyboard button
document.onkeypress = function (e) {
	e = e || window.event;
	// use e.keyCode
	console.log(e.key);
	let letterOnly = e.key.match(/[a-zA-Z]/i) || [null];
	// console.log(letterOnly)
	// console.log(letterOnly[0])
	game.handleInteraction(letterOnly[0]);
};
