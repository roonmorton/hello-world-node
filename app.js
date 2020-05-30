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
        version: "3.5.0.0_dev",
        Hostname: os.hostname(),
        "IP Address": ip.address()
    })
})
app.listen(PORT, HOST)
console.log(`Running on port ${PORT}`)