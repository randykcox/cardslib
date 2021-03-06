class Card {
    constructor (rank, suit, state="secret") {
        this.rank = rank
        this.suit = suit
        this.state = state //secret/hidden/showing
    }
    val () {
        return ((this.rank === "T") ? "10" : this.rank) + this.suit
    }
    toString() {
        return this.val()
    }
    look () {
        this.state = "hidden"
        return this.playerView()
    }
    reveal () {
        this.state = "showing"
        return this.tableView()
    }
    tableView () {
        console.log(this.state === "showing" ? this.val : '?')
    }
    playerView () {
        console.log(this.state === "secret" ? "?" : "(" +this.val +")")
    }
}

class Deck {
    constructor (){
        this.cards = []
        this.drawPile = []
        this.discardPile = []
        const ranks = "A23456789TJQK"
        const suits = "♠️♦️♣️♥️" // Emoji! They take up two characters each

        // Populate the cards array in new-deck order
        for (let s=0; s<suits.length/2; s+=2) { // +2 to account for emoji
            for (let r=0; r<ranks.length; r++)
                this.cards.push(new Card(ranks[r], suits[s]))
        }
        for (let s=suits.length/2; s<suits.length; s+=2) { // +2 to account for emoji
            for (let r=ranks.length-1; r>=0; r--)
                this.cards.push(new Card(ranks[r], suits[s]))
        }
    }

    /*
     * Returns a string representation of all of the cards in the deck
     */
    fan () {
        let cards = this.cards.map(card => card.val())
        return cards.join(" ")
    }
    
    deal (numCards, numHands) {
        this.handsArr = new Array(numHands)
        for (let cardNum = 0; cardNum< numCards; cardNum++) {

            for (let handNum=0; handNum<this.handsArr.length; handNum++) {
                if (!Array.isArray(this.handsArr[handNum])) { // first card for this hand
                    this.handsArr[handNum] = []
                }
                this.handsArr[handNum].push(this.cards.shift())
            }
        }
        return this.handsArr
    }

    /*
     * Returns a single card object that is removed from the deck
     */
    draw () {
        return this.cards.shift()
    }

    /*
     * shuffle - Randomizes the order of the cards array, returns the deck object to enable chaining
     */
    shuffle () {
        let shuffled = []
        while (this.cards.length > 0) {
            let cardNum = Math.floor(Math.random() * this.cards.length)
            shuffled.push( this.cards.splice(cardNum, 1)[0] )
        }
        this.cards = shuffled
        return this // for chaining
    }
}