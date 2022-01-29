/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer, BigNumberish} from 'ethers';
import {Provider, TransactionRequest} from '@ethersproject/providers';
import {Contract, ContractFactory, Overrides} from '@ethersproject/contracts';

import {BaseDistribution} from './BaseDistribution';

export class BorrowDistributionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    STAKE_CONTRACT: string,
    lendingPool: string,
    distributionEnd: BigNumberish,
    overrides?: Overrides
  ): Promise<BaseDistribution> {
    return super.deploy(STAKE_CONTRACT, lendingPool, distributionEnd, overrides || {}) as Promise<
      BaseDistribution
    >;
  }
  getDeployTransaction(
    STAKE_CONTRACT: string,
    lendingPool: string,
    distributionEnd: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      STAKE_CONTRACT,
      lendingPool,
      distributionEnd,
      overrides || {}
    );
  }
  attach(address: string): BaseDistribution {
    return super.attach(address) as BaseDistribution;
  }
  connect(signer: Signer): BorrowDistributionFactory {
    return super.connect(signer) as BorrowDistributionFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BaseDistribution {
    return new Contract(address, _abi, signerOrProvider) as BaseDistribution;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'STAKE_CONTRACT',
        type: 'address',
      },
      {
        internalType: 'contract ILendingPool',
        name: 'lendingPool',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'distributionEnd',
        type: 'uint128',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'emission',
        type: 'uint256',
      },
    ],
    name: 'AssetConfigUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'AssetIndexesUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'EMISSION_MANAGER',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REVISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_assets',
    outputs: [
      {
        internalType: 'uint128',
        name: 'emissionPerSecond',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'lastUpdateTimestamp',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_users',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'claimRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'emissionPerSecond',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address',
          },
        ],
        internalType: 'struct IDistribution.AssetConfigInput[]',
        name: 'assetsNewConfig',
        type: 'tuple[]',
      },
    ],
    name: 'configureAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUnclaimedRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getUserAssetData',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'emissionManager',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'stakedByUser',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalStaked',
        type: 'uint256',
      },
    ],
    name: 'userPositionUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60e06040526000805534801561001457600080fd5b506040516112dc3803806112dc8339810160408190526100339161005f565b6001600160601b0319606093841b811660a0526001600160801b03909116608052911b1660c0526100ce565b600080600060608486031215610073578283fd5b835161007e816100b6565b602085015190935061008f816100b6565b60408501519092506001600160801b03811681146100ab578182fd5b809150509250925092565b6001600160a01b03811681146100cb57600080fd5b50565b60805160a05160601c60c05160601c6111cd61010f60003980610672528061085552806109025250806103a0525080610b205280610b4d52506111cd6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806369a69e291161006657806369a69e2914610129578063c4d66de81461013c578063cbcbb5071461014f578063dde43cba14610164578063ef5cfb8c1461016c5761009e565b80631499cd2f146100a35780631c2031a5146100ce5780633373ee4c146100e35780633e6a0caa146101035780635744c9a114610116575b600080fd5b6100b66100b1366004610cb7565b61017f565b6040516100c59392919061112b565b60405180910390f35b6100e16100dc366004610dfb565b6101ad565b005b6100f66100f1366004610cd3565b610368565b6040516100c5919061114f565b6100e1610111366004610d0b565b610395565b6100f6610124366004610cd3565b6103f0565b6100f6610137366004610cb7565b61040d565b6100e161014a366004610cb7565b61056e565b6101576105c0565b6040516100c59190610edf565b6100f66105cf565b6100f661017a366004610cb7565b6105d4565b603460205260009081526040902080546001909101546001600160801b0380831692600160801b9004169083565b6033546001600160a01b031633146101e05760405162461bcd60e51b81526004016101d7906110fc565b60405180910390fd5b60005b81811015610363576000603460008585858181106101fd57fe5b90506040020160200160208101906102159190610cb7565b6001600160a01b03166001600160a01b031681526020019081526020016000209050600061026585858581811061024857fe5b90506040020160200160208101906102609190610cb7565b610658565b905061029585858581811061027657fe5b905060400201602001602081019061028e9190610cb7565b8383610703565b508484848181106102a257fe5b6102b89260206040909202019081019150610e68565b82546fffffffffffffffffffffffffffffffff19166001600160801b03919091161782557f87fa03892a0556cb6b8f97e6d533a150d4d55fcbf275fff5fa003fa636bcc7fa85858581811061030957fe5b90506040020160200160208101906103219190610cb7565b86868681811061032d57fe5b6103439260206040909202019081019150610e68565b604051610351929190610f0d565b60405180910390a150506001016101e3565b505050565b6001600160a01b038083166000908152603560209081526040808320938516835292905220545b92915050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103dd5760405162461bcd60e51b81526004016101d790611040565b6103e9838584846107be565b5050505050565b603560209081526000928352604080842090915290825290205481565b600080606061041b84610851565b905060005b815181101561056357600061044783838151811061043a57fe5b6020026020010151610658565b9050600061046884848151811061045a57fe5b6020026020010151886108e8565b905060006104da6034600087878151811061047f57fe5b6020908102919091018101516001600160a01b03168252818101929092526040908101600020815160608101835281546001600160801b038082168352600160801b90910416938101939093526001015490820152846109a7565b90506105526105458383603560008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008a8a8151811061051757fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020546109fd565b879063ffffffff610a2f16565b955050600190920191506104209050565b50909150505b919050565b6000610578610a54565b9050600054811161059b5760405162461bcd60e51b81526004016101d7906110ae565b600055603380546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b031681565b600181565b600060606105e183610851565b90506000805b82518110156106505760008382815181106105fe57fe5b60200260200101519050600061061382610658565b9050600061062183896108e8565b905061063f610632898584866107be565b869063ffffffff610a2f16565b945050600190920191506105e79050565b509392505050565b6040516335ea6a7560e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906106a7908590600401610edf565b604080518083038186803b1580156106be57600080fd5b505afa9250505080156106ee575060408051601f3d908101601f191682019092526106eb91810190610e8f565b60015b6106fa57506000610569565b91506105699050565b600061070d610c8c565b506040805160608101825284546001600160801b038082168352600160801b909104166020820152600185015491810191909152600061074d82856109a7565b90508160400151811461079c57600185018190556040517ffa756a372df6c03b71b6df51f5759c6566453d5ab1babde3f562778d486f4e59906107939088908490610f2f565b60405180910390a15b84546001600160801b03428116600160801b0291161785559150509392505050565b6001600160a01b03808516600090815260356020908152604080832093871683529281528282205460349091529181209091908290819061080190889087610703565b9050808314610846576001600160a01b038089166000908152603560209081526040808320938b168352929052208190558515610846576108438682856109fd565b91505b509695505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160006040518083038186803b1580156108ac57600080fd5b505afa1580156108c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261038f9190810190610d50565b6040516328dd2d0160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906328dd2d01906109399086908690600401610ef3565b60606040518083038186803b15801561095157600080fd5b505afa925050508015610981575060408051601f3d908101601f1916820190925261097e91810190610eb2565b60015b61098d5750600061038f565b61099d828263ffffffff610a2f16565b935050505061038f565b60408201518251600091906001600160801b0316158015906109c857508215155b156109f6576109f3838286600001516001600160801b031687602001516001600160801b0316610a59565b90505b9392505050565b6000610a27610a22610a15858563ffffffff610a9616565b869063ffffffff610abe16565b610b02565b949350505050565b6000828201838110156109f65760405162461bcd60e51b81526004016101d790610f9b565b600190565b6000610a8d84610a8187610a75610a708888610b1b565b610b93565b9063ffffffff610ba916565b9063ffffffff610a2f16565b95945050505050565b600082821115610ab85760405162461bcd60e51b81526004016101d790610fd2565b50900390565b60006109f66b033b2e3c9fd0803ce8000000610af6610ae3868663ffffffff610bde16565b6b019d971e4fe8401e7400000090610a2f565b9063ffffffff610c1816565b6000631dcd65006109f6633b9aca00610af68386610a2f565b6000807f00000000000000000000000000000000000000000000000000000000000000004211610b4b5742610b6d565b7f00000000000000000000000000000000000000000000000000000000000000005b90506000610b81828563ffffffff610a9616565b9050610a8d858263ffffffff610bde16565b600061038f82633b9aca0063ffffffff610bde16565b6000808211610bca5760405162461bcd60e51b81526004016101d790611009565b6000828481610bd557fe5b04949350505050565b600082610bed5750600061038f565b82820282848281610bfa57fe5b04146109f65760405162461bcd60e51b81526004016101d79061106d565b60006109f683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183610c765760405162461bcd60e51b81526004016101d79190610f48565b506000838581610c8257fe5b0495945050505050565b604080516060810182526000808252602082018190529181019190915290565b805161038f8161117f565b600060208284031215610cc8578081fd5b81356109f68161117f565b60008060408385031215610ce5578081fd5b8235610cf08161117f565b91506020830135610d008161117f565b809150509250929050565b60008060008060808587031215610d20578182fd5b8435610d2b8161117f565b93506020850135610d3b8161117f565b93969395505050506040820135916060013590565b60006020808385031215610d62578182fd5b825167ffffffffffffffff80821115610d79578384fd5b81850186601f820112610d8a578485fd5b8051925081831115610d9a578485fd5b8383029150610daa848301611158565b8381528481019082860184840187018a1015610dc4578788fd5b8794505b85851015610dee57610dda8a82610cac565b835260019490940193918601918601610dc8565b5098975050505050505050565b60008060208385031215610e0d578182fd5b823567ffffffffffffffff80821115610e24578384fd5b81850186601f820112610e35578485fd5b8035925081831115610e45578485fd5b866020604085028301011115610e59578485fd5b60200196919550909350505050565b600060208284031215610e79578081fd5b81356001600160801b03811681146109f6578182fd5b60008060408385031215610ea1578182fd5b505080516020909101519092909150565b600080600060608486031215610ec6578283fd5b8351925060208401519150604084015190509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039290921682526001600160801b0316602082015260400190565b6001600160a01b03929092168252602082015260400190565b6000602080835283518082850152825b81811015610f7457858101830151858201604001528201610f58565b81811115610f855783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b60208082526013908201527213d3931657d4d51052d157d0d3d395149050d5606a1b604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561117757600080fd5b604052919050565b6001600160a01b038116811461119457600080fd5b5056fea26469706673582212207b355ec8f92cf109f5c8d8dc9914349659998b9816480ef8cf824657e7b7098264736f6c634300060a0033';
