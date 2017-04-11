'use strict'

const _ = require('lodash')


function SuggestionBoxStore() {

  let boxes = []


  function init() {
    return new Promise((resolve) => {
      const boxData = require('../../data/box.json')
      boxes = _.cloneDeep(boxData)
      resolve()
    })
  }

  function add(box) {
    boxes = _.concat(boxes, box)
  }

  function list() {
    return _.cloneDeep(boxes)
  }

  function remove(box) {
    const newBoxes = _.filter(boxes, b => box.guid !== b.guid)
    boxes = newBoxes
  }

  function update(box) {
    const updateBox = _.find(boxes, b => box.guid === b.guid)
    if (updateBox) {
      remove(updateBox)
      add(box)
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


const suggestionBoxStore = SuggestionBoxStore()
module.exports = suggestionBoxStore

