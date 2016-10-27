const {equal} = require('assert')
const adder = require('../lib/adder')

describe('Adder', () => {
    it('adder(5) == 5', () => {
        // expect(adder(5) == 5).to.be.ok
        equal(adder(5), 5)
    })
})

