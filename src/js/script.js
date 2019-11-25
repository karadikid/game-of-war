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
constructor (name,players) {
    this.name = name;
    this.players = [players]
    this.tieHand1 = [];
    this.tieHand2 = [];
    }
    addPlayer(Player) {
        if (this.players.length == 2){
        console.log("Game full, fight!")
        } else {
            this.players.push(Player);
        }
        return console.log("Player added!");
    }
    removePlayer(Player) {
        this.players.splice(this.players.indexOf(Player.name), 1)
        return console.log(`Player ${Player.name} defeated!`);
    }   
    fightPlayer(Player){
        this.tieHand1 = this.players[0].hand.slice(1,4);
        // console.log(this.tieHand1);
        this.tieHand2 = this.players[1].hand.slice(1,4);
        // console.log(this.tieHand2);
        if (this.players[0].hand[0].value > this.players[1].hand[0].value) {
        this.cardTransferSingle(this.players[0], this.players[1]);
        } else if (this.players[0].hand[0].value < this.players[1].hand[0].value) {
        this.cardTransferSingle(this.players[1], this.players[0]);
        } else this.tiePlayer(this.tieHand1, this.tieHand2); 
    }
    //THIS IS WHERE THE CURRENT ERROR IS, I AM ALWAYS USING THE SAME HAND
    tiePlayer(tieHand1, tieHand2){
        if (this.tieHand1[0] > this.tieHand2[0]){
            this.players[0].hand.push(...this.tieHand1);
            console.log(this.players[0].hand + 'tiePlayer');
            console.log(this.players[1].hand + 'tiePlayer');
        }
    }
    cardTransferSingle(winner, loser){
        console.log(winner.hand[0] + 'cardTransferSingle');
        console.log(loser.hand[0] + 'cardTransferSingle');
        winner.hand.push(loser.hand.pop())
        // console.log(this.loser.hand[0])
        // //this.winner.hand.card.push(this.loser.hand[0].card);
    }

}

class Player {
/* 
contains a hand array[] of cards.
contains method for adding a hand
contains a method for removing card
contains a method for adding card
*/
    constructor(name, hand){
        this.name = name;
        this.hand = hand;
        //Writing function for the tie hand for comparisons
        
    }
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
    this.hands = []

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
    createHands(cards) {
        let hand1 = this.cards.splice(0, Math.floor(this.cards.length/2))
        let hand2 = this.cards.splice((Math.floor+1)/2, this.cards.length)
        this.hands = [hand1, hand2];
        return this.hands;
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

deck = new Deck;
deck.shuffle();
deck.createHands();

Player1 = new Player("Player 1", deck.hands[0]);
Player2 = new Player("Player 2", deck.hands[1]);

console.log(Player1);
console.log(Player2);

Game1 = new Game("Game 1", Player1);
Game1.addPlayer(Player2);
Game1.fightPlayer();