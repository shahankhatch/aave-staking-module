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
import { evmRevert, evmSnapshot, BRE } from '../../helpers/misc-utils';
import { getEthersSigners } from '../../helpers/contracts-helpers';
import chai from 'chai';
// @ts-ignore
import bignumberChai from 'chai-bignumber';
import { getAaveIncentivesController, getATokenMock, getMintableErc20, getStakedAave, } from '../../helpers/contracts-accessors';
chai.use(bignumberChai());
export var stakedAaveInitializeTimestamp = 0;
export var setStakedAaveInitializeTimestamp = function (timestamp) {
    stakedAaveInitializeTimestamp = timestamp;
};
var buidlerevmSnapshotId = '0x1';
var setBuidlerevmSnapshotId = function (id) {
    if (BRE.network.name === 'buidlerevm') {
        buidlerevmSnapshotId = id;
    }
};
var testEnv = {
    deployer: {},
    users: [],
    aaveToken: {},
    stakedAave: {},
    aaveIncentivesController: {},
    aDaiMock: {},
    aWethMock: {},
};
export function initializeMakeSuite() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _deployer, _rewardsVault, restSigners, deployer, _b, rewardsVault, _c, restSigners_1, restSigners_1_1, signer, _d, _e, _f, e_1_1, _g, _h, _j, _k, _l;
        var e_1, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0: return [4 /*yield*/, getEthersSigners()];
                case 1:
                    _a = __read.apply(void 0, [_o.sent()]), _deployer = _a[0], _rewardsVault = _a[1], restSigners = _a.slice(2);
                    _b = {};
                    return [4 /*yield*/, _deployer.getAddress()];
                case 2:
                    deployer = (_b.address = _o.sent(),
                        _b.signer = _deployer,
                        _b);
                    _c = {};
                    return [4 /*yield*/, _rewardsVault.getAddress()];
                case 3:
                    rewardsVault = (_c.address = _o.sent(),
                        _c.signer = _rewardsVault,
                        _c);
                    _o.label = 4;
                case 4:
                    _o.trys.push([4, 9, 10, 11]);
                    restSigners_1 = __values(restSigners), restSigners_1_1 = restSigners_1.next();
                    _o.label = 5;
                case 5:
                    if (!!restSigners_1_1.done) return [3 /*break*/, 8];
                    signer = restSigners_1_1.value;
                    _e = (_d = testEnv.users).push;
                    _f = {
                        signer: signer
                    };
                    return [4 /*yield*/, signer.getAddress()];
                case 6:
                    _e.apply(_d, [(_f.address = _o.sent(),
                            _f)]);
                    _o.label = 7;
                case 7:
                    restSigners_1_1 = restSigners_1.next();
                    return [3 /*break*/, 5];
                case 8: return [3 /*break*/, 11];
                case 9:
                    e_1_1 = _o.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 10:
                    try {
                        if (restSigners_1_1 && !restSigners_1_1.done && (_m = restSigners_1.return)) _m.call(restSigners_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 11:
                    testEnv.deployer = deployer;
                    testEnv.rewardsVault = rewardsVault;
                    _g = testEnv;
                    return [4 /*yield*/, getStakedAave()];
                case 12:
                    _g.stakedAave = _o.sent();
                    _h = testEnv;
                    return [4 /*yield*/, getAaveIncentivesController()];
                case 13:
                    _h.aaveIncentivesController = _o.sent();
                    _j = testEnv;
                    return [4 /*yield*/, getMintableErc20()];
                case 14:
                    _j.aaveToken = _o.sent();
                    _k = testEnv;
                    return [4 /*yield*/, getATokenMock({ slug: 'aDai' })];
                case 15:
                    _k.aDaiMock = _o.sent();
                    _l = testEnv;
                    return [4 /*yield*/, getATokenMock({ slug: 'aWeth' })];
                case 16:
                    _l.aWethMock = _o.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function makeSuite(name, tests) {
    var _this = this;
    describe(name, function () {
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = setBuidlerevmSnapshotId;
                        return [4 /*yield*/, evmSnapshot()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        }); });
        tests(testEnv);
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, evmRevert(buidlerevmSnapshotId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
}
//# sourceMappingURL=make-suite.js.map