'use strict'

const chai = require('chai')
const expect = chai.expect


const CategoryStoreModule = require('../../app/category/CategoryStore.js')


describe('CategoryStore', () => {

  let initPromise

  beforeEach(() => {
    initPromise = CategoryStoreModule.init()
  })

  it('exists', () => {
    expect(CategoryStoreModule).to.exist
  })


  describe('init()', () => {

    it('loads data and these are available', (done) => {
      initPromise
        .then(() => {
          const categories = CategoryStoreModule.list()
          expect(categories).to.exist
          expect(categories).to.be.an('array')
          expect(categories).to.have.lengthOf(5)
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
          CategoryStoreModule.add('New Category')
          const categories = CategoryStoreModule.list()
          expect(categories).to.have.lengthOf(6)
          expect(categories).to.include({name: 'New Category'})
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
          CategoryStoreModule.remove('Management')
          const categories = CategoryStoreModule.list()
          expect(categories).to.have.lengthOf(4)
          expect(categories).not.to.include({name: 'Management'})
          done()
        })
        .catch((err) => {
          console.error('Should never reach catch()')
        })
    })

  })

})
