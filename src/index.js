const ecurve = require('ecurve')

const { COMPRESSED_GENERATOR_H, COMPRESSED_GENERATOR_G } = require('./generators')
const { getCurveFromCompressedGenerator } = require('./curves')

const SECP256K1_PARAMS = ecurve.getCurveByName('secp256k1')

const SECP256K1_G = getCurveFromCompressedGenerator(SECP256K1_PARAMS, COMPRESSED_GENERATOR_G)
const SECP256K1_H = getCurveFromCompressedGenerator(SECP256K1_PARAMS, COMPRESSED_GENERATOR_H)

module.exports = {
  g: {
    curve: SECP256K1_G,
    compressedGenerator: COMPRESSED_GENERATOR_G
  },
  h: {
    curve: SECP256K1_H,
    compressedGenerator: COMPRESSED_GENERATOR_H
  }
}
