'use strict'
const express = require('express')
const os = require("os")
const ip = require('ip')
const PORT = 8080
const HOST = '0.0.0.0'
const app = express()
app.get('/', (req, res) => {
    res.jsonp({
        message: "Hello World!",
        version: "4.0.0.0",
        Hostname: os.hostname(),
        "IP Address": ip.address(),
        Platform: os.platform()
    })
})
app.listen(PORT, HOST)
console.log(`Running on port ${PORT}`)