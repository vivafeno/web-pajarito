const express = require('express')
const path =  require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options

    const app = express()

    // MIDDLEWARES
    app.use(express.static(public_path))

    app.get('*', (req,res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.clear()
        console.log(`Escuchando en el puerto ${port}...`)
        console.log(`URL ACTIVA ==> http://localhost:${port}`)
    })

}

module.exports = {
    startServer
}