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
exports.increaseTimeAndMine = exports.increaseTime = exports.advanceBlock = exports.timeLatest = exports.evmRevert = exports.evmSnapshot = exports.waitForTx = exports.createRandomAddress = exports.sleep = exports.getParamPerNetwork = exports.setBRE = exports.BRE = exports.getDb = exports.stringToBigNumber = exports.toWad = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var lowdb_1 = __importDefault(require("lowdb"));
var FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
var constants_1 = require("./constants");
var ethers_1 = require("ethers");
var types_1 = require("./types");
exports.toWad = function (value) { return new bignumber_js_1.default(value).times(constants_1.WAD).toFixed(); };
exports.stringToBigNumber = function (amount) { return new bignumber_js_1.default(amount); };
exports.getDb = function () { return lowdb_1.default(new FileSync_1.default('./deployed-contracts.json')); };
exports.BRE = {};
exports.setBRE = function (_BRE) {
    exports.BRE = _BRE;
};
exports.getParamPerNetwork = function (_a, network) {
    var kovan = _a.kovan, ropsten = _a.ropsten, main = _a.main, buidlerevm = _a.buidlerevm;
    switch (network) {
        case types_1.eEthereumNetwork.buidlerevm:
            return buidlerevm;
        case types_1.eEthereumNetwork.kovan:
            return kovan;
        case types_1.eEthereumNetwork.ropsten:
            return ropsten;
        case types_1.eEthereumNetwork.main:
            return main;
        default:
            return main;
    }
};
exports.sleep = function (milliseconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
};
exports.createRandomAddress = function () { return ethers_1.Wallet.createRandom().address; };
exports.waitForTx = function (tx) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, tx.wait()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.evmSnapshot = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, exports.BRE.ethereum.send('evm_snapshot', [])];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.evmRevert = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, exports.BRE.ethereum.send('evm_revert', [id])];
}); }); };
exports.timeLatest = function () { return __awaiter(void 0, void 0, void 0, function () {
    var block;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.BRE.ethers.provider.getBlock('latest')];
            case 1:
                block = _a.sent();
                return [2 /*return*/, new bignumber_js_1.default(block.timestamp)];
        }
    });
}); };
exports.advanceBlock = function (timestamp) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, exports.BRE.ethers.provider.send('evm_mine', [timestamp])];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.increaseTime = function (secondsToIncrease) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, exports.BRE.ethers.provider.send('evm_increaseTime', [secondsToIncrease])];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.increaseTimeAndMine = function (secondsToIncrease) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.BRE.ethers.provider.send('evm_increaseTime', [secondsToIncrease])];
            case 1:
                _a.sent();
                return [4 /*yield*/, exports.BRE.ethers.provider.send('evm_mine', [])];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=misc-utils.js.map