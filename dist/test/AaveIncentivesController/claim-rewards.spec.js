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
var constants_1 = require("../../helpers/constants");
var expect = require('chai').expect;
var make_suite_1 = require("../helpers/make-suite");
var ethers_1 = require("ethers");
var misc_utils_1 = require("../../helpers/misc-utils");
var comparator_engine_1 = require("../helpers/comparator-engine");
var asset_user_data_1 = require("../DistributionManager/data-helpers/asset-user-data");
var asset_data_1 = require("../DistributionManager/data-helpers/asset-data");
var contracts_helpers_1 = require("../../helpers/contracts-helpers");
var base_math_1 = require("../DistributionManager/data-helpers/base-math");
var assert_1 = require("assert");
var getRewardsBalanceScenarios = [
    {
        caseName: 'Accrued rewards are 0, claim 0',
        emissionPerSecond: '0',
        amountToClaim: '0',
    },
    {
        caseName: 'Accrued rewards are 0, claim not 0',
        emissionPerSecond: '0',
        amountToClaim: '100',
    },
    {
        caseName: 'Accrued rewards are not 0',
        emissionPerSecond: '2432424',
        amountToClaim: '10',
    },
    {
        caseName: 'Should allow -1',
        emissionPerSecond: '2432424',
        amountToClaim: constants_1.MAX_UINT_AMOUNT,
        toStake: false,
    },
    {
        caseName: 'Should add extra premium on withdrawal to stake',
        emissionPerSecond: '1200',
        amountToClaim: '1034',
        toStake: true,
    },
    {
        caseName: 'Should withdraw everything if amountToClaim more then rewards balance',
        emissionPerSecond: '100',
        amountToClaim: '1034',
        toStake: true,
    },
    {
        caseName: 'Should withdraw to another user',
        emissionPerSecond: '100',
        amountToClaim: '1034',
        to: constants_1.RANDOM_ADDRESSES[5],
    },
    {
        caseName: 'Should withdraw to another user and stake',
        emissionPerSecond: '100',
        amountToClaim: '1034',
        to: constants_1.RANDOM_ADDRESSES[5],
        toStake: true,
    },
];
make_suite_1.makeSuite('AaveIncentivesController claimRewards tests', function (testEnv) {
    var e_1, _a;
    var _loop_1 = function (caseName, _amountToClaim, to, toStake, emissionPerSecond) {
        var amountToClaim = _amountToClaim;
        it(caseName, function () { return __awaiter(void 0, void 0, void 0, function () {
            var aaveIncentivesController, stakedAave, aaveToken, aDaiMock, distributionEndTimestamp, userAddress, underlyingAsset, stakedByUser, totalStaked, destinationAddress, destinationAddressBalanceBefore, unclaimedRewardsBefore, userIndexBefore, assetDataBefore, claimRewardsReceipt, _a, eventsEmitted, actionBlockTimestamp, userIndexAfter, assetDataAfter, unclaimedRewardsAfter, destinationAddressBalanceAfter, claimedAmount, expectedAccruedRewards, unclaimedRewardsCalc, expectedClaimedAmount, rewardsAccruedEvent, rewardsClaimedEvent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(100)];
                    case 1:
                        _b.sent();
                        aaveIncentivesController = testEnv.aaveIncentivesController, stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, aDaiMock = testEnv.aDaiMock;
                        return [4 /*yield*/, aaveIncentivesController.DISTRIBUTION_END()];
                    case 2:
                        distributionEndTimestamp = _b.sent();
                        return [4 /*yield*/, aaveIncentivesController.signer.getAddress()];
                    case 3:
                        userAddress = _b.sent();
                        underlyingAsset = aDaiMock.address;
                        stakedByUser = 22 * caseName.length;
                        totalStaked = 33 * caseName.length;
                        if (!emissionPerSecond) return [3 /*break*/, 5];
                        return [4 /*yield*/, aaveIncentivesController.configureAssets([
                                { emissionPerSecond: emissionPerSecond, underlyingAsset: underlyingAsset, totalStaked: totalStaked },
                            ])];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        destinationAddress = to || userAddress;
                        return [4 /*yield*/, (toStake ? stakedAave : aaveToken).balanceOf(destinationAddress)];
                    case 6:
                        destinationAddressBalanceBefore = _b.sent();
                        return [4 /*yield*/, aDaiMock.setUserBalanceAndSupply(stakedByUser, totalStaked)];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, aaveIncentivesController.getUserUnclaimedRewards(userAddress)];
                    case 8:
                        unclaimedRewardsBefore = _b.sent();
                        return [4 /*yield*/, asset_user_data_1.getUserIndex(aaveIncentivesController, userAddress, underlyingAsset)];
                    case 9:
                        userIndexBefore = _b.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, [{ underlyingAsset: underlyingAsset }])];
                    case 10:
                        assetDataBefore = (_b.sent())[0];
                        _a = misc_utils_1.waitForTx;
                        return [4 /*yield*/, aaveIncentivesController.claimRewards([underlyingAsset], amountToClaim, destinationAddress, toStake || false)];
                    case 11: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                    case 12:
                        claimRewardsReceipt = _b.sent();
                        eventsEmitted = claimRewardsReceipt.events || [];
                        return [4 /*yield*/, contracts_helpers_1.getBlockTimestamp(claimRewardsReceipt.blockNumber)];
                    case 13:
                        actionBlockTimestamp = _b.sent();
                        return [4 /*yield*/, asset_user_data_1.getUserIndex(aaveIncentivesController, userAddress, underlyingAsset)];
                    case 14:
                        userIndexAfter = _b.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, [{ underlyingAsset: underlyingAsset }])];
                    case 15:
                        assetDataAfter = (_b.sent())[0];
                        return [4 /*yield*/, aaveIncentivesController.getUserUnclaimedRewards(userAddress)];
                    case 16:
                        unclaimedRewardsAfter = _b.sent();
                        return [4 /*yield*/, (toStake ? stakedAave : aaveToken).balanceOf(destinationAddress)];
                    case 17:
                        destinationAddressBalanceAfter = _b.sent();
                        claimedAmount = destinationAddressBalanceAfter.sub(destinationAddressBalanceBefore);
                        expectedAccruedRewards = base_math_1.getRewards(stakedByUser, userIndexAfter, userIndexBefore).toString();
                        return [4 /*yield*/, aDaiMock.cleanUserState()];
                    case 18:
                        _b.sent();
                        if (!(amountToClaim === '0')) return [3 /*break*/, 20];
                        // state should not change
                        expect(userIndexBefore.toString()).to.be.equal(userIndexAfter.toString(), 'userIndexAfter should not change');
                        expect(unclaimedRewardsBefore.toString()).to.be.equal(unclaimedRewardsAfter.toString(), 'unclaimedRewards should not change');
                        expect(destinationAddressBalanceBefore.toString()).to.be.equal(destinationAddressBalanceAfter.toString(), 'destinationAddressBalance should not change');
                        return [4 /*yield*/, comparator_engine_1.comparatorEngine(['emissionPerSecond', 'index', 'lastUpdateTimestamp'], { underlyingAsset: underlyingAsset, totalStaked: totalStaked }, assetDataBefore, assetDataAfter, actionBlockTimestamp, {})];
                    case 19:
                        _b.sent();
                        expect(eventsEmitted.length).to.be.equal(0, 'no events should be emitted');
                        return [2 /*return*/];
                    case 20: 
                    // ------- Distribution Manager tests START -----
                    return [4 /*yield*/, asset_data_1.assetDataComparator({ underlyingAsset: underlyingAsset, totalStaked: totalStaked }, assetDataBefore, assetDataAfter, actionBlockTimestamp, distributionEndTimestamp.toNumber(), {})];
                    case 21:
                        // ------- Distribution Manager tests START -----
                        _b.sent();
                        expect(userIndexAfter.toString()).to.be.equal(assetDataAfter.index.toString(), 'user index are not correctly updated');
                        if (!assetDataAfter.index.eq(assetDataBefore.index)) {
                            comparator_engine_1.eventChecker(eventsEmitted[0], 'AssetIndexUpdated', [
                                assetDataAfter.underlyingAsset,
                                assetDataAfter.index,
                            ]);
                            comparator_engine_1.eventChecker(eventsEmitted[1], 'UserIndexUpdated', [
                                userAddress,
                                assetDataAfter.underlyingAsset,
                                assetDataAfter.index,
                            ]);
                        }
                        unclaimedRewardsCalc = unclaimedRewardsBefore.add(expectedAccruedRewards);
                        if (unclaimedRewardsCalc.lte(amountToClaim)) {
                            expectedClaimedAmount = unclaimedRewardsCalc;
                            expect(unclaimedRewardsAfter.toString()).to.be.equal('0', 'unclaimed amount after should go to 0');
                        }
                        else {
                            expectedClaimedAmount = ethers_1.BigNumber.from(amountToClaim);
                            expect(unclaimedRewardsAfter.toString()).to.be.equal(unclaimedRewardsCalc.sub(amountToClaim).toString(), 'unclaimed rewards after are wrong');
                        }
                        if (toStake) {
                            expectedClaimedAmount = expectedClaimedAmount.add(expectedClaimedAmount.mul(constants_1.PSM_STAKER_PREMIUM).div('100'));
                        }
                        expect(claimedAmount.toString()).to.be.equal(expectedClaimedAmount.toString(), 'claimed amount are wrong');
                        if (expectedAccruedRewards !== '0') {
                            rewardsAccruedEvent = eventsEmitted.find(function (_a) {
                                var event = _a.event;
                                return event === 'RewardsAccrued';
                            });
                            // Expect event to exist
                            expect(rewardsAccruedEvent).to.be.ok;
                            if (rewardsAccruedEvent) {
                                comparator_engine_1.eventChecker(rewardsAccruedEvent, 'RewardsAccrued', [
                                    userAddress,
                                    expectedAccruedRewards,
                                ]);
                            }
                            else {
                                assert_1.fail('missing accrued event');
                            }
                        }
                        if (expectedClaimedAmount.gt(0)) {
                            rewardsClaimedEvent = eventsEmitted.find(function (_a) {
                                var event = _a.event;
                                return event === 'RewardsClaimed';
                            });
                            // Expect event to exist
                            expect(rewardsClaimedEvent).to.be.ok;
                            if (rewardsClaimedEvent) {
                                comparator_engine_1.eventChecker(rewardsClaimedEvent, 'RewardsClaimed', [
                                    userAddress,
                                    destinationAddress,
                                    expectedClaimedAmount,
                                ]);
                            }
                            else {
                                assert_1.fail('missing reward event');
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    try {
        for (var getRewardsBalanceScenarios_1 = __values(getRewardsBalanceScenarios), getRewardsBalanceScenarios_1_1 = getRewardsBalanceScenarios_1.next(); !getRewardsBalanceScenarios_1_1.done; getRewardsBalanceScenarios_1_1 = getRewardsBalanceScenarios_1.next()) {
            var _b = getRewardsBalanceScenarios_1_1.value, caseName = _b.caseName, _amountToClaim = _b.amountToClaim, to = _b.to, toStake = _b.toStake, emissionPerSecond = _b.emissionPerSecond;
            _loop_1(caseName, _amountToClaim, to, toStake, emissionPerSecond);
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
//# sourceMappingURL=claim-rewards.spec.js.map