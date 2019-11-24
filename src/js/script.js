class Game {
/* 
Contains players array of 2 items
Methods:
fight() 1:1 compare of players[0].card : players[1]card
If tie, calls tieMethod which cals fight method
When winner, subtracts from losing player.hand array and adds to winning player.hand array
Calls self again as long as player[index].card[] > 0
playerAdd method to players[] array
*/


}

class Player {
/* 
contains a hand array[] of cards.
contains method for adding a hand
contains a method for removing card
contains a method for adding card
*/
}

class Deck {
/*
Contains 52 cards
Contains method for generating deck
Contains method for shuffling deck
Contains method for generating hand 
*/
    constructor() {

    this.cards =[]

    let suit = ["clubs","diamonds","hearts","spades"]
    let rank = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    // let value = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    rank.forEach((rank, value) => {
        suit.forEach(suit => this.cards.push(new Card(rank, suit, value)))
        } 
        )
    }
    shuffle(cards) {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
      
        return cards;
      }
}

class Card {
/* Contains property of card suit
Contains property of card rank
Contains property of card value
*/
    constructor(rank, suit, value){
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

