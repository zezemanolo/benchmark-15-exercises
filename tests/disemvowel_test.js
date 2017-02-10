import { expect } from 'chai'
import { disemvowel } from '../src/disemvowel.js'

describe('disemvowel()', () => {
  it('should be a function', () => {
    expect(disemvowel).to.be.a('function')
  })
  it('return string without vowels or spaces', () => {
    const someString = 'cash me ousside'
    expect(disemvowel(someString)).to.eql('cshmssd')
  })
  it('case-sensitivity is not an issue', () => {
    const someString = 'I LOVE REG EXPRESSIONS RAWRRR'
    expect(disemvowel(someString)).to.eql('lvrgxprssnsrwrrr')
  })
  it('also ignores special characters and numbers!', () => {
    const someString = '!?!? Stupid, Dumb, and Hyphy! 510!!'
    expect(disemvowel(someString)).to.eql('stpddmbndhyphy')
  })
})
