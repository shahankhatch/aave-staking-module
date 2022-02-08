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
var AaveDistributionManagerFactory = /** @class */ (function (_super) {
    __extends(AaveDistributionManagerFactory, _super);
    function AaveDistributionManagerFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    AaveDistributionManagerFactory.prototype.deploy = function (emissionManager, distributionDuration, overrides) {
        return _super.prototype.deploy.call(this, emissionManager, distributionDuration, overrides || {});
    };
    AaveDistributionManagerFactory.prototype.getDeployTransaction = function (emissionManager, distributionDuration, overrides) {
        return _super.prototype.getDeployTransaction.call(this, emissionManager, distributionDuration, overrides || {});
    };
    AaveDistributionManagerFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AaveDistributionManagerFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AaveDistributionManagerFactory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    return AaveDistributionManagerFactory;
}(ContractFactory));
export { AaveDistributionManagerFactory };
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "emissionManager",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "distributionDuration",
                type: "uint256"
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
        name: "DISTRIBUTION_END",
        outputs: [
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
        inputs: [],
        name: "EMISSION_MANAGER",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "PRECISION",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "assets",
        outputs: [
            {
                internalType: "uint128",
                name: "emissionPerSecond",
                type: "uint128"
            },
            {
                internalType: "uint128",
                name: "lastUpdateTimestamp",
                type: "uint128"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint128",
                        name: "emissionPerSecond",
                        type: "uint128"
                    },
                    {
                        internalType: "uint256",
                        name: "totalStaked",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "underlyingAsset",
                        type: "address"
                    }
                ],
                internalType: "struct DistributionTypes.AssetConfigInput[]",
                name: "assetsConfigInput",
                type: "tuple[]"
            }
        ],
        name: "configureAssets",
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
            },
            {
                internalType: "address",
                name: "asset",
                type: "address"
            }
        ],
        name: "getUserAssetData",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
var _bytecode = "0x60c060405234801561001057600080fd5b50604051610a45380380610a4583398101604081905261002f91610094565b610046814261005f60201b6103671790919060201c565b6080525060601b6001600160601b03191660a052610103565b60008282018381101561008d5760405162461bcd60e51b8152600401610084906100cc565b60405180910390fd5b9392505050565b600080604083850312156100a6578182fd5b82516001600160a01b03811681146100bc578283fd5b6020939093015192949293505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60805160a05160601c61090861013d6000398061015c528061031752508061012a528061047852806104b452806104e152506109086000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633373ee4c14610067578063919cd40f14610090578063aaf5eb6814610098578063b2a5dbfa146100ad578063cbcbb507146100c2578063f11b8188146100d7575b600080fd5b61007a6100753660046106aa565b6100f9565b60405161008791906108bb565b60405180910390f35b61007a610128565b6100a061014c565b60405161008791906108c4565b6100c06100bb3660046106de565b610151565b005b6100ca610315565b6040516100879190610775565b6100ea6100e536600461068f565b610339565b60405161008793929190610897565b6001600160a01b0380821660009081526020818152604080832093861683526002909301905220545b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b601281565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101a25760405162461bcd60e51b815260040161019990610854565b60405180910390fd5b60005b818110156103105760008060008585858181106101be57fe5b90506060020160400160208101906101d6919061068f565b6001600160a01b03166001600160a01b03168152602001908152602001600020905061023b84848481811061020757fe5b905060600201604001602081019061021f919061068f565b8286868681811061022c57fe5b90506060020160200135610393565b5083838381811061024857fe5b61025e926020606090920201908101915061074e565b81546fffffffffffffffffffffffffffffffff19166001600160801b039190911617815583838381811061028e57fe5b90506060020160400160208101906102a6919061068f565b6001600160a01b03167f87fa03892a0556cb6b8f97e6d533a150d4d55fcbf275fff5fa003fa636bcc7fa8585858181106102dc57fe5b6102f2926020606090920201908101915061074e565b6040516102ff9190610883565b60405180910390a2506001016101a5565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060208190529081526040902080546001909101546001600160801b0380831692600160801b9004169083565b60008282018381101561038c5760405162461bcd60e51b8152600401610199906107dc565b9392505050565b6001820154825460009190600160801b90046001600160801b0316428114156103be5750905061038c565b84546000906103d99084906001600160801b03168488610450565b905082811461042d57808660010181905550866001600160a01b03167f5777ca300dfe5bead41006fbce4389794dbc0ed8d6cccebfaf94630aa04184bc8260405161042491906108bb565b60405180910390a25b85546001600160801b03428116600160801b029116178655925050509392505050565b600083158061045d575081155b80610470575042836001600160801b0316145b806104a457507f0000000000000000000000000000000000000000000000000000000000000000836001600160801b031610155b156104b057508361054f565b60007f000000000000000000000000000000000000000000000000000000000000000042116104df5742610501565b7f00000000000000000000000000000000000000000000000000000000000000005b90506000610518826001600160801b038716610557565b905061054a876105448661053e670de0b6b3a76400006105388c88610599565b90610599565b906105d3565b90610367565b925050505b949350505050565b600061038c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610615565b6000826105a857506000610122565b828202828482816105b557fe5b041461038c5760405162461bcd60e51b815260040161019990610813565b600061038c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610641565b600081848411156106395760405162461bcd60e51b81526004016101999190610789565b505050900390565b600081836106625760405162461bcd60e51b81526004016101999190610789565b50600083858161066e57fe5b0495945050505050565b80356001600160a01b038116811461012257600080fd5b6000602082840312156106a0578081fd5b61038c8383610678565b600080604083850312156106bc578081fd5b6106c68484610678565b91506106d58460208501610678565b90509250929050565b600080602083850312156106f0578182fd5b823567ffffffffffffffff80821115610707578384fd5b818501915085601f83011261071a578384fd5b813581811115610728578485fd5b86602060608302850101111561073c578485fd5b60209290920196919550909350505050565b60006020828403121561075f578081fd5b81356001600160801b038116811461038c578182fd5b6001600160a01b0391909116815260200190565b6000602080835283518082850152825b818110156107b557858101830151858201604001528201610799565b818111156107c65783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160801b0391909116815260200190565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b60ff9190911681526020019056fea2646970667358221220aab52b98cfab76ed80406f340de25fd8530f4b3aa48a85f61c24f93e38d0d4b864736f6c634300060c0033";
//# sourceMappingURL=AaveDistributionManagerFactory.js.map