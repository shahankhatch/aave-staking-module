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
var expect = require('chai').expect;
var make_suite_1 = require("../helpers/make-suite");
var constants_1 = require("../../helpers/constants");
var misc_utils_1 = require("../../helpers/misc-utils");
var contracts_helpers_1 = require("../../helpers/contracts-helpers");
var comparator_engine_1 = require("../helpers/comparator-engine");
var asset_data_1 = require("../DistributionManager/data-helpers/asset-data");
var configureAssetScenarios = [
    {
        caseName: 'Submit initial config for the assets',
        assets: [
            {
                emissionPerSecond: '11',
                totalStaked: '0',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Submit updated config for the assets',
        assets: [
            {
                emissionPerSecond: '33',
                totalStaked: '0',
            },
            {
                emissionPerSecond: '22',
                totalStaked: '0',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Indexes should change if emission are set not to 0, and pool has deposited and borrowed funds',
        assets: [
            {
                emissionPerSecond: '33',
                totalStaked: '100000',
            },
            {
                emissionPerSecond: '22',
                totalStaked: '123123123',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Indexes should cumulate rewards if next emission is 0',
        assets: [
            {
                emissionPerSecond: '0',
                totalStaked: '100000',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Indexes should not change if no emission',
        assets: [
            {
                emissionPerSecond: '222',
                totalStaked: '213213213213',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Should go to the limit if distribution ended',
        customTimeMovement: 1000 * 60 * 100,
        assets: [
            {
                emissionPerSecond: '222',
                totalStaked: '213213213213',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
    {
        caseName: 'Should not accrue any rewards after end or distribution',
        customTimeMovement: 1000,
        assets: [
            {
                emissionPerSecond: '222',
                totalStaked: '213213213213',
            },
        ],
        compareRules: {
            fieldsEqualToInput: ['emissionPerSecond'],
        },
    },
];
make_suite_1.makeSuite('AaveIncentivesController configureAssets', function (testEnv) {
    var e_1, _a;
    // custom checks
    it('Tries to submit config updates not from emission manager', function () { return __awaiter(void 0, void 0, void 0, function () {
        var aaveIncentivesController, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aaveIncentivesController = testEnv.aaveIncentivesController, users = testEnv.users;
                    return [4 /*yield*/, expect(aaveIncentivesController.connect(users[2].signer).configureAssets([])).to.be.revertedWith('ONLY_EMISSION_MANAGER')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var _loop_1 = function (assets, caseName, compareRules, customTimeMovement) {
        it(caseName, function () { return __awaiter(void 0, void 0, void 0, function () {
            var aaveIncentivesController, distributionEndTimestamp, assetConfigsUpdate, assetsConfigBefore, txReceipt, _a, configsUpdateBlockTimestamp, assetsConfigAfter, eventsEmitted, eventArrayIndex, i, assetConfigBefore, assetConfigUpdateInput, assetConfigAfter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        aaveIncentivesController = testEnv.aaveIncentivesController;
                        return [4 /*yield*/, aaveIncentivesController.DISTRIBUTION_END()];
                    case 1:
                        distributionEndTimestamp = _b.sent();
                        assetConfigsUpdate = [];
                        assets.forEach(function (assetConfig, i) {
                            if (i > constants_1.RANDOM_ADDRESSES.length) {
                                throw new Error('to many assets to test');
                            }
                            var underlyingAsset = constants_1.RANDOM_ADDRESSES[i];
                            assetConfigsUpdate.push(__assign(__assign({}, assetConfig), { underlyingAsset: underlyingAsset }));
                        });
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, assetConfigsUpdate)];
                    case 2:
                        assetsConfigBefore = _b.sent();
                        if (!customTimeMovement) return [3 /*break*/, 4];
                        return [4 /*yield*/, misc_utils_1.increaseTime(customTimeMovement)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _a = misc_utils_1.waitForTx;
                        return [4 /*yield*/, aaveIncentivesController.configureAssets(assetConfigsUpdate)];
                    case 5: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                    case 6:
                        txReceipt = _b.sent();
                        return [4 /*yield*/, contracts_helpers_1.getBlockTimestamp(txReceipt.blockNumber)];
                    case 7:
                        configsUpdateBlockTimestamp = _b.sent();
                        return [4 /*yield*/, asset_data_1.getAssetsData(aaveIncentivesController, assetConfigsUpdate)];
                    case 8:
                        assetsConfigAfter = _b.sent();
                        eventsEmitted = txReceipt.events || [];
                        eventArrayIndex = 0;
                        i = 0;
                        _b.label = 9;
                    case 9:
                        if (!(i < assetsConfigBefore.length)) return [3 /*break*/, 12];
                        assetConfigBefore = assetsConfigBefore[i];
                        assetConfigUpdateInput = assetConfigsUpdate[i];
                        assetConfigAfter = assetsConfigAfter[i];
                        if (!assetConfigAfter.index.eq(assetConfigBefore.index)) {
                            comparator_engine_1.eventChecker(eventsEmitted[eventArrayIndex], 'AssetIndexUpdated', [
                                assetConfigAfter.underlyingAsset,
                                assetConfigAfter.index,
                            ]);
                            eventArrayIndex += 1;
                        }
                        comparator_engine_1.eventChecker(eventsEmitted[eventArrayIndex], 'AssetConfigUpdated', [
                            assetConfigAfter.underlyingAsset,
                            assetConfigAfter.emissionPerSecond,
                        ]);
                        eventArrayIndex += 1;
                        return [4 /*yield*/, asset_data_1.assetDataComparator(assetConfigUpdateInput, assetConfigBefore, assetConfigAfter, configsUpdateBlockTimestamp, distributionEndTimestamp.toNumber(), compareRules || {})];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        i++;
                        return [3 /*break*/, 9];
                    case 12:
                        expect(eventsEmitted[eventArrayIndex]).to.be.equal(undefined, 'Too many events emitted');
                        return [2 /*return*/];
                }
            });
        }); });
    };
    try {
        // mutate compatible scenarios
        // TODO: add events emission
        for (var configureAssetScenarios_1 = __values(configureAssetScenarios), configureAssetScenarios_1_1 = configureAssetScenarios_1.next(); !configureAssetScenarios_1_1.done; configureAssetScenarios_1_1 = configureAssetScenarios_1.next()) {
            var _b = configureAssetScenarios_1_1.value, assets = _b.assets, caseName = _b.caseName, compareRules = _b.compareRules, customTimeMovement = _b.customTimeMovement;
            _loop_1(assets, caseName, compareRules, customTimeMovement);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configureAssetScenarios_1_1 && !configureAssetScenarios_1_1.done && (_a = configureAssetScenarios_1.return)) _a.call(configureAssetScenarios_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=configure-assets.spec.js.map