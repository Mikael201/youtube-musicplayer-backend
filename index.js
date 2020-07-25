require('dotenv').config();
const express = require('express')
const Song = require('./Song')
const app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
app.use(cors())
app.use(express.static('build'))

app.get('/all', (request, response) => {
    Song.find({

    }).then(dataArray => {
        response.status(200).json({
            data: dataArray
        })
    }).catch(e => console.log(e))
})

app.post('/song', jsonParser, (request, response) => {
    console.log("tulee")
    const body = request.body
    console.log(request.body.videoid)
    console.log(request.body)
    const song = new Song({
        videoid: body.videoid,
        title: body.title
    })
    song.save()
        .then(savedScore => {
            response.status(200).json({
                song: savedScore
            })
        }).catch(e => console.log(e))
})

app.delete('/song/:videoid', (request, response) => {
    Song.deleteOne({
        videoid: request.params.videoid
    }).then(data => {
        response.status(200).json(data)
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})