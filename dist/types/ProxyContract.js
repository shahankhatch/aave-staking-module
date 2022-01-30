"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyFactory = void 0;
var ethers_1 = require("ethers");
var ProxyFactory = /** @class */ (function () {
    function ProxyFactory() {
    }
    ProxyFactory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ProxyFactory;
}());
exports.ProxyFactory = ProxyFactory;
var _abi = [
    {
        stateMutability: "payable",
        type: "fallback"
    }
];
//# sourceMappingURL=ProxyContract.js.map