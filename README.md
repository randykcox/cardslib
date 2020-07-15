# Cards JS Library

Goals:
1. Standard 52-card deck with optional jokers
2. Honest shuffle and optional cut
3. Deal _c_ number of cards to _p_ players
4. Draw pile and discard pile

Development Plan:
1. Shuffle and cut a standard deck of cards
   1. Represent a new deck in new-deck order
   2. Shuffle cards
      1. ??  random shuffle, or a simulated riffle shuffle?
   3. Cut and complete the cut
2. Deal _c_ number of cards to _p_ players
   1. Ends up with _p_ number of hands of cards, each with _c_ number of cards
   2. Unused cards end up as te draw pile
3. Each player can draw a card from either the draw pile or discard pile, then discard a card to the discard pile
    1. Show the player their hand of cards
    2. Show the player the top card of the discard pile
    3. Player chooses to draw a card from either the draw pile or discard pile
    4. Player then chooses to discard one card from their hand
4. When the draw pile is empty, it is reshuffled and becomes the draw pile.

Questions

1. What is "new-deck order"?
   JKR1, JK2, AS-KS, AD-KD, KC-AC, KH-AH, ADV1, ADV2
2. What is an algorithm to perform a fair random shuffle?
3. What is an algorithm to perform a simulated riffle shuffle?
4. How can we pick up "approximately half the deck"? Needed for cuts and riffle shuffle.
5. Do we allow players to rearrange cards in their hands?
6. Do we allow players to choose to discard face-up *or* face-down?
7. How do we keep scores in partnership games?

Objects

Card {
     rank: A23456789TJQK Joker1 Joker2 ADV1 **ADV2**
     suit: SHCD ♠︎♡♣︎♢ ♤♥︎♧♦︎
     state: hidden (player knows),
            showing (everyone knows),
            or secret (nobody knows)
}

Hand {
    [AS, 5D, JC, QC, KC]
    draw() -- from draw pile or discard
    discard(card) -- to the top of the discard
}

Deck {
    cards []
    cut()
    randomShuffle()
    riffleShuffle()
    deal(numCards, numPlayers)
    fan()
}

Game {
    cards [] -- a subset of the full deck
    drawpile -- face down
    discardpile -- face up
    playmat -- Where cards are placed mid-play
    players -- 
        hand []
        score
    Rules
        Limits the options for everything
        Determines if a win has occurred, and by who
}