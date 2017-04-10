'use strict'

const _ = require('lodash')


function CategoryStore() {

  let categories = []


  function init() {
    return new Promise((resolve) => {
      const categoryData = require('../../data/category.json')
      categories = _.cloneDeep(categoryData)
      resolve()
    })
  }

  function add(categoryName) {
    categories = _.concat(categories, {name: categoryName})
  }

  function list() {
    return _.cloneDeep(categories)
  }

  function remove(categoryName) {
    const newCategories = _.filter(categories, category => category.name !== categoryName)
    categories = newCategories
  }


  const api = {
    add: add,
    init: init,
    list: list,
    remove: remove
  }

  return api

}


const categoryStore = CategoryStore()
module.exports = categoryStore

