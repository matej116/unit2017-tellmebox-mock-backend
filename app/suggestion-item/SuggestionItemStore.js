'use strict'

const _ = require('lodash')


function SuggestionItemStore() {

  let items = []


  function init() {
    return new Promise((resolve) => {
      const itemData = require('../../data/item.json')
      items = _.cloneDeep(itemData)
      resolve()
    })
  }

  function add(item) {
    items = _.concat(items, item)
  }

  function list() {
    return _.cloneDeep(items)
  }

  function remove(item) {
    const newItems = _.filter(items, i => item.guid !== i.guid)
    items = newItems
  }

  function update(item) {
    const updateItem = _.find(items, i => item.guid === i.guid)
    if (updateItem) {
      remove(updateItem)
      add(item)
    }
  }


  const api = {
    add: add,
    init: init,
    list: list,
    remove: remove,
    update: update
  }

  return api

}


const suggestionItemStore = SuggestionItemStore()
module.exports = suggestionItemStore

