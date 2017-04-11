'use strict'

const bodyParser = require('body-parser')
const express = require('express')


const categoryStore = require('./app/category/CategoryStore.js')
const suggestionBoxStore = require('./app/suggestion-box/SuggestionBoxStore.js')
const suggestionItemStore = require('./app/suggestion-item/SuggestionItemStore.js')

const categoryEndpointModule = require('./app/category/CategoryEndpoint.js')
const suggestionBoxEndpointModule = require('./app/suggestion-box/SuggestionBoxEndpoint.js')
const suggestionItemEndpointModule = require('./app/suggestion-item/SuggestionItemEndpoint.js')


const appPort = process.env.PORT || 8888

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const categoryInitPromise = categoryStore.init()
const suggestionBoxInitPromise = suggestionBoxStore.init()
const suggestionItemInitPromise = suggestionItemStore.init()

const categoryEndpoint = categoryEndpointModule(categoryStore)
const suggestionBoxEndpoint = suggestionBoxEndpointModule(suggestionBoxStore)
const suggestionItemEndpoint = suggestionItemEndpointModule(suggestionItemStore)
categoryEndpoint.register(app)
suggestionBoxEndpoint.register(app)
suggestionItemEndpoint.register(app)

const server = app.listen(appPort, () => {
  console.log('Web-app listening at port ' + appPort)
})

