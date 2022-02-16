"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUIDLEREVM_CHAIN_ID = void 0;
// @ts-ignore
var config_1 = require("@nomiclabs/buidler/config");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var test_wallets_1 = require("./test-wallets");
var types_1 = require("./helpers/types");
config_1.usePlugin('@nomiclabs/buidler-ethers');
config_1.usePlugin('buidler-typechain');
config_1.usePlugin('solidity-coverage');
config_1.usePlugin('@nomiclabs/buidler-waffle');
config_1.usePlugin('@nomiclabs/buidler-etherscan');
config_1.usePlugin('solidity-coverage');
['misc', 'deployments', 'migrations'].forEach(function (folder) {
    var tasksPath = path_1.default.join(__dirname, 'tasks', folder);
    fs_1.default.readdirSync(tasksPath).forEach(function (task) { return require(tasksPath + "/" + task); });
});
exports.BUIDLEREVM_CHAIN_ID = 31337;
var DEFAULT_BLOCK_GAS_LIMIT = 12500000;
var DEFAULT_GAS_PRICE = 50000000000; // 50 gwei
var HARDFORK = 'istanbul';
var INFURA_KEY = process.env.INFURA_KEY || '';
var ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
var MNEMONIC_PATH = "m/44'/60'/0'/0";
var MNEMONICS = (_a = {},
    _a[types_1.eEthereumNetwork.kovan] = process.env.MNEMONIC || '',
    _a[types_1.eEthereumNetwork.ropsten] = process.env.MNEMONIC || '',
    _a[types_1.eEthereumNetwork.main] = process.env.MNEMONIC || '',
    _a);
var getCommonNetworkConfig = function (networkName, networkId) {
    return {
        url: "https://" + networkName + ".infura.io/v3/" + INFURA_KEY,
        hardfork: HARDFORK,
        blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
        gasPrice: DEFAULT_GAS_PRICE,
        chainId: networkId,
        accounts: {
            mnemonic: MNEMONICS[networkName],
            path: MNEMONIC_PATH,
            initialIndex: 0,
            count: 20,
        },
    };
};
var config = {
    solc: {
        version: '0.6.12',
        optimizer: { enabled: true, runs: 200 },
        evmVersion: 'istanbul',
    },
    typechain: {
        outDir: 'types',
        target: 'ethers-v4',
    },
    etherscan: {
        apiKey: ETHERSCAN_KEY,
    },
    defaultNetwork: 'ganache',
    // defaultNetwork: 'buidlerevm',
    mocha: {
        timeout: 0,
    },
    networks: {
        kovan: getCommonNetworkConfig(types_1.eEthereumNetwork.kovan, 42),
        ropsten: getCommonNetworkConfig(types_1.eEthereumNetwork.ropsten, 3),
        main: getCommonNetworkConfig(types_1.eEthereumNetwork.main, 1),
        buidlerevm: {
            hardfork: 'istanbul',
            blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
            gas: DEFAULT_BLOCK_GAS_LIMIT,
            gasPrice: DEFAULT_GAS_PRICE,
            chainId: exports.BUIDLEREVM_CHAIN_ID,
            throwOnTransactionFailures: true,
            throwOnCallFailures: true,
            loggingEnabled: true,
            accounts: test_wallets_1.accounts.map(function (_a) {
                var secretKey = _a.secretKey, balance = _a.balance;
                return ({
                    privateKey: secretKey,
                    balance: balance,
                });
            }),
        },
        ganache: {
            url: 'http://127.0.0.1:8545',
            accounts: {
                mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
                path: "m/44'/60'/0'/0",
                initialIndex: 0,
                count: 20,
            },
            gas: DEFAULT_BLOCK_GAS_LIMIT,
            gasPrice: DEFAULT_GAS_PRICE,
            chainId: exports.BUIDLEREVM_CHAIN_ID
        },
        coverage: {
            url: 'http://localhost:8555',
        },
    },
};
exports.default = config;
//# sourceMappingURL=buidler.config.js.map