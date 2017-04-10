'use strict'

const bodyParser = require('body-parser')
const express = require('express')


const categoryStore = require('./app/category/CategoryStore.js')
const categoryEndpointModule = require('./app/category/CategoryEndpoint.js')


const appPort = process.env.PORT || 8888

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const categoryInitPromise = categoryStore.init()

const categoryEndpoint = categoryEndpointModule(categoryStore)
categoryEndpoint.register(app)

const server = app.listen(appPort, () => {
  console.log('Web-app listening at port ' + appPort)
})

