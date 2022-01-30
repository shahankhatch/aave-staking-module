"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
var make_suite_1 = require("../helpers/make-suite");
var base_math_1 = require("../DistributionManager/data-helpers/base-math");
var asset_user_data_1 = require("../DistributionManager/data-helpers/asset-user-data");
var asset_data_1 = require("../DistributionManager/data-helpers/asset-data");
var misc_utils_1 = require("../../helpers/misc-utils");
var ray_math_1 = require("../helpers/ray-math");
var contracts_helpers_1 = require("../../helpers/contracts-helpers");
var getRewardsBalanceScenarios = [
    {
        caseName: 'Accrued rewards are 0',
        emissionPerSecond: '0',
    },
    {
        caseName: 'Accrued rewards are not 0',
        emissionPerSecond: '2432424',
    },
    {
        caseName: 'Accrued rewards are not 0',
        emissionPerSecond: '2432424',
    },
];
make_suite_1.makeSuite('AaveIncentivesController getRewardsBalance tests', function (testEnv) {
    var e_1, _a;
    var _loop_1 = function (caseName, emissionPerSecond) {
        it(caseName, function () { return __awaiter(void 0, void 0, void 0, function () {
            var aaveIncentivesController, users, aDaiMock, distributionEndTimestamp, userAddress, stakedByUser, totalStaked, underlyingAsset, _a, _b, lastTxReceipt, _c, lastTxTimestamp, unclaimedRewardsBefore, unclaimedRewards, userIndex, assetData, expectedAssetIndex, expectedAccruedRewards;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(100)];
                    case 1:
                        _d.sent();
                        aaveIncentivesController = testEnv.aaveIncentivesController, users = testEnv.users, aDaiMock = testEnv.aDaiMock;
                        return [4 /*yield*/, aaveIncentivesController.DISTRIBUTION_END()];
                    case 2:
                        distributionEndTimestamp = _d.sent();
                        userAddress = users[1].address;
                        stakedByUser = 22 * caseName.length;
                        totalStaked = 33 * caseName.length;
                        underlyingAsset = aDaiMock.address;
                        _a = misc_utils_1.advanceBlock;
                        return [4 /*yield*/, misc_utils_1.timeLatest()];
                    case 3: 
                    // update emissionPerSecond in advance to not affect user calculations
                    return [4 /*yield*/, _a.apply(void 0, [(_d.sent()).plus(100).toNumber()])];
                    case 4:
                        // update emissionPerSecond in advance to not affect user calculations
                        _d.sent();
                        if (!emissionPerSecond) return [3 /*break*/, 6];
                        return [4 /*yield*/, aaveIncentivesController.configureAssets([
                                { emissionPerSecond: emissionPerSecond, underlyingAsset: underlyingAsset, totalStaked: totalStaked },
                            ])];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [4 /*yield*/, aDaiMock.handleActionOnAic(userAddress, stakedByUser, totalStaked)];
                    case 7:
                        _d.sent();
                        _b = misc_utils_1.advanceBlock;
                        return [4 /*yield*/, misc_utils_1.timeLatest()];
                    case 8: return [4 /*yield*/, _b.apply(void 0, [(_d.sent()).plus(100).toNumber()])];
                    case 9:
                        _d.sent();
                        _c = misc_utils_1.waitForTx;
                        return [4 /*yield*/, aDaiMock.setUserBalanceAndSupply(stakedByUser, totalStaked)];
                    case 10: return [4 /*yield*/, _c.apply(void 0, [_d.sent()])];
                    case 11:
                        lastTxReceipt = _d.sent();
                        return [4 /*yield*/, contracts_helpers_1.getBlockTimestamp(lastTxReceipt.blockNumber)];
                    case 12:
                        lastTxTimestamp = _d.sent();
                        return [4 /*yield*/, aaveIncentivesController.getUserUnclaimedRewards(userAddress)];
                    case 13:
                        unclaimedRewardsBefore = _d.sent();
                        return [4 /*yield*/, aaveIncentivesController.getRewardsBalance([underlyingAsset], userAddress)];
                    case 14:
                        unclaimedRewards = _d.sent();
                        return [4 /*yield*/, asset_user_data_1.getUserIndex(aaveIncentivesController, userAddress, underlyingAsset)];
                    case 15:
                        userIndex = _d.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, [{ underlyingAsset: underlyingAsset }])];
                    case 16:
                        assetData = (_d.sent())[0];
                        return [4 /*yield*/, aDaiMock.cleanUserState()];
                    case 17:
                        _d.sent();
                        expectedAssetIndex = ray_math_1.getNormalizedDistribution(totalStaked, assetData.index, assetData.emissionPerSecond, assetData.lastUpdateTimestamp, lastTxTimestamp, distributionEndTimestamp);
                        expectedAccruedRewards = base_math_1.getRewards(stakedByUser, expectedAssetIndex, userIndex).toString();
                        expect(unclaimedRewards.toString()).to.be.equal(unclaimedRewardsBefore.add(expectedAccruedRewards).toString());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    try {
        for (var getRewardsBalanceScenarios_1 = __values(getRewardsBalanceScenarios), getRewardsBalanceScenarios_1_1 = getRewardsBalanceScenarios_1.next(); !getRewardsBalanceScenarios_1_1.done; getRewardsBalanceScenarios_1_1 = getRewardsBalanceScenarios_1.next()) {
            var _b = getRewardsBalanceScenarios_1_1.value, caseName = _b.caseName, emissionPerSecond = _b.emissionPerSecond;
            _loop_1(caseName, emissionPerSecond);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (getRewardsBalanceScenarios_1_1 && !getRewardsBalanceScenarios_1_1.done && (_a = getRewardsBalanceScenarios_1.return)) _a.call(getRewardsBalanceScenarios_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=get-rewards-balance.spec.js.map