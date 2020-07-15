class Card {
    constructor (rank, suit, state="secret") {
        this.rank = rank
        this.suit = suit
        this.state = state //secret/hidden/showing
    }
    val () {
        return this.rank + this.suit
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
        const suits = "SDCH"
        for (let s=0; s<suits.length; s++) {
            for (let r=0; r<ranks.length; r++)
                this.cards.push(new Card(ranks[r], suits[s]))
        }
    }
    spread () {
        let cards = this.cards.map(card => card.val())
        return cards.join(" ")
    }
}