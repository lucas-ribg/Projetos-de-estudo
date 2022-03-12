require('dotenv').config()

const axios = require('axios')

const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

axios.get(url)
.then(res => {
    return res.data
})
.then(res => {
    console.log(res.cnt)
    return res
})
.then(res => {
    return res.list
})
.then(res => {
    for (let previsao of res) {
        console.log(`
            ${new Date(+previsao.dt * 1000).toLocaleString()},
            Min: ${previsao.main.temp_min}\u00B0C,
            Max: ${previsao.main.temp_max}\u00B0C,
            Hum: ${previsao.main.humidity}%,
            ${previsao.weather[0].description}
        `)
    }
})
