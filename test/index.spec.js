const BigInteger = require('bigi')

const curveHFixtures = require('./fixtures/curve-h')
const secp256k1 = require('../src')

const SECP256K1_G = secp256k1.g.curve
const SECP256K1_H = secp256k1.h.curve

const getFixtureByMultiplier = (fixtures, multiplier) => {
  return fixtures.find((f) => {
    return f.multiplier === multiplier
  })
}

describe('secp256k1', () => {
  // H curve tests are based on Gary Yu's commented secp256k1-zkp Rust library
  // https://github.com/garyyu/rust-secp256k1-zkp/wiki/Pedersen-Commitment#run-code-to-check
  describe('h generator', () => {
    describe('multipliers', () => {
      test('one', () => {
        const fixture = getFixtureByMultiplier(curveHFixtures, 1)
        const bigIntOne = new BigInteger('1')
        const curveH = SECP256K1_H.G.multiply(bigIntOne)
        const curveHPointX = curveH.affineX.toHex()

        expect(curveHPointX).toEqual(fixture.coordinates.x)
      })

      test('two', () => {
        const fixture = getFixtureByMultiplier(curveHFixtures, 2)
        const bigIntTwo = new BigInteger('2')
        const curveH = SECP256K1_H.G.multiply(bigIntTwo)
        const curveHPointX = curveH.affineX.toHex()

        expect(curveHPointX).toEqual(fixture.coordinates.x)
      })

      test('three', () => {
        const fixture = getFixtureByMultiplier(curveHFixtures, 3)
        const bigIntThree = new BigInteger('3')
        const curveH = SECP256K1_H.G.multiply(bigIntThree)
        const curveHPointX = curveH.affineX.toHex()

        expect(curveHPointX).toEqual(fixture.coordinates.x)
      })
    })
  })
})
