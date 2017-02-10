import { expect } from 'chai'
import { stringIndices } from '../src/stringIndices.js'

describe('stringIndices()', () => {
  it('should be a function', () => {
    expect(stringIndices).to.be.a('function')
  })
  it('returns value of index', () => {
    expect(stringIndices('Zeze loves dim sum', 3)).to.equal('sum')
  })
  it('returns empty string if calling on index that is greater than randomString.length', () => {
    expect(stringIndices('Moar noodz por favor!', 7)).to.equal('')
  })
  it('returns empty string if calling on negative index', () => {
    expect(stringIndices('Yaddadadadamean?', -2)).to.equal('')
  })
})
