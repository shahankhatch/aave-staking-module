import { valueToZDBigNumber } from './bignumber';
export function getLinearCumulatedRewards(emissionPerSecond, lastUpdateTimestamp, currentTimestamp) {
    var timeDelta = valueToZDBigNumber(currentTimestamp).minus(lastUpdateTimestamp.toString());
    return timeDelta.multipliedBy(emissionPerSecond.toString());
}
export function getNormalizedDistribution(balance, oldIndex, emissionPerSecond, lastUpdateTimestamp, currentTimestamp, emissionEndTimestamp, precision) {
    if (precision === void 0) { precision = 18; }
    if (balance.toString() === '0' ||
        valueToZDBigNumber(lastUpdateTimestamp).gte(emissionEndTimestamp.toString())) {
        return valueToZDBigNumber(oldIndex);
    }
    var linearReward = getLinearCumulatedRewards(emissionPerSecond, lastUpdateTimestamp, valueToZDBigNumber(currentTimestamp).gte(emissionEndTimestamp.toString())
        ? emissionEndTimestamp
        : currentTimestamp);
    return linearReward
        .multipliedBy(valueToZDBigNumber(10).exponentiatedBy(precision))
        .div(balance.toString())
        .plus(oldIndex.toString());
}
//# sourceMappingURL=index.js.map