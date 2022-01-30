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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVerification = exports.runTaskWithRetry = exports.verifyContract = exports.getEtherscanPath = exports.SUPPORTED_ETHERSCAN_NETWORKS = void 0;
var process_1 = require("process");
var fs_1 = __importDefault(require("fs"));
var tmp_promise_1 = require("tmp-promise");
var misc_utils_1 = require("./misc-utils");
exports.SUPPORTED_ETHERSCAN_NETWORKS = ['main', 'ropsten', 'kovan'];
exports.getEtherscanPath = function (contractName) { return __awaiter(void 0, void 0, void 0, function () {
    var compilerInput, paths, path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, misc_utils_1.BRE.run('compile:get-compiler-input')];
            case 1:
                compilerInput = _a.sent();
                paths = Object.keys(compilerInput.sources);
                path = paths.find(function (p) { return p.includes(contractName); });
                if (!path) {
                    throw new Error("Contract path not found for " + contractName + ". Check if smart contract file is equal to contractName input.");
                }
                return [2 /*return*/, path + ":" + contractName];
        }
    });
}); };
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.verifyContract = function (contractName, address, constructorArguments, libraries) { return __awaiter(void 0, void 0, void 0, function () {
    var currentNetwork, etherscanPath, msDelay, times, _a, fd, path, cleanup, params, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentNetwork = misc_utils_1.BRE.network.name;
                if (!process.env.ETHERSCAN_KEY) {
                    throw Error('Missing process.env.ETHERSCAN_KEY.');
                }
                if (!exports.SUPPORTED_ETHERSCAN_NETWORKS.includes(currentNetwork)) {
                    throw Error("Current network " + currentNetwork + " not supported. Please change to one of the next networks: " + exports.SUPPORTED_ETHERSCAN_NETWORKS.toString());
                }
                return [4 /*yield*/, exports.getEtherscanPath(contractName)];
            case 1:
                etherscanPath = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 5, , 6]);
                console.log('[ETHERSCAN][WARNING] Delaying Etherscan verification due their API can not find newly deployed contracts');
                msDelay = 3000;
                times = 60;
                return [4 /*yield*/, tmp_promise_1.file({
                        prefix: 'verify-params-',
                        postfix: '.js',
                    })];
            case 3:
                _a = _b.sent(), fd = _a.fd, path = _a.path, cleanup = _a.cleanup;
                fs_1.default.writeSync(fd, "module.exports = " + JSON.stringify(__spread(constructorArguments)) + ";");
                params = {
                    contractName: etherscanPath,
                    address: address,
                    libraries: libraries,
                    constructorArgs: path,
                };
                return [4 /*yield*/, exports.runTaskWithRetry('verify', params, times, msDelay, cleanup)];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.runTaskWithRetry = function (task, params, times, msDelay, cleanup) { return __awaiter(void 0, void 0, void 0, function () {
    var counter, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                counter = times;
                return [4 /*yield*/, delay(msDelay)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 8]);
                if (!times) return [3 /*break*/, 4];
                return [4 /*yield*/, misc_utils_1.BRE.run(task, params)];
            case 3:
                _a.sent();
                cleanup();
                return [3 /*break*/, 5];
            case 4:
                cleanup();
                console.error('[ERROR] Errors after all the retries, check the logs for more information.');
                _a.label = 5;
            case 5: return [3 /*break*/, 8];
            case 6:
                error_2 = _a.sent();
                counter--;
                console.info("[INFO] Retrying attemps: " + counter + ".");
                console.error('[ERROR]', error_2.message);
                return [4 /*yield*/, exports.runTaskWithRetry(task, params, counter, msDelay, cleanup)];
            case 7:
                _a.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.checkVerification = function () {
    var currentNetwork = misc_utils_1.BRE.network.name;
    if (!process.env.ETHERSCAN_KEY) {
        console.error('Missing process.env.ETHERSCAN_KEY.');
        process_1.exit(3);
    }
    if (!exports.SUPPORTED_ETHERSCAN_NETWORKS.includes(currentNetwork)) {
        console.error("Current network " + currentNetwork + " not supported. Please change to one of the next networks: " + exports.SUPPORTED_ETHERSCAN_NETWORKS.toString());
        process_1.exit(5);
    }
};
//# sourceMappingURL=etherscan-verification.js.map