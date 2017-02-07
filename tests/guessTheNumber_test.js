import chai, { expect } from 'chai'
import { guessTheNumber } from '../src/guessTheNumber.js'

describe('guessTheNumber()', () => {
  it('should be a function', () => {
    expect(guessTheNumber).to.be.a('function')
  })
  it('alerts user if input is not an integer', () => {
    const randomNum = Math.floor(Math.random() * 100)
    expect(guessTheNumber('d')).to.equal('Insert only integers RAWR!!!')
  })
  it('alerts user if parameter is empty string', () => {
    const randomNum = Math.floor(Math.random() * 100)
    expect(guessTheNumber('')).to.equal('Insert only integers RAWR!!!')
  })
})