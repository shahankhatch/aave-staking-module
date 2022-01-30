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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var buidler_1 = __importDefault(require("@nomiclabs/buidler"));
var ethers_1 = require("ethers");
var contracts_helpers_1 = require("../helpers/contracts-helpers");
var make_suite_1 = require("./helpers/make-suite");
var contracts_accessors_1 = require("../helpers/contracts-accessors");
var constants_1 = require("../helpers/constants");
var misc_utils_1 = require("../helpers/misc-utils");
var types_1 = require("../helpers/types");
var topUpWalletsWithAave = function (wallets, aaveToken, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var wallets_1, wallets_1_1, wallet, _a, e_1_1;
    var e_1, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, 7, 8]);
                wallets_1 = __values(wallets), wallets_1_1 = wallets_1.next();
                _c.label = 1;
            case 1:
                if (!!wallets_1_1.done) return [3 /*break*/, 5];
                wallet = wallets_1_1.value;
                _a = misc_utils_1.waitForTx;
                return [4 /*yield*/, aaveToken.connect(wallet).mint(amount)];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_c.sent()])];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                wallets_1_1 = wallets_1.next();
                return [3 /*break*/, 1];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (wallets_1_1 && !wallets_1_1.done && (_b = wallets_1.return)) _b.call(wallets_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); };
var buildTestEnv = function (deployer, vaultOfRewards, restWallets) { return __awaiter(void 0, void 0, void 0, function () {
    var proxyAdmin, emissionManager, aaveToken, _a, stakedToken, rewardsToken, vaultOfRewardsAddress, aaveIncentivesControllerProxy, stakedAaveProxy, aaveIncentivesControllerImplementation, stakedAaveImpl, mockTransferHook, stakedAaveEncodedInitialize, _b, peiEncodedInitialize, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.time('setup');
                return [4 /*yield*/, restWallets[0].getAddress()];
            case 1:
                proxyAdmin = _d.sent();
                return [4 /*yield*/, deployer.getAddress()];
            case 2:
                emissionManager = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployMintableErc20(['Aave', 'aave', 18])];
            case 3:
                aaveToken = _d.sent();
                _a = misc_utils_1.waitForTx;
                return [4 /*yield*/, aaveToken.connect(vaultOfRewards).mint(ethers_1.ethers.utils.parseEther('1000000'))];
            case 4: return [4 /*yield*/, _a.apply(void 0, [_d.sent()])];
            case 5:
                _d.sent();
                return [4 /*yield*/, topUpWalletsWithAave([
                        restWallets[0],
                        restWallets[1],
                        restWallets[2],
                        restWallets[3],
                        restWallets[4],
                        restWallets[5],
                    ], aaveToken, ethers_1.ethers.utils.parseEther('100').toString())];
            case 6:
                _d.sent();
                stakedToken = aaveToken.address;
                rewardsToken = aaveToken.address;
                return [4 /*yield*/, vaultOfRewards.getAddress()];
            case 7:
                vaultOfRewardsAddress = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployInitializableAdminUpgradeabilityProxy()];
            case 8:
                aaveIncentivesControllerProxy = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployInitializableAdminUpgradeabilityProxy()];
            case 9:
                stakedAaveProxy = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployAaveIncentivesController([
                        aaveToken.address,
                        vaultOfRewardsAddress,
                        stakedAaveProxy.address,
                        constants_1.PSM_STAKER_PREMIUM,
                        emissionManager,
                        (1000 * 60 * 60).toString(),
                    ])];
            case 10:
                aaveIncentivesControllerImplementation = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployStakedAave([
                        stakedToken,
                        rewardsToken,
                        constants_1.COOLDOWN_SECONDS,
                        constants_1.UNSTAKE_WINDOW,
                        vaultOfRewardsAddress,
                        emissionManager,
                        (1000 * 60 * 60).toString(),
                    ])];
            case 11:
                stakedAaveImpl = _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployMockTransferHook()];
            case 12:
                mockTransferHook = _d.sent();
                stakedAaveEncodedInitialize = stakedAaveImpl.interface.encodeFunctionData('initialize', [
                    mockTransferHook.address,
                    constants_1.STAKED_AAVE_NAME,
                    constants_1.STAKED_AAVE_SYMBOL,
                    constants_1.STAKED_AAVE_DECIMALS,
                ]);
                return [4 /*yield*/, stakedAaveProxy['initialize(address,address,bytes)'](stakedAaveImpl.address, proxyAdmin, stakedAaveEncodedInitialize)];
            case 13:
                _d.sent();
                _b = misc_utils_1.waitForTx;
                return [4 /*yield*/, aaveToken.connect(vaultOfRewards).approve(stakedAaveProxy.address, constants_1.MAX_UINT_AMOUNT)];
            case 14: return [4 /*yield*/, _b.apply(void 0, [_d.sent()])];
            case 15:
                _d.sent();
                return [4 /*yield*/, contracts_helpers_1.insertContractAddressInDb(types_1.eContractid.StakedAave, stakedAaveProxy.address)];
            case 16:
                _d.sent();
                peiEncodedInitialize = aaveIncentivesControllerImplementation.interface.encodeFunctionData('initialize');
                return [4 /*yield*/, aaveIncentivesControllerProxy['initialize(address,address,bytes)'](aaveIncentivesControllerImplementation.address, proxyAdmin, peiEncodedInitialize)];
            case 17:
                _d.sent();
                _c = misc_utils_1.waitForTx;
                return [4 /*yield*/, aaveToken
                        .connect(vaultOfRewards)
                        .approve(aaveIncentivesControllerProxy.address, constants_1.MAX_UINT_AMOUNT)];
            case 18: return [4 /*yield*/, _c.apply(void 0, [_d.sent()])];
            case 19:
                _d.sent();
                return [4 /*yield*/, contracts_helpers_1.insertContractAddressInDb(types_1.eContractid.AaveIncentivesController, aaveIncentivesControllerProxy.address)];
            case 20:
                _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployATokenMock(aaveIncentivesControllerProxy.address, 'aDai')];
            case 21:
                _d.sent();
                return [4 /*yield*/, contracts_accessors_1.deployATokenMock(aaveIncentivesControllerProxy.address, 'aWeth')];
            case 22:
                _d.sent();
                console.timeEnd('setup');
                return [2 /*return*/];
        }
    });
}); };
before(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, deployer, rewardsVault, restWallets;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, buidler_1.default.run('set-bre')];
            case 1:
                _b.sent();
                return [4 /*yield*/, contracts_helpers_1.getEthersSigners()];
            case 2:
                _a = __read.apply(void 0, [_b.sent()]), deployer = _a[0], rewardsVault = _a[1], restWallets = _a.slice(2);
                console.log('-> Deploying test environment...');
                return [4 /*yield*/, buildTestEnv(deployer, rewardsVault, restWallets)];
            case 3:
                _b.sent();
                return [4 /*yield*/, make_suite_1.initializeMakeSuite()];
            case 4:
                _b.sent();
                console.log('\n***************');
                console.log('Setup and snapshot finished');
                console.log('***************\n');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=__setup.spec.js.map