'use strict'

const guid = require('guid')

const apiResponse = require('../common/ApiResponse.js')


function SuggestionItemEndpoint(SuggestionItemStore) {

  const ENDPOINT = '/api/suggestion-item'


  function register(app) {
    app.get(ENDPOINT, _get)
    app.post(ENDPOINT, _post)
    app.put(ENDPOINT, _put)
    app.delete(ENDPOINT, _delete)
  }

  function _get(req, res) {
    apiResponse.http200(req, res,
      {
        items: SuggestionItemStore.list()
      }
    )
  }

  function _post(req, res) {
    const item = req.body.item
    if (!item) {
      apiResponse.http400(req, res)
      return
    }

    item.guid = guid.raw()
    SuggestionItemStore.add(item)
    apiResponse.http200(req, res, {message: 'success'})
  }

  function _put(req, res) {
    const item = req.body.item
    if (!item) {
      apiResponse.http400(req, res)
      return
    }

    SuggestionItemStore.update(item)
    apiResponse.http200(req, res, {message: 'success'})
  }

  function _delete(req, res) {
    const item = req.body.item
    if (!item) {
      apiResponse.http400(req, res)
      return
    }

    SuggestionItemStore.remove(item)
    apiResponse.http200(req, res, {message: 'success'})
  }

  const api = {
    register:register
  }

  return api
}

module.exports = SuggestionItemEndpoint

