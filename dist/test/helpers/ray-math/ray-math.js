"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayToDecimal = exports.rayPow = exports.wadToRay = exports.rayToWad = exports.rayDiv = exports.rayMul = exports.wadDiv = exports.wadMul = exports.WAD_RAY_RATIO = exports.HALF_RAY = exports.RAY = exports.HALF_WAD = exports.WAD = void 0;
var bignumber_1 = require("./bignumber");
exports.WAD = bignumber_1.valueToZDBigNumber(10).pow(18);
exports.HALF_WAD = exports.WAD.dividedBy(2);
exports.RAY = bignumber_1.valueToZDBigNumber(10).pow(27);
exports.HALF_RAY = exports.RAY.dividedBy(2);
exports.WAD_RAY_RATIO = bignumber_1.valueToZDBigNumber(10).pow(9);
function wadMul(a, b) {
    return exports.HALF_WAD.plus(bignumber_1.valueToZDBigNumber(a).multipliedBy(b.toString())).div(exports.WAD);
}
exports.wadMul = wadMul;
function wadDiv(a, b) {
    var halfB = bignumber_1.valueToZDBigNumber(b).div(2);
    return halfB.plus(bignumber_1.valueToZDBigNumber(a).multipliedBy(exports.WAD)).div(b.toString());
}
exports.wadDiv = wadDiv;
function rayMul(a, b) {
    return exports.HALF_RAY.plus(bignumber_1.valueToZDBigNumber(a).multipliedBy(b.toString())).div(exports.RAY);
}
exports.rayMul = rayMul;
function rayDiv(a, b) {
    var halfB = bignumber_1.valueToZDBigNumber(b).div(2);
    return halfB.plus(bignumber_1.valueToZDBigNumber(a).multipliedBy(exports.RAY)).div(b.toString());
}
exports.rayDiv = rayDiv;
function rayToWad(a) {
    var halfRatio = bignumber_1.valueToZDBigNumber(exports.WAD_RAY_RATIO).div(2);
    return halfRatio.plus(a.toString()).div(exports.WAD_RAY_RATIO);
}
exports.rayToWad = rayToWad;
function wadToRay(a) {
    return bignumber_1.valueToZDBigNumber(a).multipliedBy(exports.WAD_RAY_RATIO).decimalPlaces(0);
}
exports.wadToRay = wadToRay;
function rayPow(a, p) {
    var x = bignumber_1.valueToZDBigNumber(a);
    var n = bignumber_1.valueToZDBigNumber(p);
    var z = !n.modulo(2).eq(0) ? x : bignumber_1.valueToZDBigNumber(exports.RAY);
    for (n = n.div(2); !n.eq(0); n = n.div(2)) {
        x = rayMul(x, x);
        if (!n.modulo(2).eq(0)) {
            z = rayMul(z, x);
        }
    }
    return z;
}
exports.rayPow = rayPow;
function rayToDecimal(a) {
    return bignumber_1.valueToZDBigNumber(a).dividedBy(exports.RAY);
}
exports.rayToDecimal = rayToDecimal;
//# sourceMappingURL=ray-math.js.map