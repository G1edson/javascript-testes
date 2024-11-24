function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

function executar () {
    esperarPor().then(() => console.log('Depois de 2s...'))
                .then(() => esperarPor(3000))
                .then(() => console.log('Depois de 3s...'))
                .then(() => esperarPor(1500))
                .then(() => console.log('Depois de 1.5s...'))
}

executar()