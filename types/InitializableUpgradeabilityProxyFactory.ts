/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { InitializableUpgradeabilityProxy } from "./InitializableUpgradeabilityProxy";

export class InitializableUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<InitializableUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<
      InitializableUpgradeabilityProxy
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InitializableUpgradeabilityProxy {
    return super.attach(address) as InitializableUpgradeabilityProxy;
  }
  connect(signer: Signer): InitializableUpgradeabilityProxyFactory {
    return super.connect(signer) as InitializableUpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitializableUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InitializableUpgradeabilityProxy;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610432806100206000396000f3fe6080604052600436106100225760003560e01c8063d1f578941461002d57610023565b5b61002b610108565b005b6101066004803603604081101561004357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561008057600080fd5b82018360208201111561009257600080fd5b803590602001918460018302840111640100000000831117156100b457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610122565b005b610110610290565b61012061011b610292565b6102c3565b565b600073ffffffffffffffffffffffffffffffffffffffff16610142610292565b73ffffffffffffffffffffffffffffffffffffffff161461016257600080fd5b60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c0360001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b146101b757fe5b6101c0826102e9565b60008151111561028c5760008273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831061021757805182526020820191506020810190506020830392506101f4565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610277576040519150601f19603f3d011682016040523d82523d6000602084013e61027c565b606091505b505090508061028a57600080fd5b505b5050565b565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b9050805491505090565b3660008037600080366000845af43d6000803e80600081146102e4573d6000f35b3d6000fd5b6102f281610376565b610347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b8152602001806103c2603b913960400191505060405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156103b857506000801b8214155b9250505091905056fe43616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a264697066735822122033a4ce88baac268e27624e07f4ea7ca06dac2514b6aad72e52ed5b70ec6a9a6664736f6c634300060c0033";
