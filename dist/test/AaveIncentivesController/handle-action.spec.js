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
var assert_1 = require("assert");
var expect = require('chai').expect;
var misc_utils_1 = require("../../helpers/misc-utils");
var make_suite_1 = require("../helpers/make-suite");
var comparator_engine_1 = require("../helpers/comparator-engine");
var contracts_helpers_1 = require("../../helpers/contracts-helpers");
var asset_user_data_1 = require("../DistributionManager/data-helpers/asset-user-data");
var asset_data_1 = require("../DistributionManager/data-helpers/asset-data");
var base_math_1 = require("../DistributionManager/data-helpers/base-math");
var handleActionScenarios = [
    {
        caseName: 'All 0',
        emissionPerSecond: '0',
        userBalance: '0',
        totalSupply: '0',
    },
    {
        caseName: 'Accrued rewards are 0, 0 emission',
        emissionPerSecond: '0',
        userBalance: '22',
        totalSupply: '22',
    },
    {
        caseName: 'Accrued rewards are 0, 0 user balance',
        emissionPerSecond: '100',
        userBalance: '0',
        totalSupply: '22',
    },
    {
        caseName: '1. Accrued rewards are not 0',
        userBalance: '22',
        totalSupply: '22',
    },
    {
        caseName: '2. Accrued rewards are not 0',
        emissionPerSecond: '1000',
        userBalance: '2332',
        totalSupply: '3232',
    },
];
make_suite_1.makeSuite('AaveIncentivesController handleAction tests', function (testEnv) {
    var e_1, _a;
    var _loop_1 = function (caseName, totalSupply, userBalance, customTimeMovement, emissionPerSecond) {
        it(caseName, function () { return __awaiter(void 0, void 0, void 0, function () {
            var aaveIncentivesController, users, aDaiMock, userAddress, underlyingAsset, distributionEndTimestamp, rewardsBalanceBefore, userIndexBefore, assetDataBefore, handleActionReceipt, _a, eventsEmitted, actionBlockTimestamp, userIndexAfter, assetDataAfter, expectedAccruedRewards, rewardsBalanceAfter, eventAssetUpdated, eventUserIndexUpdated, eventAssetUpdated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(100)];
                    case 1:
                        _b.sent();
                        aaveIncentivesController = testEnv.aaveIncentivesController, users = testEnv.users, aDaiMock = testEnv.aDaiMock;
                        userAddress = users[1].address;
                        underlyingAsset = aDaiMock.address;
                        if (!emissionPerSecond) return [3 /*break*/, 3];
                        return [4 /*yield*/, aaveIncentivesController.configureAssets([
                                { emissionPerSecond: emissionPerSecond, underlyingAsset: underlyingAsset, totalStaked: totalSupply },
                            ])];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, aaveIncentivesController.DISTRIBUTION_END()];
                    case 4:
                        distributionEndTimestamp = _b.sent();
                        return [4 /*yield*/, aaveIncentivesController.getUserUnclaimedRewards(userAddress)];
                    case 5:
                        rewardsBalanceBefore = _b.sent();
                        return [4 /*yield*/, asset_user_data_1.getUserIndex(aaveIncentivesController, userAddress, underlyingAsset)];
                    case 6:
                        userIndexBefore = _b.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, [{ underlyingAsset: underlyingAsset }])];
                    case 7:
                        assetDataBefore = (_b.sent())[0];
                        if (!customTimeMovement) return [3 /*break*/, 9];
                        return [4 /*yield*/, misc_utils_1.increaseTime(customTimeMovement)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a = misc_utils_1.waitForTx;
                        return [4 /*yield*/, aDaiMock.handleActionOnAic(userAddress, userBalance, totalSupply)];
                    case 10: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                    case 11:
                        handleActionReceipt = _b.sent();
                        eventsEmitted = handleActionReceipt.events || [];
                        return [4 /*yield*/, contracts_helpers_1.getBlockTimestamp(handleActionReceipt.blockNumber)];
                    case 12:
                        actionBlockTimestamp = _b.sent();
                        return [4 /*yield*/, asset_user_data_1.getUserIndex(aaveIncentivesController, userAddress, underlyingAsset)];
                    case 13:
                        userIndexAfter = _b.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, [{ underlyingAsset: underlyingAsset }])];
                    case 14:
                        assetDataAfter = (_b.sent())[0];
                        expectedAccruedRewards = base_math_1.getRewards(userBalance, userIndexAfter, userIndexBefore).toString();
                        return [4 /*yield*/, aaveIncentivesController.getUserUnclaimedRewards(userAddress)];
                    case 15:
                        rewardsBalanceAfter = _b.sent();
                        // ------- Distribution Manager tests START -----
                        return [4 /*yield*/, asset_data_1.assetDataComparator({ underlyingAsset: underlyingAsset, totalStaked: totalSupply }, assetDataBefore, assetDataAfter, actionBlockTimestamp, distributionEndTimestamp.toNumber(), {})];
                    case 16:
                        // ------- Distribution Manager tests START -----
                        _b.sent();
                        expect(userIndexAfter.toString()).to.be.equal(assetDataAfter.index.toString(), 'user index are not correctly updated');
                        if (!assetDataAfter.index.eq(assetDataBefore.index)) {
                            eventAssetUpdated = eventsEmitted.find(function (_a) {
                                var event = _a.event;
                                return event === 'AssetIndexUpdated';
                            });
                            eventUserIndexUpdated = eventsEmitted.find(function (_a) {
                                var event = _a.event;
                                return event === 'UserIndexUpdated';
                            });
                            if (!eventAssetUpdated) {
                                assert_1.fail('missing AssetIndexUpdated event');
                            }
                            if (!eventUserIndexUpdated) {
                                assert_1.fail('missing UserIndexUpdated event');
                            }
                            comparator_engine_1.eventChecker(eventAssetUpdated, 'AssetIndexUpdated', [
                                assetDataAfter.underlyingAsset,
                                assetDataAfter.index,
                            ]);
                            comparator_engine_1.eventChecker(eventUserIndexUpdated, 'UserIndexUpdated', [
                                userAddress,
                                assetDataAfter.underlyingAsset,
                                assetDataAfter.index,
                            ]);
                        }
                        // ------- Distribution Manager tests END -----
                        // ------- PEI tests START -----
                        expect(rewardsBalanceAfter.toString()).to.be.equal(rewardsBalanceBefore.add(expectedAccruedRewards).toString(), 'rewards balance are incorrect');
                        if (expectedAccruedRewards !== '0') {
                            eventAssetUpdated = eventsEmitted.find(function (_a) {
                                var event = _a.event;
                                return event === 'RewardsAccrued';
                            });
                            if (!eventAssetUpdated) {
                                assert_1.fail('missing RewardsAccrued event');
                            }
                            comparator_engine_1.eventChecker(eventAssetUpdated, 'RewardsAccrued', [userAddress, expectedAccruedRewards]);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    try {
        for (var handleActionScenarios_1 = __values(handleActionScenarios), handleActionScenarios_1_1 = handleActionScenarios_1.next(); !handleActionScenarios_1_1.done; handleActionScenarios_1_1 = handleActionScenarios_1.next()) {
            var _b = handleActionScenarios_1_1.value, caseName = _b.caseName, totalSupply = _b.totalSupply, userBalance = _b.userBalance, customTimeMovement = _b.customTimeMovement, emissionPerSecond = _b.emissionPerSecond;
            _loop_1(caseName, totalSupply, userBalance, customTimeMovement, emissionPerSecond);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (handleActionScenarios_1_1 && !handleActionScenarios_1_1.done && (_a = handleActionScenarios_1.return)) _a.call(handleActionScenarios_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=handle-action.spec.js.map