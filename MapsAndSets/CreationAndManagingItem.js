let cardAce = {
    name:'Ace of Spades'
}

let cardKing = {
    name:'King of Clubs'
}

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

let it= deck.keys()
for(let element of it){
    console.log(element, deck.get(element))
}
for(let values of deck.values()){
    console.log(values)
}