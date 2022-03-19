/* function filter (v, f) {
    let result = []
    for (let i=0; i < v.length; i++) {
        if (f(v[i])){
            result.push(v[i])
        } 
    }
    return result
}

console.log(filter([1,2,3], e => e % 2 === 0))

function map (v, f) {
    let result = []
    for (let i=0; i < v.length; i++) {
        result.push(f(v[i]))
    }
    return result
}

console.log(map([1,2,3], e => e * 2)) */


//promises (then/catch)
/* function hello (nome) {
    return new Promise((resolve, reject) => {
        resolve(`Hello ${nome}`)
    })
}
hello("Jao").then((res) => console.log(res)) */

// resolve/reject
function fatorial (n) {
    if (n<0) return Promise.reject(`Valor não pode ser negativo!`)
    let res = 1
    for (let i = 0; i < n.length; i++) res *= i
    return Promise.resolve(res)
}

/* //async -> retorna uma Promise.resolve
async function hello(nome) {
    return `Hello, ${nome}`
}
hello("Ana").then(res => console.log(res)) */

// async/await => é interessante para operações de I/O, pois possibilita o paralelismo, enquanto ele espera a resposta de I/O o processamento paralelo permite o fluxo do código principal
/* async function chamadaComAsyncAwait () {
    const f1 = await fatorial(10)
} */

/* app.get('/produtos', async (req, res) => {
    const resultadoDoBanco = await buscarNoBanco()
    res.status(200).send(resultadoDoBanco)
}) */

// async/await com tratamento de reject
async function chamadaComAsyncAwait () {
    try {
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    } catch (e) {
        console.log(e)
    }
}
chamadaComAsyncAwait()

/* function chamadaComThenCatch () {
    fatorial(10)
    .then( res => console.log(res))
    .catch(err => console.log(erro))

    fatorial(-10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}
chamadaComThenCatch() */

