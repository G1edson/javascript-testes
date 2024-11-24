// callback ou callback hell :)

// setTimeout(function () {
//     console.log('Executando callback 1...')
//     setTimeout(function () {
//         console.log('Executando callback 2...')
//         setTimeout(function () {
//             console.log('Executando callback 3...')
//             setTimeout(function () {
//                 console.log('Executando callback 4...')
//             },2000)
//         },2000)
//     },2000)
// }, 2000)

// Promise

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)
