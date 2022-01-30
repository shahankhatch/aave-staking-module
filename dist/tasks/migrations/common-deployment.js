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
var config_1 = require("@nomiclabs/buidler/config");
var types_1 = require("../../helpers/types");
var etherscan_verification_1 = require("../../helpers/etherscan-verification");
var constants_1 = require("../../helpers/constants");
config_1.task('common-deployment', 'Deployment in for Main, Kovan and Ropsten networks')
    .addFlag('verify', 'Verify StakedAave and InitializableAdminUpgradeabilityProxy contract.')
    .addOptionalParam('vaultAddress', 'Use AaveIncentivesVault address by param instead of configuration.')
    .addOptionalParam('aaveAddress', 'Use AaveToken address by param instead of configuration.')
    .setAction(function (_a, localBRE) {
    var verify = _a.verify, vaultAddress = _a.vaultAddress, aaveAddress = _a.aaveAddress;
    return __awaiter(void 0, void 0, void 0, function () {
        var BRE, network, aaveAdmin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, localBRE.run('set-bre')];
                case 1:
                    BRE = _b.sent();
                    network = BRE.network.name;
                    aaveAdmin = constants_1.getAaveAdminPerNetwork(network);
                    if (!aaveAdmin) {
                        throw Error('The --admin parameter must be set. Set an Ethereum address as --admin parameter input.');
                    }
                    // If Etherscan verification is enabled, check needed enviroments to prevent loss of gas in failed deployments.
                    if (verify) {
                        etherscan_verification_1.checkVerification();
                    }
                    return [4 /*yield*/, BRE.run("deploy-" + types_1.eContractid.StakedAave, { verify: verify, vaultAddress: vaultAddress, aaveAddress: aaveAddress })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, BRE.run("initialize-" + types_1.eContractid.StakedAave, {
                            admin: aaveAdmin,
                        })];
                case 3:
                    _b.sent();
                    console.log("\n\u2714\uFE0F Finished the deployment of the Aave Token " + network + " Enviroment. \u2714\uFE0F");
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=common-deployment.js.map