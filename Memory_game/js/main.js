console.log('Up and running!');

let cards = ['queen','queen', 'king', 'king'];
let cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry,try again!");
		}
	}
}

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);

console.log(5);

/*
	let cardOne = cards[0];
	cardsInPlay.push(cardOne);

	let cardTwo = cards[2];
	cardsInPlay.push(cardTwo);

	console.log('User flipped '+ cardOne);
	console.log('User flipped '+ cardTwo);
*/
/* 

// Trial ONE --------------------------------------

if (cardOne === cardTwo) {
	alert ('You found a match!');
} else if (cardOne === cardThree || cardFour) {
	alert ('Try again!');
} else if (cardTwo === cardThree || cardFour) {
	alert ('Try again!');
} else if (cardThree === cardFour){
	alert ('You found a match!');
}

for (i=0; i<cards.length; i++) {
	for (i=0; i<cards.length; i++) {
		if //insert code above here
		}
	}


// Trial TWO --------------------------------------

for (i=0; i<cards.length; i++) {
	if (cardOne === cardTwo || cardThree === cardFour) {
		alert ('You found a match!');
	} else if (cardOne !== cardTwo || cardThree !== cardFour) {
		alert ('Try again!');
	}
}

*/