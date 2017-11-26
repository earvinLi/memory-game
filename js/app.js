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
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function displayCard(card) {
     card.addClass('open show');
 }
 function hideCard(card) {
     card.removeClass('open show');
 }

 let = moves 0;
 function countMoves() {
     moves += 1;
     $('.moves').text(moves + ' Moves');
 }

 function getTime() {
     // add 0 when time's under 10
     function formTime(num) {
         return (num < 10 ? '0' : '') + num;
     }
     let elapsedTime = new Date - startTime,
         s = formTime(Math.round(elapsedTime / 1000, 0));
     // reset startTime when it reaches a minute
     if (s % 59 === 0) {
         startTime = new Date;
         m += 1;
         // delete a star when 1 minute and 3 minutes elapsed
         if (m === 1 || m === 3) {
             $('.stars li:last').remove();
         }
     }
     $('.time').text(formTime(m) + ':' + s);
     secs = s;
 }

 let openCards = [];
 let openCardsId = [];
 let openCardsNumber = 0;
 function collectOpen(card) {
     openCards.push(card.children('i').attr('class'));
     openCardsId.push(card.children('i').attr('id'));
 }

 function match(card) {
     card.addClass('match'); $('[id='+openCardsId[0]+']').parent().addClass('match');
     openCards = [];
     openCardsId = [];
     openCardsNumber += 2;
 }
 function notMatch(card) {
     let clickedCard = card;
     setTimeout(function() {
         hideCard(clickedCard);
         hideCard($('[id='+openCardsId[0]+']').parent());
         openCards = [];
         openCardsId = [];
     }, 500);
 }

 function win() {
     $('#playPanel').css({'display' : 'none'});
     $('#winPanel').css({'display' : 'block'});
     $('#sta').text('With ' + moves + ' Moves and ' + $('.stars li').length + ' Stars.');
     $('#timeSta').text('Within ' + m + ' minutes and ' + secs + ' seconds. Woooo!');
     $('#pl').click(function() {
         location.reload();
     })
 }

 $('.deck').one('click', function() {
     startTime = new Date;
     setInterval(getTime, 1000);
 })

 $('.card').click(function() {
     if (openCards.length < 2) {
         displayCard($(this));
         if (openCards.length === 0) {
             collectOpen($(this));
         } else {
             collectOpen($(this));
             if (openCardsId[0] !== openCardsId[1]) {
                 countMoves();
             }
             if (openCards[1] === openCards[0] && openCardsId[0] !== openCardsId[1]) {
                 match($(this));
                 if (openCardsNumber === allCards.length) {
                     win();
                 }
             } else {
                 notMatch($(this));
             }
         }
     }
 });
