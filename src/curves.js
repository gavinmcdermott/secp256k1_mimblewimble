const BigInteger = require('bigi')
const ecurve = require('ecurve')

// TODO: Figure out the best way to match the compressed generator formatting
// https://github.com/garyyu/rust-secp256k1-zkp/wiki/Pedersen-Commitment#ec-parameters
//
// 2 (hex 0x02) represent Y is even.
// 3 (hex 0x03) represent Y is odd.
module.exports.msbIsOdd = (num) => num === 2

module.exports.getPointFromCompressedGenerator = (curve, compressedGenerator) => {
  const isOdd = module.exports.msbIsOdd(compressedGenerator[0])
  const pointBuffer = compressedGenerator.slice(1)
  return curve.pointFromX(isOdd, BigInteger.fromBuffer(pointBuffer))
}

module.exports.getCurveFromCompressedGenerator = (curve, compressedGenerator) => {
  const CURVE_POINT = module.exports.getPointFromCompressedGenerator(curve, compressedGenerator)

  const p = curve.p
  const a = curve.a
  const b = curve.b

  const Gx = BigInteger.fromHex(CURVE_POINT.x.toHex())
  const Gy = BigInteger.fromHex(CURVE_POINT.y.toHex())

  const n = curve.n
  const h = curve.h

  // Argument order: p, a, b, Gx, Gy, n, h
  return new ecurve.Curve(p, a, b, Gx, Gy, n, h)
}
