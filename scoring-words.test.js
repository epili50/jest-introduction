const { high } = require('./scoring-words'); 


it("En la frase 'man i need a taxi up to ubud' debiera devolver la palabra 'taxi'", () =>{
    expect(high('man i need a taxi up to ubud')).toBe('taxi')
});

it("En la frase 'what time are we climbing up the volcano' debiera devolver la palabra 'volcano", () =>{
    expect(high('what time are we climbing up the volcano')).toBe('volcano')
});

it("En la frase 'take me to semynak' debiera devolver la palabra 'semynak'", () =>{
    expect(high('take me to semynak')).toBe('semynak')
});

it("En la frase 'aa b' debiera devolver la palabra 'aa'", () =>{
    expect(high('aa b')).toBe('aa')
});

it("En la frase 'I think education is the most valuable investment in a modern state' debiera devolver la palabra 'education', porque tiene todas las vocales", () =>{
    expect(high('I think education is the most valuable investment in a modern state')).toBe('education')
});
