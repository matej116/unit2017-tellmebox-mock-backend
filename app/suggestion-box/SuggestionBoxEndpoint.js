'use strict'

const guid = require('guid')

const apiResponse = require('../common/ApiResponse.js')


function SuggestionBoxEndpoint(SuggestionBoxStore) {

  const ENDPOINT = '/api/suggestion-box'


  function register(app) {
    app.get(ENDPOINT, _get)
    app.post(ENDPOINT, _post)
    app.put(ENDPOINT, _put)
    app.delete(ENDPOINT, _delete)
  }

  function _get(req, res) {
    apiResponse.http200(req, res,
      {
        boxes: SuggestionBoxStore.list()
      }
    )
  }

  function _post(req, res) {
    const box = req.body.box
    if (!box) {
      apiResponse.http400(req, res)
      return
    }

    box.guid = guid.raw()
    SuggestionBoxStore.add(box)
    apiResponse.http200(req, res, {message: 'success'})
  }

  function _put(req, res) {
    const box = req.body.box
    if (!box) {
      apiResponse.http400(req, res)
      return
    }

    SuggestionBoxStore.update(box)
    apiResponse.http200(req, res, {message: 'success'})
  }

  function _delete(req, res) {
    const box = req.body.box
    if (!box) {
      apiResponse.http400(req, res)
      return
    }

    SuggestionBoxStore.remove(box)
    apiResponse.http200(req, res, {message: 'success'})
  }

  const api = {
    register:register
  }

  return api
}

module.exports = SuggestionBoxEndpoint

