// callback ou callback hell :)

setTimeout(function () {
    console.log('Executando callback 1...')
    setTimeout(function () {
        console.log('Executando callback 2...')
        setTimeout(function () {
            console.log('Executando callback 3...')
            setTimeout(function () {
                console.log('Executando callback 4...')
            },2000)
        },2000)
    },2000)
}, 2000)
