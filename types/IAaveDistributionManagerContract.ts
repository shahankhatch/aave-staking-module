/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IAaveDistributionManager } from "./IAaveDistributionManager";

export class IAaveDistributionManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveDistributionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAaveDistributionManager;
  }
}

const _abi = [
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
  }
];
