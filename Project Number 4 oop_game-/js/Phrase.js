//  Treehouse FSJS Techdegree
//  Project 4 - OOP Game App
//  Phrase.js */
//  Treehouse FSJS Techdegree
//  Project 4 - OOP Game App
//  Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		const phraseSection = document.getElementById("phrase");
		const phraseSectionList = phraseSection.getElementsByTagName(
			"ul"
		)[0];

		const splitPhrase = this.phrase.split("");
		for (var i in splitPhrase) {
			const letter = splitPhrase[i];

			const phraseSectionListMember = document.createElement(
				"li"
			);
			const phraseSectionListMemberText = document.createTextNode(
				letter
			);
			phraseSectionListMember.appendChild(
				phraseSectionListMemberText
			);

			if (letter === " ") {
				phraseSectionListMember.classList.add(
					"space"
				);
			} else {
				phraseSectionListMember.classList.add(
					"hide"
				);
				phraseSectionListMember.classList.add(
					"letter"
				);
				phraseSectionListMember.classList.add(
					letter
				);
			}

			phraseSectionList.appendChild(
				phraseSectionListMember
			);
		}
	}

	checkLetter(letter) {
		const valid =
			document.getElementsByClassName(letter).length !=
			0;
		return valid;
	}

	// game.activePhrase.showMatchedLetter('o')
	showMatchedLetter(letter) {
		const matchedLetterBoxes = document.getElementsByClassName(
			letter
		);
		for (var i = 0; i < matchedLetterBoxes.length; i++) {
			matchedLetterBoxes[i].classList.add("show");
			matchedLetterBoxes[i].classList.remove("hide");
		}
	}
}
