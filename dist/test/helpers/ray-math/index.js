"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNormalizedDistribution = exports.getLinearCumulatedRewards = void 0;
var bignumber_1 = require("./bignumber");
function getLinearCumulatedRewards(emissionPerSecond, lastUpdateTimestamp, currentTimestamp) {
    var timeDelta = bignumber_1.valueToZDBigNumber(currentTimestamp).minus(lastUpdateTimestamp.toString());
    return timeDelta.multipliedBy(emissionPerSecond.toString());
}
exports.getLinearCumulatedRewards = getLinearCumulatedRewards;
function getNormalizedDistribution(balance, oldIndex, emissionPerSecond, lastUpdateTimestamp, currentTimestamp, emissionEndTimestamp, precision) {
    if (precision === void 0) { precision = 18; }
    if (balance.toString() === '0' ||
        bignumber_1.valueToZDBigNumber(lastUpdateTimestamp).gte(emissionEndTimestamp.toString())) {
        return bignumber_1.valueToZDBigNumber(oldIndex);
    }
    var linearReward = getLinearCumulatedRewards(emissionPerSecond, lastUpdateTimestamp, bignumber_1.valueToZDBigNumber(currentTimestamp).gte(emissionEndTimestamp.toString())
        ? emissionEndTimestamp
        : currentTimestamp);
    return linearReward
        .multipliedBy(bignumber_1.valueToZDBigNumber(10).exponentiatedBy(precision))
        .div(balance.toString())
        .plus(oldIndex.toString());
}
exports.getNormalizedDistribution = getNormalizedDistribution;
//# sourceMappingURL=index.js.map