"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareRewardsAtTransfer = exports.compareRewardsAtAction = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var chai = require('chai');
var expect = chai.expect, assert = chai.assert;
var ChaiBigNumber = require('chai-bignumber');
var base_math_1 = require("../../DistributionManager/data-helpers/base-math");
var asset_user_data_1 = require("../../DistributionManager/data-helpers/asset-user-data");
var comparator_engine_1 = require("../../helpers/comparator-engine");
var misc_utils_1 = require("../../../helpers/misc-utils");
chai.use(ChaiBigNumber());
exports.compareRewardsAtAction = function (stakedAave, userAddress, actions, shouldReward, assetConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var underlyingAsset, rewardsBalanceBefore, _a, assetConfiguration, _b, _c, userBalance, userIndexBefore, receipts, _d, _e, userIndexAfter, rewardsBalanceAfter, _f, expectedAccruedRewards, latestReceipt, eventAccrued;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                underlyingAsset = stakedAave.address;
                // To prevent coverage to fail, add 5 seconds per comparisson.
                return [4 /*yield*/, misc_utils_1.increaseTime(5)];
            case 1:
                // To prevent coverage to fail, add 5 seconds per comparisson.
                _h.sent();
                _a = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(userAddress)];
            case 2: return [4 /*yield*/, (_h.sent()).toString()];
            case 3:
                rewardsBalanceBefore = new (_a.apply(bignumber_js_1.default, [void 0, _h.sent()]))();
                if (!assetConfig) return [3 /*break*/, 4];
                _b = __assign(__assign({}, assetConfig), { underlyingAsset: underlyingAsset });
                return [3 /*break*/, 6];
            case 4:
                _c = {
                    emissionPerSecond: '100'
                };
                return [4 /*yield*/, stakedAave.totalSupply()];
            case 5:
                _b = (_c.totalStaked = _h.sent(),
                    _c.underlyingAsset = underlyingAsset,
                    _c);
                _h.label = 6;
            case 6:
                assetConfiguration = _b;
                return [4 /*yield*/, stakedAave.configureAssets([assetConfiguration])];
            case 7:
                _h.sent();
                return [4 /*yield*/, stakedAave.balanceOf(userAddress)];
            case 8:
                userBalance = _h.sent();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, userAddress, underlyingAsset)];
            case 9:
                userIndexBefore = _h.sent();
                _e = (_d = Promise).all;
                return [4 /*yield*/, actions().map(function (action) { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = misc_utils_1.waitForTx;
                                return [4 /*yield*/, action];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); })];
            case 10: return [4 /*yield*/, _e.apply(_d, [_h.sent()])];
            case 11:
                receipts = _h.sent();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, userAddress, underlyingAsset)];
            case 12:
                userIndexAfter = _h.sent();
                _f = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(userAddress)];
            case 13: return [4 /*yield*/, (_h.sent()).toString()];
            case 14:
                rewardsBalanceAfter = new (_f.apply(bignumber_js_1.default, [void 0, _h.sent()]))();
                expectedAccruedRewards = base_math_1.getRewards(userBalance, userIndexAfter, userIndexBefore);
                expect(rewardsBalanceAfter).to.bignumber.eq(rewardsBalanceBefore.plus(expectedAccruedRewards));
                // Explicit check rewards when the test case expects rewards to the user
                if (shouldReward) {
                    expect(expectedAccruedRewards).to.be.bignumber.gt(0);
                }
                else {
                    expect(expectedAccruedRewards).to.be.bignumber.eq(0);
                    expect(rewardsBalanceAfter).to.be.bignumber.eq(rewardsBalanceBefore);
                }
                // Check the reward event values if any in the latest tx receipt
                if (expectedAccruedRewards.gt('0')) {
                    latestReceipt = receipts[receipts.length - 1];
                    eventAccrued = (_g = latestReceipt.events) === null || _g === void 0 ? void 0 : _g.find(function (_a) {
                        var event = _a.event;
                        return event === 'RewardsAccrued';
                    });
                    if (eventAccrued) {
                        comparator_engine_1.eventChecker(eventAccrued, 'RewardsAccrued', [
                            userAddress,
                            expectedAccruedRewards.toString(),
                        ]);
                    }
                    else {
                        assert.fail('RewardsAccrued event must be emitted');
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
exports.compareRewardsAtTransfer = function (stakedAave, from, to, amount, fromShouldReward, toShouldReward, assetConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var fromAddress, toAddress, underlyingAsset, fromSavedBalance, toSavedBalance, fromSavedRewards, _a, toSavedRewards, _b, fromIndexBefore, toIndexBefore, actions, fromIndexAfter, toIndexAfter, fromRewardsBalanceAfter, _c, fromExpectedAccruedRewards, toRewardsBalanceAfter, _d, toExpectedAccruedRewards, fromNewBalance, toNewBalance;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: 
            // Increase time to prevent coverage to fail
            return [4 /*yield*/, misc_utils_1.increaseTime(5)];
            case 1:
                // Increase time to prevent coverage to fail
                _e.sent();
                fromAddress = from.address;
                toAddress = to.address;
                underlyingAsset = stakedAave.address;
                return [4 /*yield*/, stakedAave.balanceOf(fromAddress)];
            case 2:
                fromSavedBalance = _e.sent();
                return [4 /*yield*/, stakedAave.balanceOf(toAddress)];
            case 3:
                toSavedBalance = _e.sent();
                _a = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(fromAddress)];
            case 4: return [4 /*yield*/, (_e.sent()).toString()];
            case 5:
                fromSavedRewards = new (_a.apply(bignumber_js_1.default, [void 0, _e.sent()]))();
                _b = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(toAddress)];
            case 6: return [4 /*yield*/, (_e.sent()).toString()];
            case 7:
                toSavedRewards = new (_b.apply(bignumber_js_1.default, [void 0, _e.sent()]))();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, fromAddress, underlyingAsset)];
            case 8:
                fromIndexBefore = _e.sent();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, toAddress, underlyingAsset)];
            case 9:
                toIndexBefore = _e.sent();
                actions = function () { return [stakedAave.connect(from.signer).transfer(toAddress, amount)]; };
                // Fire reward comparator
                return [4 /*yield*/, exports.compareRewardsAtAction(stakedAave, fromAddress, actions, fromShouldReward, assetConfig)];
            case 10:
                // Fire reward comparator
                _e.sent();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, fromAddress, underlyingAsset)];
            case 11:
                fromIndexAfter = _e.sent();
                return [4 /*yield*/, asset_user_data_1.getUserIndex(stakedAave, toAddress, underlyingAsset)];
            case 12:
                toIndexAfter = _e.sent();
                _c = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(fromAddress)];
            case 13: return [4 /*yield*/, (_e.sent()).toString()];
            case 14:
                fromRewardsBalanceAfter = new (_c.apply(bignumber_js_1.default, [void 0, _e.sent()]))();
                fromExpectedAccruedRewards = base_math_1.getRewards(fromSavedBalance, fromIndexAfter, fromIndexBefore);
                expect(fromRewardsBalanceAfter).to.bignumber.eq(fromSavedRewards.plus(fromExpectedAccruedRewards));
                _d = bignumber_js_1.default.bind;
                return [4 /*yield*/, stakedAave.getTotalRewardsBalance(toAddress)];
            case 15: return [4 /*yield*/, (_e.sent()).toString()];
            case 16:
                toRewardsBalanceAfter = new (_d.apply(bignumber_js_1.default, [void 0, _e.sent()]))();
                toExpectedAccruedRewards = base_math_1.getRewards(toSavedBalance, toIndexAfter, toIndexBefore);
                expect(toRewardsBalanceAfter).to.bignumber.eq(toSavedRewards.plus(toExpectedAccruedRewards));
                // Explicit check rewards when the test case expects rewards to the user
                if (fromShouldReward) {
                    expect(fromExpectedAccruedRewards).to.be.bignumber.gt(0);
                }
                else {
                    expect(fromExpectedAccruedRewards).to.be.bignumber.eq(0);
                }
                // Explicit check rewards when the test case expects rewards to the user
                if (toShouldReward) {
                    expect(toExpectedAccruedRewards).to.be.bignumber.gt(0);
                }
                else {
                    expect(toExpectedAccruedRewards).to.be.bignumber.eq(0);
                }
                if (!(fromAddress === toAddress)) return [3 /*break*/, 17];
                expect(fromSavedBalance.toString()).to.be.equal(toSavedBalance.toString());
                return [3 /*break*/, 22];
            case 17: return [4 /*yield*/, stakedAave.balanceOf(fromAddress)];
            case 18: return [4 /*yield*/, (_e.sent()).toString()];
            case 19:
                fromNewBalance = _e.sent();
                return [4 /*yield*/, stakedAave.balanceOf(toAddress)];
            case 20: return [4 /*yield*/, (_e.sent()).toString()];
            case 21:
                toNewBalance = _e.sent();
                expect(fromNewBalance).to.be.equal(fromSavedBalance.sub(amount).toString());
                expect(toNewBalance).to.be.equal(toSavedBalance.add(amount).toString());
                _e.label = 22;
            case 22: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=reward.js.map