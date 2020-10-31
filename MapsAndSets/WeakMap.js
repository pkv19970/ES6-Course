let cardAce = {
    name:'Ace of Spades'
}

let cardKing = {
    name:'King of Clubs'
}

let key1 = {
    a:1
}
let key2 = {
    b:2
}

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck.get(key1))

console.log(deck.get(key2))