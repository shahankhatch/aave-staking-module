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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var make_suite_1 = require("../helpers/make-suite");
var constants_1 = require("../../helpers/constants");
var misc_utils_1 = require("../../helpers/misc-utils");
var ethers_1 = require("ethers");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var expect = require('chai').expect;
make_suite_1.makeSuite('StakedAave. Redeem', function (testEnv) {
    it('Reverts trying to redeem 0 amount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, staker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = '0';
                    staker = users[1];
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).redeem(staker.address, amount)).to.be.revertedWith('INVALID_ZERO_AMOUNT')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 stakes 50 AAVE', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[1];
                    _a = misc_utils_1.waitForTx;
                    return [4 /*yield*/, aaveToken.connect(staker.signer).approve(stakedAave.address, amount)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_c.sent()])];
                case 2:
                    _c.sent();
                    _b = misc_utils_1.waitForTx;
                    return [4 /*yield*/, stakedAave.connect(staker.signer).stake(staker.address, amount)];
                case 3: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                case 4:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 tries to redeem without activating the cooldown first', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, staker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[1];
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).redeem(staker.address, amount)).to.be.revertedWith('UNSTAKE_WINDOW_FINISHED')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 activates the cooldown, but is not able to redeem before the COOLDOWN_SECONDS passed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, staker, startedCooldownAt, _a, currentTime, remainingCooldown;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[1];
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 1:
                    _b.sent();
                    _a = bignumber_js_1.default.bind;
                    return [4 /*yield*/, stakedAave.stakersCooldowns(staker.address)];
                case 2: return [4 /*yield*/, (_b.sent()).toString()];
                case 3:
                    startedCooldownAt = new (_a.apply(bignumber_js_1.default, [void 0, _b.sent()]))();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 4:
                    currentTime = _b.sent();
                    remainingCooldown = startedCooldownAt.plus(constants_1.COOLDOWN_SECONDS).minus(currentTime);
                    return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(Number(remainingCooldown.dividedBy('2').toString()))];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).redeem(staker.address, amount)).to.be.revertedWith('INSUFFICIENT_COOLDOWN')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, misc_utils_1.advanceBlock(startedCooldownAt.plus(new bignumber_js_1.default(constants_1.COOLDOWN_SECONDS).minus(1)).toNumber())];
                case 7:
                    _b.sent(); // We fast-forward time to just before COOLDOWN_SECONDS
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).redeem(staker.address, amount)).to.be.revertedWith('INSUFFICIENT_COOLDOWN')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, misc_utils_1.advanceBlock(startedCooldownAt
                            .plus(new bignumber_js_1.default(constants_1.COOLDOWN_SECONDS).plus(constants_1.UNSTAKE_WINDOW).plus(1))
                            .toNumber())];
                case 9:
                    _b.sent(); // We fast-forward time to just after the unstake window
                    return [4 /*yield*/, expect(stakedAave.connect(staker.signer).redeem(staker.address, amount)).to.be.revertedWith('UNSTAKE_WINDOW_FINISHED')];
                case 10:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 activates the cooldown again, and tries to redeem a bigger amount that he has staked, receiving the balance', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, startedCooldownAt, _a, currentTime, remainingCooldown, aaveBalanceBefore, _b, stakedAaveBalanceBefore, aaveBalanceAfter, _c, stakedAaveBalanceAfter;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('1000');
                    staker = users[1];
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 1:
                    _d.sent();
                    _a = bignumber_js_1.default.bind;
                    return [4 /*yield*/, stakedAave.stakersCooldowns(staker.address)];
                case 2: return [4 /*yield*/, (_d.sent()).toString()];
                case 3:
                    startedCooldownAt = new (_a.apply(bignumber_js_1.default, [void 0, _d.sent()]))();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 4:
                    currentTime = _d.sent();
                    remainingCooldown = startedCooldownAt.plus(constants_1.COOLDOWN_SECONDS).minus(currentTime);
                    return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(remainingCooldown.plus(1).toNumber())];
                case 5:
                    _d.sent();
                    _b = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 6:
                    aaveBalanceBefore = new (_b.apply(bignumber_js_1.default, [void 0, (_d.sent()).toString()]))();
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 7:
                    stakedAaveBalanceBefore = (_d.sent()).toString();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).redeem(staker.address, amount)];
                case 8:
                    _d.sent();
                    _c = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 9:
                    aaveBalanceAfter = new (_c.apply(bignumber_js_1.default, [void 0, (_d.sent()).toString()]))();
                    return [4 /*yield*/, stakedAave.balanceOf(staker.address)];
                case 10:
                    stakedAaveBalanceAfter = (_d.sent()).toString();
                    expect(aaveBalanceAfter.minus(stakedAaveBalanceBefore).toString()).to.be.equal(aaveBalanceBefore.toString());
                    expect(stakedAaveBalanceAfter).to.be.equal('0');
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 activates the cooldown again, and redeems within the unstake period', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, _a, _b, startedCooldownAt, _c, currentTime, remainingCooldown, aaveBalanceBefore, _d, aaveBalanceAfter, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[1];
                    _a = misc_utils_1.waitForTx;
                    return [4 /*yield*/, aaveToken.connect(staker.signer).approve(stakedAave.address, amount)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_f.sent()])];
                case 2:
                    _f.sent();
                    _b = misc_utils_1.waitForTx;
                    return [4 /*yield*/, stakedAave.connect(staker.signer).stake(staker.address, amount)];
                case 3: return [4 /*yield*/, _b.apply(void 0, [_f.sent()])];
                case 4:
                    _f.sent();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 5:
                    _f.sent();
                    _c = bignumber_js_1.default.bind;
                    return [4 /*yield*/, stakedAave.stakersCooldowns(staker.address)];
                case 6: return [4 /*yield*/, (_f.sent()).toString()];
                case 7:
                    startedCooldownAt = new (_c.apply(bignumber_js_1.default, [void 0, _f.sent()]))();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 8:
                    currentTime = _f.sent();
                    remainingCooldown = startedCooldownAt.plus(constants_1.COOLDOWN_SECONDS).minus(currentTime);
                    return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(remainingCooldown.plus(1).toNumber())];
                case 9:
                    _f.sent();
                    _d = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 10:
                    aaveBalanceBefore = new (_d.apply(bignumber_js_1.default, [void 0, (_f.sent()).toString()]))();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).redeem(staker.address, amount)];
                case 11:
                    _f.sent();
                    _e = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 12:
                    aaveBalanceAfter = new (_e.apply(bignumber_js_1.default, [void 0, (_f.sent()).toString()]))();
                    expect(aaveBalanceAfter.minus(amount.toString()).toString()).to.be.equal(aaveBalanceBefore.toString());
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 4 stakes 50 AAVE, activates the cooldown and redeems half of the amount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, _a, _b, cooldownActivationTimestamp, aaveBalanceBefore, _c, aaveBalanceAfter, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[5];
                    _a = misc_utils_1.waitForTx;
                    return [4 /*yield*/, aaveToken.connect(staker.signer).approve(stakedAave.address, amount)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_e.sent()])];
                case 2:
                    _e.sent();
                    _b = misc_utils_1.waitForTx;
                    return [4 /*yield*/, stakedAave.connect(staker.signer).stake(staker.address, amount)];
                case 3: return [4 /*yield*/, _b.apply(void 0, [_e.sent()])];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 6:
                    cooldownActivationTimestamp = _e.sent();
                    return [4 /*yield*/, misc_utils_1.advanceBlock(cooldownActivationTimestamp.plus(new bignumber_js_1.default(constants_1.COOLDOWN_SECONDS).plus(1)).toNumber())];
                case 7:
                    _e.sent();
                    _c = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 8:
                    aaveBalanceBefore = new (_c.apply(bignumber_js_1.default, [void 0, (_e.sent()).toString()]))();
                    return [4 /*yield*/, stakedAave
                            .connect(staker.signer)
                            .redeem(staker.address, ethers_1.ethers.utils.parseEther('50').div(2))];
                case 9:
                    _e.sent();
                    _d = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 10:
                    aaveBalanceAfter = new (_d.apply(bignumber_js_1.default, [void 0, (_e.sent()).toString()]))();
                    expect(aaveBalanceAfter.minus(amount.toString()).toString()).to.be.equal(aaveBalanceBefore.div(2).toFixed());
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 5 stakes 50 AAVE, activates the cooldown and redeems with rewards not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, _a, _b, cooldownActivationTimestamp, aaveBalanceBefore, _c, aaveBalanceAfter, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[5];
                    _a = misc_utils_1.waitForTx;
                    return [4 /*yield*/, aaveToken.connect(staker.signer).approve(stakedAave.address, amount)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_e.sent()])];
                case 2:
                    _e.sent();
                    _b = misc_utils_1.waitForTx;
                    return [4 /*yield*/, stakedAave.connect(staker.signer).stake(staker.address, amount)];
                case 3: return [4 /*yield*/, _b.apply(void 0, [_e.sent()])];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).cooldown()];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 6:
                    cooldownActivationTimestamp = _e.sent();
                    return [4 /*yield*/, misc_utils_1.advanceBlock(cooldownActivationTimestamp.plus(new bignumber_js_1.default(constants_1.COOLDOWN_SECONDS).plus(1)).toNumber())];
                case 7:
                    _e.sent();
                    _c = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 8:
                    aaveBalanceBefore = new (_c.apply(bignumber_js_1.default, [void 0, (_e.sent()).toString()]))();
                    return [4 /*yield*/, stakedAave.connect(staker.signer).redeem(staker.address, amount)];
                case 9:
                    _e.sent();
                    _d = bignumber_js_1.default.bind;
                    return [4 /*yield*/, aaveToken.balanceOf(staker.address)];
                case 10:
                    aaveBalanceAfter = new (_d.apply(bignumber_js_1.default, [void 0, (_e.sent()).toString()]))();
                    expect(aaveBalanceAfter.minus(amount.toString()).toString()).to.be.equal(aaveBalanceBefore.toString());
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=stakedAave-redeem.spec.js.map