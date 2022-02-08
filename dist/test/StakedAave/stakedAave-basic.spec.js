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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { makeSuite } from '../helpers/make-suite';
import { COOLDOWN_SECONDS, UNSTAKE_WINDOW, MAX_UINT_AMOUNT, STAKED_AAVE_NAME, STAKED_AAVE_SYMBOL, STAKED_AAVE_DECIMALS, } from '../../helpers/constants';
import { waitForTx, timeLatest, advanceBlock, increaseTimeAndMine } from '../../helpers/misc-utils';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import { compareRewardsAtAction } from './data-helpers/reward';
import { getUserIndex } from '../DistributionManager/data-helpers/asset-user-data';
import { getRewards } from '../DistributionManager/data-helpers/base-math';
var expect = require('chai').expect;
makeSuite('StakedAave. Basics', function (testEnv) {
    it('Initial configuration after initialize() is correct', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, rewardsVault, _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, rewardsVault = testEnv.rewardsVault;
                    _a = expect;
                    return [4 /*yield*/, stakedAave.name()];
                case 1:
                    _a.apply(void 0, [_k.sent()]).to.be.equal(STAKED_AAVE_NAME);
                    _b = expect;
                    return [4 /*yield*/, stakedAave.symbol()];
                case 2:
                    _b.apply(void 0, [_k.sent()]).to.be.equal(STAKED_AAVE_SYMBOL);
                    _c = expect;
                    return [4 /*yield*/, stakedAave.decimals()];
                case 3:
                    _c.apply(void 0, [_k.sent()]).to.be.equal(STAKED_AAVE_DECIMALS);
                    _d = expect;
                    return [4 /*yield*/, stakedAave.REVISION()];
                case 4:
                    _d.apply(void 0, [_k.sent()]).to.be.equal(1);
                    _e = expect;
                    return [4 /*yield*/, stakedAave.STAKED_TOKEN()];
                case 5:
                    _e.apply(void 0, [_k.sent()]).to.be.equal(aaveToken.address);
                    _f = expect;
                    return [4 /*yield*/, stakedAave.REWARD_TOKEN()];
                case 6:
                    _f.apply(void 0, [_k.sent()]).to.be.equal(aaveToken.address);
                    _g = expect;
                    return [4 /*yield*/, stakedAave.COOLDOWN_SECONDS()];
                case 7:
                    _g.apply(void 0, [(_k.sent()).toString()]).to.be.equal(COOLDOWN_SECONDS);
                    _h = expect;
                    return [4 /*yield*/, stakedAave.UNSTAKE_WINDOW()];
                case 8:
                    _h.apply(void 0, [(_k.sent()).toString()]).to.be.equal(UNSTAKE_WINDOW);
                    _j = expect;
                    return [4 /*yield*/, stakedAave.REWARDS_VAULT()];
                case 9:
                    _j.apply(void 0, [_k.sent()]).to.be.equal(rewardsVault.address);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Reverts trying to stake 0 amount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, _a, staker, amount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, _a = __read(testEnv.users, 2), staker = _a[1];
                    amount = '0';
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).stake(staker.address, amount)).to.be.revertedWith('INVALID_ZERO_AMOUNT')];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Reverts trying to activate cooldown with 0 staked amount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, _a, staker, amount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, _a = __read(testEnv.users, 2), staker = _a[1];
                    amount = '0';
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).cooldown()).to.be.revertedWith('INVALID_BALANCE_ON_COOLDOWN')];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 stakes 50 AAVE: receives 50 SAAVE, StakedAave balance of AAVE is 50 and his rewards to claim are 0', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, _a, staker, amount, saveBalanceBefore, _b, actions, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, _a = __read(testEnv.users, 2), staker = _a[1];
                    amount = ethers.utils.parseEther('50');
                    _b = BigNumber.bind;
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 1:
                    saveBalanceBefore = new (_b.apply(BigNumber, [void 0, (_g.sent()).toString()]))();
                    actions = function () { return [
                        aaveToken.connect(staker.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(staker.signer).stake(staker.address, amount),
                    ]; };
                    // Check rewards
                    return [4 /*yield*/, compareRewardsAtAction(stakedAave, staker.address, actions)];
                case 2:
                    // Check rewards
                    _g.sent();
                    // Stake token tests
                    _c = expect;
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 3:
                    // Stake token tests
                    _c.apply(void 0, [(_g.sent()).toString()]).to.be.equal(saveBalanceBefore.plus(amount.toString()).toString());
                    _d = expect;
                    return [4 /*yield*/, aaveToken.balanceOf(stakedAave.address)];
                case 4:
                    _d.apply(void 0, [(_g.sent()).toString()]).to.be.equal(saveBalanceBefore.plus(amount.toString()).toString());
                    _e = expect;
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 5:
                    _e.apply(void 0, [(_g.sent()).toString()]).to.be.equal(amount);
                    _f = expect;
                    return [4 /*yield*/, aaveToken.balanceOf(stakedAave.address)];
                case 6:
                    _f.apply(void 0, [(_g.sent()).toString()]).to.be.equal(amount);
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 stakes 20 AAVE more: his total SAAVE balance increases, StakedAave balance of Aave increases and his reward until now get accumulated', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, _a, staker, amount, saveBalanceBefore, _b, actions, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, _a = __read(testEnv.users, 2), staker = _a[1];
                    amount = ethers.utils.parseEther('20');
                    _b = BigNumber.bind;
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 1:
                    saveBalanceBefore = new (_b.apply(BigNumber, [void 0, (_e.sent()).toString()]))();
                    actions = function () { return [
                        aaveToken.connect(staker.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(staker.signer).stake(staker.address, amount),
                    ]; };
                    // Checks rewards
                    return [4 /*yield*/, compareRewardsAtAction(stakedAave, staker.address, actions, true)];
                case 2:
                    // Checks rewards
                    _e.sent();
                    // Extra test checks
                    _c = expect;
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 3:
                    // Extra test checks
                    _c.apply(void 0, [(_e.sent()).toString()]).to.be.equal(saveBalanceBefore.plus(amount.toString()).toString());
                    _d = expect;
                    return [4 /*yield*/, aaveToken.balanceOf(stakedAave.address)];
                case 4:
                    _d.apply(void 0, [(_e.sent()).toString()]).to.be.equal(saveBalanceBefore.plus(amount.toString()).toString());
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 claim half rewards ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, _a, staker, halfRewards, saveUserBalance, userBalanceAfterActions;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, _a = __read(testEnv.users, 2), staker = _a[1];
                    // Increase time for bigger rewards
                    return [4 /*yield*/, increaseTimeAndMine(1000)];
                case 1:
                    // Increase time for bigger rewards
                    _b.sent();
                    return [4 /*yield*/, stakedAave.stakerRewardsToClaim(staker.address)];
                case 2:
                    halfRewards = (_b.sent()).div(2);
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 3:
                    saveUserBalance = _b.sent();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).claimRewards(staker.address, halfRewards)];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 5:
                    userBalanceAfterActions = _b.sent();
                    expect(userBalanceAfterActions.eq(saveUserBalance.add(halfRewards))).to.be.ok;
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 tries to claim higher reward than current rewards balance', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, _a, staker, saveUserBalance, userBalanceAfterActions;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, _a = __read(testEnv.users, 2), staker = _a[1];
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 1:
                    saveUserBalance = _b.sent();
                    // Try to claim more amount than accumulated
                    return [4 /*yield*/, expect(stakedAave
                            .connect(staker.signer)
                            .claimRewards(staker.address, ethers.utils.parseEther('10000'))).to.be.revertedWith('INVALID_AMOUNT')];
                case 2:
                    // Try to claim more amount than accumulated
                    _b.sent();
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 3:
                    userBalanceAfterActions = _b.sent();
                    expect(userBalanceAfterActions.eq(saveUserBalance)).to.be.ok;
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 claim all rewards', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, _a, staker, userAddress, underlyingAsset, userBalance, userAaveBalance, userRewards, userIndexBefore, userIndexAfter, expectedAccruedRewards, userAaveBalanceAfterAction;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, _a = __read(testEnv.users, 2), staker = _a[1];
                    userAddress = staker.address;
                    underlyingAsset = stakedAave.address;
                    return [4 /*yield*/, stakedAave.balanceOf(userAddress)];
                case 1:
                    userBalance = _b.sent();
                    return [4 /*yield*/, aaveToken.balanceOf(userAddress)];
                case 2:
                    userAaveBalance = _b.sent();
                    return [4 /*yield*/, stakedAave.stakerRewardsToClaim(userAddress)];
                case 3:
                    userRewards = _b.sent();
                    return [4 /*yield*/, getUserIndex(stakedAave, userAddress, underlyingAsset)];
                case 4:
                    userIndexBefore = _b.sent();
                    // Claim rewards
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).claimRewards(staker.address, MAX_UINT_AMOUNT))];
                case 5:
                    // Claim rewards
                    _b.sent();
                    return [4 /*yield*/, getUserIndex(stakedAave, userAddress, underlyingAsset)];
                case 6:
                    userIndexAfter = _b.sent();
                    expectedAccruedRewards = getRewards(userBalance, userIndexAfter, userIndexBefore).toString();
                    return [4 /*yield*/, aaveToken.balanceOf(userAddress)];
                case 7:
                    userAaveBalanceAfterAction = (_b.sent()).toString();
                    expect(userAaveBalanceAfterAction).to.be.equal(userAaveBalance.add(userRewards).add(expectedAccruedRewards).toString());
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 6 stakes 50 AAVE, with the rewards not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, sixStaker, assetsConfig, actions, _a, rewardsBalance;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers.utils.parseEther('50');
                    sixStaker = users[5];
                    assetsConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    actions = function () { return [
                        aaveToken.connect(sixStaker.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(sixStaker.signer).stake(sixStaker.address, amount),
                    ]; };
                    return [4 /*yield*/, compareRewardsAtAction(stakedAave, sixStaker.address, actions, false, assetsConfig)];
                case 1:
                    _b.sent();
                    // Check expected stake balance for six staker
                    _a = expect;
                    return [4 /*yield*/, stakedAave.balanceOf(sixStaker.address)];
                case 2:
                    // Check expected stake balance for six staker
                    _a.apply(void 0, [(_b.sent()).toString()]).to.be.equal(amount.toString());
                    return [4 /*yield*/, stakedAave.getTotalRewardsBalance(sixStaker.address)];
                case 3: return [4 /*yield*/, (_b.sent()).toString()];
                case 4:
                    rewardsBalance = _b.sent();
                    expect(rewardsBalance).to.be.equal('0');
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 6 stakes 30 AAVE more, with the rewards not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, sixStaker, saveBalanceBefore, _a, assetsConfig, actions, rewardsBalance;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers.utils.parseEther('30');
                    staker = users[1];
                    sixStaker = users[5];
                    _a = BigNumber.bind;
                    return [4 /*yield*/, stakedAave.balanceOf(sixStaker.address)];
                case 1:
                    saveBalanceBefore = new (_a.apply(BigNumber, [void 0, (_b.sent()).toString()]))();
                    assetsConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    actions = function () { return [
                        aaveToken.connect(sixStaker.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(sixStaker.signer).stake(sixStaker.address, amount),
                    ]; };
                    return [4 /*yield*/, compareRewardsAtAction(stakedAave, sixStaker.address, actions, false, assetsConfig)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, stakedAave.getTotalRewardsBalance(sixStaker.address)];
                case 3: return [4 /*yield*/, (_b.sent()).toString()];
                case 4:
                    rewardsBalance = _b.sent();
                    expect(rewardsBalance).to.be.equal('0');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Validates staker cooldown with stake() while being on valid unstake window', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount1, amount2, staker, actions, cooldownActivationTimestamp, stakerCooldownTimestampBefore, _a, _b, latestTimestamp, expectedCooldownTimestamp, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount1 = ethers.utils.parseEther('50');
                    amount2 = ethers.utils.parseEther('20');
                    staker = users[4];
                    actions = function () { return [
                        aaveToken.connect(staker.signer).approve(stakedAave.address, amount1.add(amount2)),
                        stakedAave.connect(staker.signer).stake(staker.address, amount1),
                    ]; };
                    return [4 /*yield*/, compareRewardsAtAction(stakedAave, staker.address, actions, false)];
                case 1:
                    _e.sent();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 2:
                    _e.sent();
                    return [4 /*yield*/, timeLatest()];
                case 3:
                    cooldownActivationTimestamp = _e.sent();
                    return [4 /*yield*/, advanceBlock(cooldownActivationTimestamp.plus(new BigNumber(COOLDOWN_SECONDS).plus(1000)).toNumber())];
                case 4:
                    _e.sent(); // We fast-forward time to just after the unstake window
                    _a = BigNumber.bind;
                    return [4 /*yield*/, stakedAave.stakersCooldowns(staker.address)];
                case 5:
                    stakerCooldownTimestampBefore = new (_a.apply(BigNumber, [void 0, (_e.sent()).toString()]))();
                    _b = waitForTx;
                    return [4 /*yield*/, stakedAave.connect(staker.signer).stake(staker.address, amount2)];
                case 6: return [4 /*yield*/, _b.apply(void 0, [_e.sent()])];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, timeLatest()];
                case 8:
                    latestTimestamp = _e.sent();
                    expectedCooldownTimestamp = amount2
                        .mul(latestTimestamp.toString())
                        .add(amount1.mul(stakerCooldownTimestampBefore.toString()))
                        .div(amount2.add(amount1));
                    _d = (_c = expect(expectedCooldownTimestamp.toString()).to.be).equal;
                    return [4 /*yield*/, stakedAave.stakersCooldowns(staker.address)];
                case 9:
                    _d.apply(_c, [(_e.sent()).toString()]);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=stakedAave-basic.spec.js.map