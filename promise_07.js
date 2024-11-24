function promessaComPossivelErro(chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve('Tudo certo!!')
        }
    })
}

promessaComPossivelErro(0.5)
    .then(
        v => v + '!!!!', // resolve
        erro => console.log(`#1: ${erro}`) // reject
    )
    .then(
        v => console.log(v), //resolve
        erro => console.log(`#2: ${erro}`) //reject
    )