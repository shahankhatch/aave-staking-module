"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToZDBigNumber = exports.valueToBigNumber = exports.BigNumberZD = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.BigNumberZD = bignumber_js_1.default.clone({
    DECIMAL_PLACES: 0,
    ROUNDING_MODE: bignumber_js_1.default.ROUND_DOWN,
});
function valueToBigNumber(amount) {
    return new bignumber_js_1.default(amount.toString());
}
exports.valueToBigNumber = valueToBigNumber;
function valueToZDBigNumber(amount) {
    return new exports.BigNumberZD(amount.toString());
}
exports.valueToZDBigNumber = valueToZDBigNumber;
//# sourceMappingURL=bignumber.js.map