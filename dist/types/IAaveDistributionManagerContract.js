/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
import { Contract } from "ethers";
var IAaveDistributionManagerFactory = /** @class */ (function () {
    function IAaveDistributionManagerFactory() {
    }
    IAaveDistributionManagerFactory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    return IAaveDistributionManagerFactory;
}());
export { IAaveDistributionManagerFactory };
var _abi = [
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
//# sourceMappingURL=IAaveDistributionManagerContract.js.map