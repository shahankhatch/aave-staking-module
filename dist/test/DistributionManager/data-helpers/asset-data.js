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
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetDataComparator = exports.getAssetsData = void 0;
var comparator_engine_1 = require("../../helpers/comparator-engine");
var ray_math_1 = require("../../helpers/ray-math");
function getAssetsData(peiContract, assets) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(assets.map(function (_a) {
                        var underlyingAsset = _a.underlyingAsset;
                        return __awaiter(_this, void 0, void 0, function () {
                            var _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = [{}];
                                        return [4 /*yield*/, peiContract.assets(underlyingAsset)];
                                    case 1: return [2 /*return*/, (__assign.apply(void 0, [__assign.apply(void 0, _b.concat([(_c.sent())])), { underlyingAsset: underlyingAsset }]))];
                                }
                            });
                        });
                    }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getAssetsData = getAssetsData;
function assetDataComparator(assetConfigUpdateInput, assetConfigBefore, assetConfigAfter, actionBlockTimestamp, emissionEndTimestamp, compareRules) {
    var _this = this;
    return comparator_engine_1.comparatorEngine(['emissionPerSecond', 'index', 'lastUpdateTimestamp'], assetConfigUpdateInput, assetConfigBefore, assetConfigAfter, actionBlockTimestamp, __assign(__assign({}, compareRules), { fieldsWithCustomLogic: __spread([
            // should happen on any update
            {
                fieldName: 'lastUpdateTimestamp',
                logic: function (stateUpdate, stateBefore, stateAfter, txTimestamp) { return txTimestamp.toString(); },
            },
            {
                fieldName: 'index',
                logic: function (stateUpdate, stateBefore, stateAfter, txTimestamp) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, ray_math_1.getNormalizedDistribution(stateUpdate.totalStaked.toString(), stateBefore.index, stateBefore.emissionPerSecond, stateBefore.lastUpdateTimestamp, txTimestamp, emissionEndTimestamp).toString(10)];
                    });
                }); },
            }
        ], (compareRules.fieldsWithCustomLogic || [])) }));
}
exports.assetDataComparator = assetDataComparator;
//# sourceMappingURL=asset-data.js.map