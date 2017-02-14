import { expect } from 'chai'
import { guessTheNumber } from '../src/guessTheNumber.js'

describe('guessTheNumber()', () => {
  it('should be a function', () => {
    expect(guessTheNumber).to.be.a('function')
  })
  it('alerts user if input is not an integer', () => {
    expect(guessTheNumber('d')).to.equal('Insert only integers RAWR!!!')
  })
  it('alerts user if parameter is empty string', () => {
    expect(guessTheNumber('')).to.equal('Insert only integers RAWR!!!')
  })
  it('returns string if input < randomNum', () => {
    expect(guessTheNumber(1)).to.equal('Your guess is kinda low')
  })
  it('returns string if input > randomNum', () => {
    expect(guessTheNumber(100)).to.equal('You too high!!!')
  })
})
