const app = require('./app')
let { PORT } = require('./config')

PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})