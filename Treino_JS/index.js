function filter (v, f) {
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

console.log(map([1,2,3], e => e * 2))