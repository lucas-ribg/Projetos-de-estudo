const express = require('express')
const app = express()
app.use(express.json())

//POST
//localhost:8080/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(5000, () => {
    console.log('Observacoes. Porta 5000.')
})