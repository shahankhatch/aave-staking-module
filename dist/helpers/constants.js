"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAaveIncentivesVaultPerNetwork = exports.getDistributionDurationPerNetwork = exports.getAaveAdminPerNetwork = exports.getUnstakeWindowPerNetwork = exports.getCooldownSecondsPerNetwork = exports.getAaveTokenPerNetwork = exports.RANDOM_ADDRESSES = exports.PSM_STAKER_PREMIUM = exports.ZERO_ADDRESS = exports.STAKED_AAVE_DECIMALS = exports.STAKED_AAVE_SYMBOL = exports.STAKED_AAVE_NAME = exports.DISTRIBUTION_DURATION = exports.UNSTAKE_WINDOW = exports.COOLDOWN_SECONDS = exports.WAD = exports.MOCK_ETH_ADDRESS = exports.MAX_UINT_AMOUNT = void 0;
var types_1 = require("./types");
var misc_utils_1 = require("./misc-utils");
exports.MAX_UINT_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
exports.MOCK_ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
exports.WAD = Math.pow(10, 18).toString();
exports.COOLDOWN_SECONDS = '3600'; // 1 hour in seconds
exports.UNSTAKE_WINDOW = '18000'; // 30 min in seconds
exports.DISTRIBUTION_DURATION = '86400'; // 1 day in seconds
exports.STAKED_AAVE_NAME = 'Staked Aave';
exports.STAKED_AAVE_SYMBOL = 'stkAAVE';
exports.STAKED_AAVE_DECIMALS = 18;
exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
// PEI constants
exports.PSM_STAKER_PREMIUM = '2';
// just junk mock
exports.RANDOM_ADDRESSES = [
    '0x0000000000000000000000000000000000000221',
    '0x0000000000000000000000000000000000000321',
    '0x0000000000000000000000000000000000000211',
    '0x0000000000000000000000000000000000000251',
    '0x0000000000000000000000000000000000000271',
    '0x0000000000000000000000000000000000000291',
    '0x0000000000000000000000000000000000000321',
    '0x0000000000000000000000000000000000000421',
    '0x0000000000000000000000000000000000000521',
    '0x0000000000000000000000000000000000000621',
    '0x0000000000000000000000000000000000000721',
];
exports.getAaveTokenPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = exports.ZERO_ADDRESS,
        _a[types_1.eEthereumNetwork.buidlerevm] = exports.ZERO_ADDRESS,
        _a[types_1.eEthereumNetwork.kovan] = '0xe4483afcf0d612c011679C76B61F5b0d27bAF93C',
        _a[types_1.eEthereumNetwork.ropsten] = '0x74dA004A1B81b4d0C79F5820f9FF22647cb1dD95',
        _a[types_1.eEthereumNetwork.main] = '0x9c0435779F5E52CEC404D957C9bAa6f7d674C8bA',
        _a), network);
};
exports.getCooldownSecondsPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = exports.COOLDOWN_SECONDS,
        _a[types_1.eEthereumNetwork.buidlerevm] = exports.COOLDOWN_SECONDS,
        _a[types_1.eEthereumNetwork.kovan] = '21600',
        _a[types_1.eEthereumNetwork.ropsten] = '21600',
        _a[types_1.eEthereumNetwork.main] = '864000',
        _a), network);
};
exports.getUnstakeWindowPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = exports.UNSTAKE_WINDOW,
        _a[types_1.eEthereumNetwork.buidlerevm] = exports.UNSTAKE_WINDOW,
        _a[types_1.eEthereumNetwork.kovan] = '10800',
        _a[types_1.eEthereumNetwork.ropsten] = '10800',
        _a[types_1.eEthereumNetwork.main] = '172800',
        _a), network);
};
exports.getAaveAdminPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = exports.ZERO_ADDRESS,
        _a[types_1.eEthereumNetwork.buidlerevm] = exports.ZERO_ADDRESS,
        _a[types_1.eEthereumNetwork.kovan] = '0x6940B44a8eFBc625e1309d79F8dea34f155D4330',
        _a[types_1.eEthereumNetwork.ropsten] = '0xEd93e49A2d75beA505fD4D1A0Dff745f69F2E997',
        _a[types_1.eEthereumNetwork.main] = '0x8a2Efd9A790199F4c94c6effE210fce0B4724f52',
        _a), network);
};
exports.getDistributionDurationPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = exports.DISTRIBUTION_DURATION,
        _a[types_1.eEthereumNetwork.buidlerevm] = exports.DISTRIBUTION_DURATION,
        _a[types_1.eEthereumNetwork.kovan] = '864000',
        _a[types_1.eEthereumNetwork.ropsten] = '864000',
        _a[types_1.eEthereumNetwork.main] = '12960000',
        _a), network);
};
exports.getAaveIncentivesVaultPerNetwork = function (network) {
    var _a;
    return misc_utils_1.getParamPerNetwork((_a = {},
        _a[types_1.eEthereumNetwork.coverage] = '',
        _a[types_1.eEthereumNetwork.buidlerevm] = '',
        _a[types_1.eEthereumNetwork.kovan] = '',
        _a[types_1.eEthereumNetwork.ropsten] = '',
        _a[types_1.eEthereumNetwork.main] = '0x253f7b06c1d60c1fbbc9d82c301327eb86e3ba81',
        _a), network);
};
//# sourceMappingURL=constants.js.map