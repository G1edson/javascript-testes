// function obterVersiculo(livro, cap, versiculo) {
//     const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`
//     return fetch(url).then(resposta => resposta.json())
//               .then(dados => dados.verses[0].text)
//               .then(console.log) 
// }

// obterVersiculo('john', 3, 16)
//     .then(texto => console.log(texto))


// ==== Uma function  asysnc sempre irar retonar uma Promise

async function obterVersiculo(livro, cap, versiculo) {
    const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`
        
    const resposta = await fetch(url)
    const dados = await resposta.json()
    return dados.verses[0].text  
}

async function executar() {
    const texto = await obterVersiculo('luke', 3, 3)
        console.log(texto)
    
}

executar()