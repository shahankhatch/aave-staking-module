/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
import { Contract } from "ethers";
var ITransferHookFactory = /** @class */ (function () {
    function ITransferHookFactory() {
    }
    ITransferHookFactory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    return ITransferHookFactory;
}());
export { ITransferHookFactory };
var _abi = [
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
//# sourceMappingURL=ITransferHookContract.js.map