console.log('Up and running!');

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, 
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry,try again!");
		}
	}
}

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipCard(0);
flipCard(1);



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