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
import { deployContract, getContractFactory, getContract } from './contracts-helpers';
import { eContractid } from './types';
import { verifyContract } from './etherscan-verification';
import { getDb, BRE } from './misc-utils';
export var deployStakedAave = function (_a, verify) {
    var _b = __read(_a, 7), stakedToken = _b[0], rewardsToken = _b[1], cooldownSeconds = _b[2], unstakeWindow = _b[3], rewardsVault = _b[4], emissionManager = _b[5], distributionDuration = _b[6];
    return __awaiter(void 0, void 0, void 0, function () {
        var id, args, instance;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    id = eContractid.StakedAave;
                    args = [
                        stakedToken,
                        rewardsToken,
                        cooldownSeconds,
                        unstakeWindow,
                        rewardsVault,
                        emissionManager,
                        distributionDuration,
                    ];
                    return [4 /*yield*/, deployContract(id, args)];
                case 1:
                    instance = _c.sent();
                    if (!verify) return [3 /*break*/, 3];
                    return [4 /*yield*/, verifyContract(id, instance.address, args)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3: return [2 /*return*/, instance];
            }
        });
    });
};
export var deployAaveIncentivesController = function (_a, verify) {
    var _b = __read(_a, 6), rewardToken = _b[0], rewardsVault = _b[1], aavePsm = _b[2], extraPsmReward = _b[3], emissionManager = _b[4], distributionDuration = _b[5];
    return __awaiter(void 0, void 0, void 0, function () {
        var id, args, instance;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    id = eContractid.AaveIncentivesController;
                    args = [
                        rewardToken,
                        rewardsVault,
                        aavePsm,
                        extraPsmReward,
                        emissionManager,
                        distributionDuration,
                    ];
                    return [4 /*yield*/, deployContract(id, args)];
                case 1:
                    instance = _c.sent();
                    return [4 /*yield*/, instance.deployTransaction.wait()];
                case 2:
                    _c.sent();
                    if (!verify) return [3 /*break*/, 4];
                    return [4 /*yield*/, verifyContract(id, instance.address, args)];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4: return [2 /*return*/, instance];
            }
        });
    });
};
export var deployMintableErc20 = function (_a) {
    var _b = __read(_a, 3), name = _b[0], symbol = _b[1], decimals = _b[2];
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, deployContract(eContractid.MintableErc20, [name, symbol, decimals])];
            case 1: return [2 /*return*/, _c.sent()];
        }
    }); });
};
export var deployInitializableAdminUpgradeabilityProxy = function (verify) { return __awaiter(void 0, void 0, void 0, function () {
    var id, args, instance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = eContractid.InitializableAdminUpgradeabilityProxy;
                args = [];
                return [4 /*yield*/, deployContract(id, args)];
            case 1:
                instance = _a.sent();
                return [4 /*yield*/, instance.deployTransaction.wait()];
            case 2:
                _a.sent();
                if (!verify) return [3 /*break*/, 4];
                return [4 /*yield*/, verifyContract(id, instance.address, args)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, instance];
        }
    });
}); };
export var deployMockTransferHook = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, deployContract(eContractid.MockTransferHook, [])];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
export var deployATokenMock = function (aicAddress, slug) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, deployContract(eContractid.ATokenMock, [aicAddress], slug)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
export var getMintableErc20 = getContractFactory(eContractid.MintableErc20);
export var getLendingPoolMock = getContractFactory(eContractid.LendingPoolMock);
export var getStakedAave = getContractFactory(eContractid.StakedAave);
export var getStakedAaveProxy = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = getContract;
                _b = [eContractid.InitializableAdminUpgradeabilityProxy];
                _c = address;
                if (_c) return [3 /*break*/, 2];
                return [4 /*yield*/, getDb().get(eContractid.StakedAave + "." + BRE.network.name).value()];
            case 1:
                _c = (_d.sent()).address;
                _d.label = 2;
            case 2: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c]))];
            case 3: return [2 /*return*/, _d.sent()];
        }
    });
}); };
export var getStakedAaveImpl = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = getContract;
                _b = [eContractid.StakedAave];
                _c = address;
                if (_c) return [3 /*break*/, 2];
                return [4 /*yield*/, getDb().get(eContractid.StakedAaveImpl + "." + BRE.network.name).value()];
            case 1:
                _c = (_d.sent()).address;
                _d.label = 2;
            case 2: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c]))];
            case 3: return [2 /*return*/, _d.sent()];
        }
    });
}); };
export var getAaveIncentivesController = getContractFactory(eContractid.AaveIncentivesController);
export var getIErc20Detailed = getContractFactory(eContractid.IERC20Detailed);
export var getATokenMock = getContractFactory(eContractid.ATokenMock);
//# sourceMappingURL=contracts-accessors.js.map