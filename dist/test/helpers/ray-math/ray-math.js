import { valueToZDBigNumber } from './bignumber';
export var WAD = valueToZDBigNumber(10).pow(18);
export var HALF_WAD = WAD.dividedBy(2);
export var RAY = valueToZDBigNumber(10).pow(27);
export var HALF_RAY = RAY.dividedBy(2);
export var WAD_RAY_RATIO = valueToZDBigNumber(10).pow(9);
export function wadMul(a, b) {
    return HALF_WAD.plus(valueToZDBigNumber(a).multipliedBy(b.toString())).div(WAD);
}
export function wadDiv(a, b) {
    var halfB = valueToZDBigNumber(b).div(2);
    return halfB.plus(valueToZDBigNumber(a).multipliedBy(WAD)).div(b.toString());
}
export function rayMul(a, b) {
    return HALF_RAY.plus(valueToZDBigNumber(a).multipliedBy(b.toString())).div(RAY);
}
export function rayDiv(a, b) {
    var halfB = valueToZDBigNumber(b).div(2);
    return halfB.plus(valueToZDBigNumber(a).multipliedBy(RAY)).div(b.toString());
}
export function rayToWad(a) {
    var halfRatio = valueToZDBigNumber(WAD_RAY_RATIO).div(2);
    return halfRatio.plus(a.toString()).div(WAD_RAY_RATIO);
}
export function wadToRay(a) {
    return valueToZDBigNumber(a).multipliedBy(WAD_RAY_RATIO).decimalPlaces(0);
}
export function rayPow(a, p) {
    var x = valueToZDBigNumber(a);
    var n = valueToZDBigNumber(p);
    var z = !n.modulo(2).eq(0) ? x : valueToZDBigNumber(RAY);
    for (n = n.div(2); !n.eq(0); n = n.div(2)) {
        x = rayMul(x, x);
        if (!n.modulo(2).eq(0)) {
            z = rayMul(z, x);
        }
    }
    return z;
}
export function rayToDecimal(a) {
    return valueToZDBigNumber(a).dividedBy(RAY);
}
//# sourceMappingURL=ray-math.js.map