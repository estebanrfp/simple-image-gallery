const express = require('express')
var stylus = require('stylus')
var timeago = require('ts-wrapper')

const app = express()
const PORT = 8080

app.use(express.static('public'))
app.set('views', __dirname + '/public')
app.set('view engine', 'pug')

// app.use(stylus.middleware({
//   src: __dirname + '/views',
//   dest: __dirname + '/views',
//   debug: true,
//   force: true
// }))

app.get('/', function (req, res) {

    var test = [
        {
            live_preview_url: '/images/foto-dagrid-001.jpg',
            item: "Nuevo centro 1",
        },
        {
            live_preview_url: "/images/foto-dagrid-002.jpg",
            item: "Nuevo centro 2",
        },
        {
            live_preview_url: "/images/foto-dagrid-003.jpg",
            item: "nuevo centro 3",
        },
        {
            live_preview_url: "/images/foto-dagrid-004.jpg",
            item: "nuevo centro 4",
        },
        {
            live_preview_url: "/images/foto-dagrid-005.jpg",
            item: "nuevo centro 5",
        },
        {
            live_preview_url: "/images/foto-dagrid-006.jpg",
            item: "nuevo centro 6",
        },
        {
            live_preview_url: "/images/foto-dagrid-007.jpg",
            item: "nuevo centro 7",
        },
        {
            live_preview_url: "/images/foto-dagrid-008.jpg",
            item: "nuevo centro 8",
        },
        {
            live_preview_url: "/images/foto-dagrid-009.jpg",
            item: "nuevo centro 9",
        },
        {
            live_preview_url: "/images/foto-dagrid-010.jpg",
            item: "nuevo centro 10",
        },
        {
            live_preview_url: "/images/foto-dagrid-011.jpg",
            item: "nuevo centro 11",
        },
        {
            live_preview_url: "/images/foto-dagrid-012.jpg",
            item: "nuevo centro 12",
        }
    ]

    res.render('index', { title: 'Hey',  items: test})
})

app.listen(PORT)

console.log('Running on http://localhost:' + PORT)

