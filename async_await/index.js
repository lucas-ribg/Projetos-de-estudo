require('dotenv').config()

const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

console.log(url)