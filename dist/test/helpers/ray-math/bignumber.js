import BigNumber from 'bignumber.js';
export var BigNumberZD = BigNumber.clone({
    DECIMAL_PLACES: 0,
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
});
export function valueToBigNumber(amount) {
    return new BigNumber(amount.toString());
}
export function valueToZDBigNumber(amount) {
    return new BigNumberZD(amount.toString());
}
//# sourceMappingURL=bignumber.js.map