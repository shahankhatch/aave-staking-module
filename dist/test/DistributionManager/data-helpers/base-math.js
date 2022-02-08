import { valueToZDBigNumber } from '../../helpers/ray-math/bignumber';
export function getRewards(balance, assetIndex, userIndex, precision) {
    if (precision === void 0) { precision = 18; }
    return valueToZDBigNumber(balance)
        .multipliedBy(valueToZDBigNumber(assetIndex).minus(userIndex.toString()))
        .dividedBy(valueToZDBigNumber(10).exponentiatedBy(precision));
}
//# sourceMappingURL=base-math.js.map