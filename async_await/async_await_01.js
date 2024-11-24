function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

async  function executarAsync () {
    await esperarPor()
        console.log('Depois de 2s...')

       await esperarPor(3000)
        console.log('Depois de 3s...')

       await esperarPor(1500)
        console.log('Depois de 1.5s...')
}

executarAsync()