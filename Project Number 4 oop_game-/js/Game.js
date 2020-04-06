// Treehouse FSJS Techdegree
// Project 4 - OOP Game App
// Game.js

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [];
		this.createPhrases();
		this.activePhrase = null;
	}

	createPhrases() {
		this.phrases[0] = new Phrase(
			"Life is like a box of chocolates"
		);
		this.phrases[1] = new Phrase("Life is good");
		this.phrases[2] = new Phrase("Social distancing sucks");
		this.phrases[3] = new Phrase("Wash your hands");
		this.phrases[4] = new Phrase("I love day parties");
	}

	getRandomPhrase() {
		const randomIndex = Math.floor(
			Math.random() * Math.floor(5)
		);
		return this.phrases[randomIndex];
	}

	startGame() {
		document.getElementById("overlay").style.display = "none";
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
	handleInteraction(button) {
		const keys = document.getElementsByClassName("key");
		for (var i = 0; i < keys.length; i++) {
			if (keys[i].innerText === button) {
				keys[i].disabled = true;

				if (
					!this.activePhrase.checkLetter(
						button
					)
				) {
					keys[i].classList.add(
						"wrong"
					);
					this.removeLife();
				} else {
					keys[i].classList.add(
						"chosen"
					);
					this.activePhrase.showMatchedLetter(
						button
					);
					if (this.checkForWin()) {
						this.gameOver(true);
					}
				}

				return;
			}
		}
	}

	checkForWin() {
		const win =
			document.getElementsByClassName("hide").length ==
			0;
		return win;
	}

	removeLife() {
		const lifeImage = document
			.getElementsByClassName("tries")
			[this.missed].getElementsByTagName("img")[0];
		lifeImage.src = "images/lostHeart.png";

		this.missed++;
		if (this.missed == 5) {
			this.gameOver(false);
		}
	}

	gameOver(gameWon) {
		document.getElementById("overlay").style.display = "";

		if (gameWon) {
			document.getElementById(
				"game-over-message"
			).innerHTML = "You won!";
			document.getElementById("overlay").classList.add(
				"win"
			);
			document.getElementById(
				"overlay"
			).classList.remove("lose");
			document.getElementById(
				"overlay"
			).classList.remove("start");
		} else {
			document.getElementById(
				"game-over-message"
			).innerHTML = "You lost!";
			document.getElementById("overlay").classList.add(
				"lose"
			);
			document.getElementById(
				"overlay"
			).classList.remove("win");
			document.getElementById(
				"overlay"
			).classList.remove("start");
		}

		this.cleanUp();
	}

	cleanUp() {
		const phraseList = document
			.getElementById("phrase")
			.getElementsByTagName("ul")[0];
		phraseList.innerHTML = "";

		const keys = document.getElementsByClassName("key");
		for (i = 0; i < keys.length; i++) {
			keys[i].disabled = false;
			keys[i].classList.remove("wrong");
			keys[i].classList.remove("chosen");
		}

		const tries = document.getElementsByClassName("tries");
		for (i = 0; i < tries.length; i++) {
			const img = tries[i].getElementsByTagName(
				"img"
			)[0];
			img.src = "images/liveHeart.png";
		}

		this.missed = 0;
	}
}
