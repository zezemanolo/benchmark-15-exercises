import chai, { expect } from 'chai'
import { stringIndices } from '../src/stringIndices.js'

describe('stringIndices()', () => {
  it('should be a function', () => {
    expect(stringIndices).to.be.a('function')
  })
  it('returns value of index', () => {
    const randomString = 'Zeze loves dim sum'
    expect(stringIndices(randomString, 3)).to.equal('sum')
  })
  it('returns empty string if calling on index that is greater than randomString.length', () => {
    const randomString = 'Moar noodz por favor!'
    expect(stringIndices(randomString, 7)).to.equal('')
  })
  it('returns empty string if calling on negative index', () => {
    const randomString = 'Yaddadadadamean?'
    expect(stringIndices(randomString, -2)).to.equal('')
  })
})
