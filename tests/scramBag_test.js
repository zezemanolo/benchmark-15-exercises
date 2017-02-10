import { expect } from 'chai'
import { scramBag } from '../src/scramBag.js'

describe('scramBag()', () => {
  it('should be a function', () => {
    expect(scramBag).to.be.a('function')
  })
  it('return remaining tiles with updated amount(value) remaining', () => {
    const input = ('AERETOXMYCNS_B')
    expect(scramBag(input)).to.eql({ A:8,
      B:1,
      C:1,
      D:4,
      E:10,
      F:2,
      G:3,
      H:2,
      I:9,
      J:1,
      K:1,
      L:4,
      M:1,
      N:5,
      O:7,
      P:2,
      Q:1,
      R:5,
      S:3,
      T:5,
      U:4,
      V:2,
      W:2,
      X:0,
      Y:1,
      Z:1,
      _:1 })
  })
  it('return remaining tiles with updated amount(value) remaining based on original bag contents', () => {
    const input = ('FRGVXASDWQPOOEEE_Z')
    expect(scramBag(input)).to.eql({ A:8,
      B:2,
      C:2,
      D:3,
      E:9,
      F:1,
      G:2,
      H:2,
      I:9,
      J:1,
      K:1,
      L:4,
      M:2,
      N:6,
      O:6,
      P:1,
      Q:0,
      R:5,
      S:3,
      T:6,
      U:4,
      V:1,
      W:1,
      X:0,
      Y:2,
      Z:0,
      _:1 })
  })
})
