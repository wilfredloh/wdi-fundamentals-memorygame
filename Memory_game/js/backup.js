console.log("Up and running!");

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

let imageOne = document.getElementsByTag('img')[0];
let imageTwo = document.getElementsByTag('img')[1];
let imageThree = document.getElementsByTag('img')[2];
let imageFour = document.getElementsByTag('img')[3];

imageOne.addEventListener('click',flipCardOne)
imageTwo.addEventListener('click',flipCardTwo)
imageThree.addEventListener('click',flipCardThree)
imageFour.addEventListener('click',flipCardFour)

let flipCardOne = function (){
	document.getElementsByTag('img')[0].innerHTML = src="cards[0].cardImage" alt="Queen of Diamonds"
}
let flipCardTwo = function (){
	document.getElementsByTag('img')[1].innerHTML = cards[1].cardImage
}
let flipCardThree = function (){
	document.getElementsByTag('img')[2].innerHTML = cards[2].cardImage
}
let flipCardFour = function (){
	document.getElementsByTag('img')[3].innerHTML = cards[3].cardImage
}



flipCard(0);
flipCard(1);





/* 
let cardOne = 'queen';
let cardTwo = 'queen';
let cardThree = 'king';
let cardFour = 'king';

let cards = [cardOne, cardTwo, cardThree, cardFour];
let cardsTwo = [cardOne, cardTwo, cardThree, cardFour];

console.log('User flipped '+cardOne);
console.log('User flipped '+cardTwo);


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