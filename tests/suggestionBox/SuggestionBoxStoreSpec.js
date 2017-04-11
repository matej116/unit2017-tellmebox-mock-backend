'use strict'

const chai = require('chai')
const expect = chai.expect


const SuggestionBoxStoreModule = require('../../app/suggestion-box/SuggestionBoxStore.js')


describe('SuggestionBoxStore', () => {

  let initPromise

  beforeEach(() => {
    initPromise = SuggestionBoxStoreModule.init()
  })

  it('exists', () => {
    expect(SuggestionBoxStoreModule).to.exist
  })


  describe('init()', () => {

    it('loads data and these are available', (done) => {
      initPromise
        .then(() => {
          const boxes = SuggestionBoxStoreModule.list()
          expect(boxes).to.exist
          expect(boxes).to.be.an('array')
          expect(boxes).to.have.lengthOf(3)
          done()
        })
        .catch(() => {
          console.error('Should never reach catch()')
        })
    })

  })


  describe('add()', () => {

    it('adds item to array', (done) => {
      initPromise
        .then(() => {
          SuggestionBoxStoreModule.add({name: 'Suggestion Box 1', url: 'aaa-bbb-ccc'})
          const boxes = SuggestionBoxStoreModule.list()
          expect(boxes).to.have.lengthOf(4)
          expect(boxes).to.include({name: 'Suggestion Box 1', url: 'aaa-bbb-ccc'})
          done()
        })
        .catch((err) => {
          console.error('Should never reach catch()')
        })
    })

  })


  describe('remove()', () => {

    it('removes item from array', (done) => {
      initPromise
        .then(() => {
          SuggestionBoxStoreModule.remove({guid: 'ABCD'})
          const boxes = SuggestionBoxStoreModule.list()
          expect(boxes).to.have.lengthOf(2)
          done()
        })
        .catch((err) => {
          console.error('Should never reach catch()')
        })
    })

  })


  describe('update()', () => {

    it('update item in array', (done) => {
      initPromise
        .then(() => {
          SuggestionBoxStoreModule.update({guid: 'ABCD', url: 'aaa-bbb-ccc'})
          const boxes = SuggestionBoxStoreModule.list()
          expect(boxes).to.have.lengthOf(3)
          expect(boxes[2].url).to.be.eql('aaa-bbb-ccc')
          done()
        })
        .catch((err) => {
          console.error('Should never reach catch()')
        })
    })

  })

})
