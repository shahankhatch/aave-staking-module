import { eEthereumNetwork } from './types';
import { getParamPerNetwork } from './misc-utils';
export var MAX_UINT_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export var MOCK_ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
export var WAD = Math.pow(10, 18).toString();
export var COOLDOWN_SECONDS = '3600'; // 1 hour in seconds
export var UNSTAKE_WINDOW = '1800'; // 30 min in seconds
export var DISTRIBUTION_DURATION = '86400'; // 1 day in seconds
export var STAKED_AAVE_NAME = 'Staked Aave';
export var STAKED_AAVE_SYMBOL = 'stkAAVE';
export var STAKED_AAVE_DECIMALS = 18;
export var ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
// PEI constants
export var PSM_STAKER_PREMIUM = '2';
// just junk mock
export var RANDOM_ADDRESSES = [
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
export var getAaveTokenPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = ZERO_ADDRESS,
        _a[eEthereumNetwork.buidlerevm] = ZERO_ADDRESS,
        _a[eEthereumNetwork.kovan] = '0xe4483afcf0d612c011679C76B61F5b0d27bAF93C',
        _a[eEthereumNetwork.ropsten] = '0x74dA004A1B81b4d0C79F5820f9FF22647cb1dD95',
        _a[eEthereumNetwork.main] = '0x9c0435779F5E52CEC404D957C9bAa6f7d674C8bA',
        _a), network);
};
export var getCooldownSecondsPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = COOLDOWN_SECONDS,
        _a[eEthereumNetwork.buidlerevm] = COOLDOWN_SECONDS,
        _a[eEthereumNetwork.kovan] = '21600',
        _a[eEthereumNetwork.ropsten] = '21600',
        _a[eEthereumNetwork.main] = '864000',
        _a), network);
};
export var getUnstakeWindowPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = UNSTAKE_WINDOW,
        _a[eEthereumNetwork.buidlerevm] = UNSTAKE_WINDOW,
        _a[eEthereumNetwork.kovan] = '10800',
        _a[eEthereumNetwork.ropsten] = '10800',
        _a[eEthereumNetwork.main] = '172800',
        _a), network);
};
export var getAaveAdminPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = ZERO_ADDRESS,
        _a[eEthereumNetwork.buidlerevm] = ZERO_ADDRESS,
        _a[eEthereumNetwork.kovan] = '0x6940B44a8eFBc625e1309d79F8dea34f155D4330',
        _a[eEthereumNetwork.ropsten] = '0xEd93e49A2d75beA505fD4D1A0Dff745f69F2E997',
        _a[eEthereumNetwork.main] = '0x8a2Efd9A790199F4c94c6effE210fce0B4724f52',
        _a), network);
};
export var getDistributionDurationPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = DISTRIBUTION_DURATION,
        _a[eEthereumNetwork.buidlerevm] = DISTRIBUTION_DURATION,
        _a[eEthereumNetwork.kovan] = '864000',
        _a[eEthereumNetwork.ropsten] = '864000',
        _a[eEthereumNetwork.main] = '12960000',
        _a), network);
};
export var getAaveIncentivesVaultPerNetwork = function (network) {
    var _a;
    return getParamPerNetwork((_a = {},
        _a[eEthereumNetwork.coverage] = '',
        _a[eEthereumNetwork.buidlerevm] = '',
        _a[eEthereumNetwork.kovan] = '',
        _a[eEthereumNetwork.ropsten] = '',
        _a[eEthereumNetwork.main] = '0x253f7b06c1d60c1fbbc9d82c301327eb86e3ba81',
        _a), network);
};
//# sourceMappingURL=constants.js.map