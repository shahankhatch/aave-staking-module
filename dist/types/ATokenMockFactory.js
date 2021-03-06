/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Contract, ContractFactory } from "@ethersproject/contracts";
var ATokenMockFactory = /** @class */ (function (_super) {
    __extends(ATokenMockFactory, _super);
    function ATokenMockFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ATokenMockFactory.prototype.deploy = function (aic, overrides) {
        return _super.prototype.deploy.call(this, aic, overrides || {});
    };
    ATokenMockFactory.prototype.getDeployTransaction = function (aic, overrides) {
        return _super.prototype.getDeployTransaction.call(this, aic, overrides || {});
    };
    ATokenMockFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ATokenMockFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ATokenMockFactory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    return ATokenMockFactory;
}(ContractFactory));
export { ATokenMockFactory };
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IAaveIncentivesController",
                name: "aic",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "emission",
                type: "uint256"
            }
        ],
        name: "AssetConfigUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        name: "AssetIndexUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "RewardsAccrued",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        name: "UserIndexUpdated",
        type: "event"
    },
    {
        inputs: [],
        name: "_aic",
        outputs: [
            {
                internalType: "contract IAaveIncentivesController",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "cleanUserState",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            }
        ],
        name: "getScaledUserBalanceAndSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "userBalance",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            }
        ],
        name: "handleActionOnAic",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "userBalance",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            }
        ],
        name: "setUserBalanceAndSupply",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161030438038061030483398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610273806100916000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630afbcdc91461005c57806334743e7c14610086578063b39944ba1461009b578063b41c6f98146100a3578063f794ca51146100b8575b600080fd5b61006f61006a366004610184565b6100cb565b60405161007d92919061022f565b60405180910390f35b6100996100943660046101a6565b6100d6565b005b610099610141565b6100ab61014d565b60405161007d919061021b565b6100996100c63660046101d9565b61015c565b600154600254915091565b6000546040516318c39f1760e11b81526001600160a01b03909116906331873e2e9061010a908690869086906004016101fa565b600060405180830381600087803b15801561012457600080fd5b505af1158015610138573d6000803e3d6000fd5b50505050505050565b60006001819055600255565b6000546001600160a01b031681565b600191909155600255565b80356001600160a01b038116811461017e57600080fd5b92915050565b600060208284031215610195578081fd5b61019f8383610167565b9392505050565b6000806000606084860312156101ba578182fd5b6101c48585610167565b95602085013595506040909401359392505050565b600080604083850312156101eb578182fd5b50508035926020909101359150565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0391909116815260200190565b91825260208201526040019056fea2646970667358221220e7e88818978e3a80777de2a6d4da8eac881b29f63bb44a85031a0b2dd5ca8a2764736f6c634300060c0033";
//# sourceMappingURL=ATokenMockFactory.js.map