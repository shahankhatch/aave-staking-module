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
Object.defineProperty(exports, "__esModule", { value: true });
var make_suite_1 = require("../helpers/make-suite");
var ethers_1 = require("ethers");
var reward_1 = require("./data-helpers/reward");
var misc_utils_1 = require("../../helpers/misc-utils");
var constants_1 = require("../../helpers/constants");
var expect = require('chai').expect;
make_suite_1.makeSuite('StakedAave. Transfers', function (testEnv) {
    it('User 1 stakes 50 AAVE', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, staker, actions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    staker = users[1];
                    actions = function () { return [
                        aaveToken.connect(staker.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(staker.signer).stake(staker.address, amount),
                    ]; };
                    return [4 /*yield*/, reward_1.compareRewardsAtAction(stakedAave, staker.address, actions)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 1 transfers 50 SAAVE to User 5', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, sender, receiver;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50').toString();
                    sender = users[1];
                    receiver = users[5];
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, true, false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 5 transfers 50 SAAVE to himself', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, sender;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    sender = users[5];
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, sender, amount, true, true)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 5 transfers 50 SAAVE to user 2, with rewards not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, sender, receiver, assetConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    sender = users[5];
                    receiver = users[2];
                    assetConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, false, false, assetConfig)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('User 4 stakes and transfers 50 SAAVE to user 2, with rewards not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, sender, receiver, assetConfig, actions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('50');
                    sender = users[3];
                    receiver = users[2];
                    assetConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    actions = function () { return [
                        aaveToken.connect(sender.signer).approve(stakedAave.address, amount),
                        stakedAave.connect(sender.signer).stake(sender.address, amount),
                    ]; };
                    return [4 /*yield*/, reward_1.compareRewardsAtAction(stakedAave, sender.address, actions, false, assetConfig)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, false, false, assetConfig)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Activate cooldown of User2, transfer entire amount from User2 to User3, cooldown of User2 should be reset', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, sender, receiver, amount, assetConfig, cooldownActivationTimestamp, cooldownTimestamp, cooldownTimestampAfterTransfer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    sender = users[2];
                    receiver = users[3];
                    return [4 /*yield*/, stakedAave.balanceOf(sender.address)];
                case 1:
                    amount = _a.sent();
                    assetConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    return [4 /*yield*/, stakedAave.connect(sender.signer).cooldown()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, misc_utils_1.timeLatest()];
                case 3: return [4 /*yield*/, (_a.sent()).toString()];
                case 4:
                    cooldownActivationTimestamp = _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(sender.address)];
                case 5:
                    cooldownTimestamp = _a.sent();
                    expect(cooldownTimestamp.gt('0')).to.be.ok;
                    expect(cooldownTimestamp.toString()).to.equal(cooldownActivationTimestamp);
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, false, false, assetConfig)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(sender.address)];
                case 7: return [4 /*yield*/, (_a.sent()).toString()];
                case 8:
                    cooldownTimestampAfterTransfer = _a.sent();
                    expect(cooldownTimestampAfterTransfer).to.equal('0');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Transfer balance from User 3 to user 2 cooldown  of User 2 should be reset if User3 cooldown expired', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, aaveToken, users, amount, sender, receiver, assetConfig, receiverCooldown, stakerCooldownTimestampBefore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, aaveToken = testEnv.aaveToken, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('10');
                    sender = users[3];
                    receiver = users[2];
                    assetConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    // First enable cooldown for sender
                    return [4 /*yield*/, stakedAave.connect(sender.signer).cooldown()];
                case 1:
                    // First enable cooldown for sender
                    _a.sent();
                    // Then enable cooldown for receiver
                    return [4 /*yield*/, aaveToken.connect(receiver.signer).approve(stakedAave.address, amount)];
                case 2:
                    // Then enable cooldown for receiver
                    _a.sent();
                    return [4 /*yield*/, stakedAave.connect(receiver.signer).stake(receiver.address, amount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, stakedAave.connect(receiver.signer).cooldown()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(sender.address)];
                case 5:
                    receiverCooldown = _a.sent();
                    // Increase time to an invalid time for cooldown
                    return [4 /*yield*/, misc_utils_1.increaseTimeAndMine(receiverCooldown.add(constants_1.COOLDOWN_SECONDS).add(constants_1.UNSTAKE_WINDOW).add(1).toNumber())];
                case 6:
                    // Increase time to an invalid time for cooldown
                    _a.sent();
                    // Transfer staked aave from sender to receiver, it will also transfer the cooldown status from sender to the receiver
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, false, false, assetConfig)];
                case 7:
                    // Transfer staked aave from sender to receiver, it will also transfer the cooldown status from sender to the receiver
                    _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(receiver.address)];
                case 8:
                    stakerCooldownTimestampBefore = _a.sent();
                    expect(stakerCooldownTimestampBefore.eq(0)).to.be.ok;
                    return [2 /*return*/];
            }
        });
    }); });
    it('Transfer balance from User 3 to user 2, cooldown of User 2 should be the same if User3 cooldown is less than User2 cooldown', function () { return __awaiter(void 0, void 0, void 0, function () {
        var stakedAave, users, amount, sender, receiver, assetConfig, receiverCooldown, receiverCooldownAfterTransfer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stakedAave = testEnv.stakedAave, users = testEnv.users;
                    amount = ethers_1.ethers.utils.parseEther('10');
                    sender = users[3];
                    receiver = users[2];
                    assetConfig = {
                        emissionPerSecond: '0',
                        totalStaked: '0',
                    };
                    // Enable cooldown for sender
                    return [4 /*yield*/, stakedAave.connect(sender.signer).cooldown()];
                case 1:
                    // Enable cooldown for sender
                    _a.sent();
                    return [4 /*yield*/, misc_utils_1.increaseTime(5)];
                case 2:
                    _a.sent();
                    // Enable enable cooldown for receiver
                    return [4 /*yield*/, stakedAave.connect(receiver.signer).cooldown()];
                case 3:
                    // Enable enable cooldown for receiver
                    _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(receiver.address)];
                case 4: return [4 /*yield*/, (_a.sent()).toString()];
                case 5:
                    receiverCooldown = _a.sent();
                    // Transfer staked aave from sender to receiver, it will also transfer the cooldown status from sender to the receiver
                    return [4 /*yield*/, reward_1.compareRewardsAtTransfer(stakedAave, sender, receiver, amount, false, false, assetConfig)];
                case 6:
                    // Transfer staked aave from sender to receiver, it will also transfer the cooldown status from sender to the receiver
                    _a.sent();
                    return [4 /*yield*/, stakedAave.stakersCooldowns(receiver.address)];
                case 7: return [4 /*yield*/, (_a.sent()).toString()];
                case 8:
                    receiverCooldownAfterTransfer = _a.sent();
                    expect(receiverCooldownAfterTransfer).to.be.equal(receiverCooldown);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=stakedAave-transfers.spec.js.map