"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRewards = void 0;
var bignumber_1 = require("../../helpers/ray-math/bignumber");
function getRewards(balance, assetIndex, userIndex, precision) {
    if (precision === void 0) { precision = 18; }
    return bignumber_1.valueToZDBigNumber(balance)
        .multipliedBy(bignumber_1.valueToZDBigNumber(assetIndex).minus(userIndex.toString()))
        .dividedBy(bignumber_1.valueToZDBigNumber(10).exponentiatedBy(precision));
}
exports.getRewards = getRewards;
//# sourceMappingURL=base-math.js.map