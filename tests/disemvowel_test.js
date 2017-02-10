import { expect } from 'chai'
import { disemvowel } from '../src/disemvowel.js'

describe('disemvowel()', () => {
  it('should be a function', () => {
    expect(disemvowel).to.be.a('function')
  })
  it('return string without vowels or spaces', () => {
    expect(disemvowel('cash me ousside')).to.eql('cshmssd')
  })
  it('case-sensitivity is not an issue', () => {
    expect(disemvowel('I LOVE REG EXPRESSIONS RAWRRR')).to.eql('lvrgxprssnsrwrrr')
  })
  it('it also filters out special characters and numbers!', () => {
    expect(disemvowel('!?!?324 Wee*!!')).to.eql('w')
  })
})
