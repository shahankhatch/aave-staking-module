"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATokenMock = void 0;
var contracts_1 = require("@ethersproject/contracts");
var ATokenMock = /** @class */ (function (_super) {
    __extends(ATokenMock, _super);
    function ATokenMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ATokenMock;
}(contracts_1.Contract));
exports.ATokenMock = ATokenMock;
//# sourceMappingURL=ATokenMock.js.map