// TODO: Importar selectCard !!
const { selectCard } = require ('./pokerCards')

it("Devuelve '3♠' y lo elimina del array de cartas", () =>{
    const cards = ['A♠', '2♠', '3♠', '4♠', '5♠'];
    const eraseCard = '3♠'
    const selectedCard = selectCard(cards, eraseCard);
    
    expect(selectedCard).toBe(eraseCard);
    expect(cards).not.toContain(eraseCard); 
    expect(cards).toHaveLength(4)

});

it("Devuelve 'A♥' y lo elimina del array de cartas", () =>{
    const cards = ['A♥', 'K♦', '10♣', 'J♠'];
    const eraseCard = 'A♥'
    const selectedCard = selectCard(cards, eraseCard);
    
    expect(selectedCard).toBe(eraseCard);
    expect(cards).not.toContain(eraseCard); 
    expect(cards).toHaveLength(3)

});


it("Devuelve undefined y lo elimina del array de cartas", () =>{
    const cards = ['7♠', '8♦', '9♣'];
    const eraseCard = '10♣'
    const selectedCard = selectCard(cards, eraseCard);
    
    expect(selectedCard).toBe(undefined);
    expect(cards).not.toContain(eraseCard); 
    expect(cards).toHaveLength(3)

});

it("Devuelve undefined y lo elimina del array de cartas", () =>{
    const cards = ['7♠'];
    const eraseCard = '7♠'
    const selectedCard = selectCard(cards, eraseCard);
    
    expect(selectedCard).toBe(eraseCard);
    expect(cards).not.toContain(eraseCard); 
    expect(cards).toHaveLength(0)

});

