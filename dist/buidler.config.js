var _a;
import { usePlugin } from '@nomiclabs/buidler/config';
import path from 'path';
import fs from 'fs';
import { accounts } from './test-wallets';
import { eEthereumNetwork } from './helpers/types';
usePlugin('@nomiclabs/buidler-ethers');
usePlugin('buidler-typechain');
usePlugin('solidity-coverage');
usePlugin('@nomiclabs/buidler-waffle');
usePlugin('@nomiclabs/buidler-etherscan');
usePlugin('solidity-coverage');
['misc', 'deployments', 'migrations'].forEach(function (folder) {
    var tasksPath = path.join(__dirname, 'tasks', folder);
    fs.readdirSync(tasksPath).forEach(function (task) { return require(tasksPath + "/" + task); });
});
export var BUIDLEREVM_CHAIN_ID = 31337;
var DEFAULT_BLOCK_GAS_LIMIT = 12500000;
var DEFAULT_GAS_PRICE = 50000000000; // 50 gwei
var HARDFORK = 'istanbul';
var INFURA_KEY = process.env.INFURA_KEY || '';
var ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
var MNEMONIC_PATH = "m/44'/60'/0'/0";
var MNEMONICS = (_a = {},
    _a[eEthereumNetwork.kovan] = process.env.MNEMONIC || '',
    _a[eEthereumNetwork.ropsten] = process.env.MNEMONIC || '',
    _a[eEthereumNetwork.main] = process.env.MNEMONIC || '',
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
    // defaultNetwork: 'localhost',
    defaultNetwork: 'buidlerevm',
    mocha: {
        timeout: 0,
    },
    networks: {
        kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
        ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
        main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
        buidlerevm: {
            hardfork: 'istanbul',
            blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
            gas: 2000000,
            gasPrice: DEFAULT_GAS_PRICE,
            chainId: BUIDLEREVM_CHAIN_ID,
            throwOnTransactionFailures: true,
            throwOnCallFailures: true,
            loggingEnabled: true,
            accounts: accounts.map(function (_a) {
                var secretKey = _a.secretKey, balance = _a.balance;
                return ({
                    privateKey: secretKey,
                    balance: balance,
                });
            }),
        },
        ganache: {
            url: 'http://ganache:8545',
            accounts: {
                mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
                path: "m/44'/60'/0'/0",
                initialIndex: 0,
                count: 20,
            },
        },
        coverage: {
            url: 'http://localhost:8555',
        },
    },
};
export default config;
//# sourceMappingURL=buidler.config.js.map