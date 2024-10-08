// TODO: Importar selectCard !!
const { selectCard } = require ('./pokerCards')

it("Devuelve '3♠' y lo elimina del array de cartas", () =>{
    const cards = ['A♠', '2♠', '3♠', '4♠', '5♠'];
    const eraseCard = '3♠'
    const selectedCard = selectCard(cards, eraseCard);
    
    expect(selectedCard).toBe(eraseCard);
    expect(cards).not.toContain(eraseCard); 
    expect(cards).toHaveLength(4)

})