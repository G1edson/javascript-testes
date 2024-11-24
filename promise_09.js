// Promise.all

function geraNumeroEntre(min, max, tempo){

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}
Promise.all([
    geraNumeroEntre(5,7,4000),
    geraNumeroEntre(1, 60, 1000),
    geraNumeroEntre(1, 60, 500),
    geraNumeroEntre(1, 60, 2000),
    geraNumeroEntre(1, 60, 1500),
    geraNumeroEntre(1, 60, 3000),
]).then(valores => console.log(valores))
