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
exports.getContract = exports.getContractFactory = exports.deployContract = exports.decodeAbiNumber = exports.getBlockTimestamp = exports.getCurrentBlock = exports.getEthersSignersAddresses = exports.getEthersSigners = exports.insertContractAddressInDb = exports.registerContractInJsonDb = void 0;
var ethers_1 = require("ethers");
var misc_utils_1 = require("./misc-utils");
exports.registerContractInJsonDb = function (contractId, contractInstance) { return __awaiter(void 0, void 0, void 0, function () {
    var currentNetwork;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentNetwork = misc_utils_1.BRE.network.name;
                if (currentNetwork !== 'buidlerevm' && currentNetwork !== 'soliditycoverage') {
                    console.log("*** " + contractId + " ***\n");
                    console.log("Network: " + currentNetwork);
                    console.log("tx: " + contractInstance.deployTransaction.hash);
                    console.log("contract address: " + contractInstance.address);
                    console.log("deployer address: " + contractInstance.deployTransaction.from);
                    console.log("gas price: " + contractInstance.deployTransaction.gasPrice);
                    console.log("gas used: " + contractInstance.deployTransaction.gasLimit);
                    console.log("\n******");
                    console.log();
                }
                return [4 /*yield*/, misc_utils_1.getDb()
                        .set(contractId + "." + currentNetwork, {
                        address: contractInstance.address,
                        deployer: contractInstance.deployTransaction.from,
                    })
                        .write()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.insertContractAddressInDb = function (id, address) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, misc_utils_1.getDb()
                    .set(id + "." + misc_utils_1.BRE.network.name, {
                    address: address,
                })
                    .write()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getEthersSigners = function () { return __awaiter(void 0, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = Promise).all;
            return [4 /*yield*/, misc_utils_1.BRE.ethers.getSigners()];
        case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
        case 2: return [2 /*return*/, _c.sent()];
    }
}); }); };
exports.getEthersSignersAddresses = function () { return __awaiter(void 0, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = Promise).all;
            return [4 /*yield*/, misc_utils_1.BRE.ethers.getSigners()];
        case 1: return [4 /*yield*/, _b.apply(_a, [(_c.sent()).map(function (signer) { return signer.getAddress(); })])];
        case 2: return [2 /*return*/, _c.sent()];
    }
}); }); };
exports.getCurrentBlock = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, misc_utils_1.BRE.ethers.provider.getBlockNumber()];
    });
}); };
exports.getBlockTimestamp = function (blockNumber) { return __awaiter(void 0, void 0, void 0, function () {
    var block;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!blockNumber) {
                    throw new Error('No block number passed');
                }
                return [4 /*yield*/, misc_utils_1.BRE.ethers.provider.getBlock(blockNumber)];
            case 1:
                block = _a.sent();
                return [2 /*return*/, block.timestamp];
        }
    });
}); };
exports.decodeAbiNumber = function (data) {
    return parseInt(ethers_1.utils.defaultAbiCoder.decode(['uint256'], data).toString());
};
exports.deployContract = function (contractName, args, slug) {
    if (slug === void 0) { slug = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var contract;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, misc_utils_1.BRE.ethers.getContractFactory(contractName)];
                case 1: return [4 /*yield*/, (_a = (_b.sent())).deploy.apply(_a, __spread(args))];
                case 2:
                    contract = (_b.sent());
                    return [4 /*yield*/, exports.registerContractInJsonDb("" + contractName + (slug ? "-" + slug : ''), contract)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, contract];
            }
        });
    });
};
exports.getContractFactory = function (contractName) { return function (contractGetter) { return __awaiter(void 0, void 0, void 0, function () {
    var deployedContract, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                deployedContract = '';
                if (!!(contractGetter === null || contractGetter === void 0 ? void 0 : contractGetter.address)) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, misc_utils_1.getDb()
                        .get("" + contractName + ((contractGetter === null || contractGetter === void 0 ? void 0 : contractGetter.slug) ? "-" + contractGetter.slug : '') + "." + misc_utils_1.BRE.network.name)
                        .value()];
            case 2:
                deployedContract = (_a.sent()).address;
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                throw new Error("Contract " + contractName + " was not deployed on " + misc_utils_1.BRE.network.name + " or not stored in DB");
            case 4: return [4 /*yield*/, misc_utils_1.BRE.ethers.getContractAt(contractName, (contractGetter === null || contractGetter === void 0 ? void 0 : contractGetter.address) || deployedContract)];
            case 5: return [2 /*return*/, (_a.sent())];
        }
    });
}); }; };
var linkBytecode = function (artifact, libraries) {
    var e_2, _a, e_3, _b, e_4, _c;
    var bytecode = artifact.bytecode;
    try {
        for (var _d = __values(Object.entries(artifact.linkReferences)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), fileName = _f[0], fileReferences = _f[1];
            try {
                for (var _g = (e_3 = void 0, __values(Object.entries(fileReferences))), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _j = __read(_h.value, 2), libName = _j[0], fixups = _j[1];
                    var addr = libraries[libName];
                    if (addr === undefined) {
                        continue;
                    }
                    try {
                        for (var fixups_1 = (e_4 = void 0, __values(fixups)), fixups_1_1 = fixups_1.next(); !fixups_1_1.done; fixups_1_1 = fixups_1.next()) {
                            var fixup = fixups_1_1.value;
                            bytecode =
                                bytecode.substr(0, 2 + fixup.start * 2) +
                                    addr.substr(2) +
                                    bytecode.substr(2 + (fixup.start + fixup.length) * 2);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (fixups_1_1 && !fixups_1_1.done && (_c = fixups_1.return)) _c.call(fixups_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return bytecode;
};
exports.getContract = function (contractName, address) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, misc_utils_1.BRE.ethers.getContractAt(contractName, address)];
        case 1: return [2 /*return*/, (_a.sent())];
    }
}); }); };
//# sourceMappingURL=contracts-helpers.js.map