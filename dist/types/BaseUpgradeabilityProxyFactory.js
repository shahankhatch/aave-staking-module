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
var BaseUpgradeabilityProxyFactory = /** @class */ (function (_super) {
    __extends(BaseUpgradeabilityProxyFactory, _super);
    function BaseUpgradeabilityProxyFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BaseUpgradeabilityProxyFactory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BaseUpgradeabilityProxyFactory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BaseUpgradeabilityProxyFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BaseUpgradeabilityProxyFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BaseUpgradeabilityProxyFactory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    return BaseUpgradeabilityProxyFactory;
}(ContractFactory));
export { BaseUpgradeabilityProxyFactory };
var _abi = [
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
    }
];
var _bytecode = "0x6080604052348015600f57600080fd5b50609e8061001e6000396000f3fe6080604052600a600c565b005b6012601e565b601e601a6020565b6045565b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156063573d6000f35b3d6000fdfea2646970667358221220037651c1ea926697e0739aa9465be325b80fcac1f7d61f2696979e5ffadf978f64736f6c634300060c0033";
//# sourceMappingURL=BaseUpgradeabilityProxyFactory.js.map