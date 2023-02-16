const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/rotaTeste',(req, res) => {
//     res.send(`<h1>Rota teste !</h1>`)
// })

/**
 * Para reconhecer outras pastas do projeto 
 * como pasta de arquivos css, de imagem, etc...
 */
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

https://runkit.com/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}_${__dirname}`)
})