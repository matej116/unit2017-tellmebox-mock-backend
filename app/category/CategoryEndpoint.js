'use strict'

const apiResponse = require('../common/ApiResponse.js')


function CategoryEndpoint(CategoryStore) {

  const ENDPOINT = '/category'


  function register(app) {
    app.get(ENDPOINT, _get)
    app.post(ENDPOINT, _post)
    app.put(ENDPOINT, apiResponse.http405)
    app.delete(ENDPOINT, _delete)
  }

  function _get(req, res) {
    apiResponse.http200(req, res,
      {
        categories: CategoryStore.list()
      }
    )
  }

  function _post(req, res) {
    const categoryName = req.body.name
    if (!categoryName) {
      apiResponse.http400(req, res)
      return
    }

    CategoryStore.add(categoryName)
    apiResponse.http200(req, res, {message: 'success'})
  }

  function _delete(req, res) {
    const categoryName = req.body.name
    if (!categoryName) {
      apiResponse.http400(req, res)
      return
    }

    CategoryStore.remove(categoryName)
    apiResponse.http200(req, res, {message: 'success'})
  }

  const api = {
    register:register
  }

  return api
}

module.exports = CategoryEndpoint

