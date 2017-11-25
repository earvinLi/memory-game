let allCards = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(allCards);
for (let i = 0; i < allCards.length; i++) {
    $('.deck').append('<li class="card"><i id="card_'+i+'"></i></li>');
    $('.card:last i').addClass(allCards[i]);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function displayCard(card) {
     card.addClass('open show');
 }

 let openCards = [];
 let openCardsId = [];

 function collectOpen(card) {
     openCards.push(card.children('i').attr('class'));
     openCardsId.push(card.children('i').attr('id'));
 }

 $('.card').click(function() {
     if (openCards.length < 2) {
         displayCard($(this));
         if (openCards.length === 0) {
             collectOpen($(this));
         } else {
             collectOpen($(this));
             if (openCards[1] === openCards[0] && openCardsId[0] !== openCardsId[1]) {
                 match($(this));
             }
         }
     }
 });
