/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { ITransferHook } from "./ITransferHook";

export class ITransferHookFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferHook {
    return new Contract(address, _abi, signerOrProvider) as ITransferHook;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "onTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
