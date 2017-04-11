'use strict'

const chai = require('chai')
const expect = chai.expect


const SuggestionItemStoreModule = require('../../app/suggestion-item/SuggestionItemStore.js')


describe('SuggestionItemStore', () => {

  let initPromise

  beforeEach(() => {
    initPromise = SuggestionItemStoreModule.init()
  })

  it('exists', () => {
    expect(SuggestionItemStoreModule).to.exist
  })


  describe('init()', () => {

    it('loads data and these are available', (done) => {
      initPromise
        .then(() => {
          const items = SuggestionItemStoreModule.list()
          expect(items).to.exist
          expect(items).to.be.an('array')
          expect(items).to.have.lengthOf(2)
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
          SuggestionItemStoreModule.add({text: 'Cool'})
          const items = SuggestionItemStoreModule.list()
          expect(items).to.have.lengthOf(3)
          expect(items[2].text).to.be.equal('Cool')
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
          SuggestionItemStoreModule.remove({guid: 'QWER'})
          const items = SuggestionItemStoreModule.list()
          expect(items).to.have.lengthOf(1)
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
          SuggestionItemStoreModule.update({guid: 'QWER', text: 'new text'})
          const items = SuggestionItemStoreModule.list()
          expect(items).to.have.lengthOf(2)
          expect(items[1].text).to.be.eql('new text')
          done()
        })
        .catch((err) => {
          console.error('Should never reach catch()')
        })
    })

  })

})
