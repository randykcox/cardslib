class Card {
    constructor (rank, suit, state="secret") {
        this.rank = rank
        this.suit = suit
        this.state = state //secret/hidden/showing
    }
    val () {
        return this.rank + this.suit
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
        const ranks = "A23456789TJQK"
        const suits = "♠️♦️♣️♥️" // Emoji! They take up two characters each
        for (let s=0; s<suits.length/2; s+=2) { // +2 to account for emoji
            for (let r=0; r<ranks.length; r++)
                this.cards.push(new Card(ranks[r], suits[s]))
        }
        for (let s=suits.length/2; s<suits.length; s+=2) { // +2 to account for emoji
            for (let r=ranks.length-1; r>=0; r--)
                this.cards.push(new Card(ranks[r], suits[s]))
        }
    }
    fan () {
        let cards = this.cards.map(card => card.val())
        return cards.join(" ")
    }
    deal (numCards, numPlayers) {
        let players = new Array(numPlayers)
        for (let cardNum = 0; cardNum< numCards; cardNum++) {

            for (let playerNum=0; playerNum<players.length; playerNum++) {
                if (!Array.isArray(players[playerNum])) {
                    players[playerNum] = []
                }
                players[playerNum].push(this.cards.shift())
            }
        }
        return players
    }
}