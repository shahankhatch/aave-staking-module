var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var expect = require('chai').expect;
export function comparatorEngine(fieldsToTrack, updateInput, stateBefore, stateAfter, actionBlockTimestamp, _a) {
    var _b = _a.fieldsEqualToInput, fieldsEqualToInput = _b === void 0 ? [] : _b, _c = _a.fieldsEqualToAnother, fieldsEqualToAnother = _c === void 0 ? [] : _c, _d = _a.fieldsWithCustomLogic, fieldsWithCustomLogic = _d === void 0 ? [] : _d;
    return __awaiter(this, void 0, void 0, function () {
        var unchangedFields, unchangedFields_1, unchangedFields_1_1, fieldName, fieldsEqualToInput_1, fieldsEqualToInput_1_1, fieldName, fieldsEqualToAnother_1, fieldsEqualToAnother_1_1, _e, fieldName, equalTo, fieldsWithCustomLogic_1, fieldsWithCustomLogic_1_1, _f, fieldName, logic, logicOutput, equalTo, _g, e_1_1;
        var e_2, _h, e_3, _j, e_4, _k, e_1, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    unchangedFields = fieldsToTrack.filter(function (fieldName) {
                        return !fieldsEqualToInput.includes(fieldName) &&
                            !fieldsEqualToAnother.find(function (eq) { return eq.fieldName === fieldName; }) &&
                            !fieldsWithCustomLogic.find(function (eq) { return eq.fieldName === fieldName; });
                    });
                    try {
                        for (unchangedFields_1 = __values(unchangedFields), unchangedFields_1_1 = unchangedFields_1.next(); !unchangedFields_1_1.done; unchangedFields_1_1 = unchangedFields_1.next()) {
                            fieldName = unchangedFields_1_1.value;
                            // @ts-ignore
                            expect(stateAfter[fieldName].toString()).to.be.equal(
                            // @ts-ignore
                            stateBefore[fieldName].toString(), fieldName + " should not change");
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (unchangedFields_1_1 && !unchangedFields_1_1.done && (_h = unchangedFields_1.return)) _h.call(unchangedFields_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    try {
                        for (fieldsEqualToInput_1 = __values(fieldsEqualToInput), fieldsEqualToInput_1_1 = fieldsEqualToInput_1.next(); !fieldsEqualToInput_1_1.done; fieldsEqualToInput_1_1 = fieldsEqualToInput_1.next()) {
                            fieldName = fieldsEqualToInput_1_1.value;
                            // @ts-ignore
                            expect(stateAfter[fieldName].toString()).to.be.equal(
                            // @ts-ignore
                            updateInput[fieldName].toString(), fieldName + " are not updated");
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (fieldsEqualToInput_1_1 && !fieldsEqualToInput_1_1.done && (_j = fieldsEqualToInput_1.return)) _j.call(fieldsEqualToInput_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    try {
                        for (fieldsEqualToAnother_1 = __values(fieldsEqualToAnother), fieldsEqualToAnother_1_1 = fieldsEqualToAnother_1.next(); !fieldsEqualToAnother_1_1.done; fieldsEqualToAnother_1_1 = fieldsEqualToAnother_1.next()) {
                            _e = fieldsEqualToAnother_1_1.value, fieldName = _e.fieldName, equalTo = _e.equalTo;
                            // @ts-ignore
                            expect(stateAfter[fieldName].toString()).to.be.equal(
                            // @ts-ignore
                            updateInput[equalTo].toString(), fieldName + " are not updated");
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (fieldsEqualToAnother_1_1 && !fieldsEqualToAnother_1_1.done && (_k = fieldsEqualToAnother_1.return)) _k.call(fieldsEqualToAnother_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    _m.label = 1;
                case 1:
                    _m.trys.push([1, 8, 9, 10]);
                    fieldsWithCustomLogic_1 = __values(fieldsWithCustomLogic), fieldsWithCustomLogic_1_1 = fieldsWithCustomLogic_1.next();
                    _m.label = 2;
                case 2:
                    if (!!fieldsWithCustomLogic_1_1.done) return [3 /*break*/, 7];
                    _f = fieldsWithCustomLogic_1_1.value, fieldName = _f.fieldName, logic = _f.logic;
                    logicOutput = logic(updateInput, stateBefore, stateAfter, actionBlockTimestamp);
                    if (!(logicOutput instanceof Promise)) return [3 /*break*/, 4];
                    return [4 /*yield*/, logicOutput];
                case 3:
                    _g = _m.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _g = logicOutput;
                    _m.label = 5;
                case 5:
                    equalTo = _g;
                    // @ts-ignore
                    expect(stateAfter[fieldName].toString()).to.be.equal(equalTo.toString(), fieldName + " are not correctly updated");
                    _m.label = 6;
                case 6:
                    fieldsWithCustomLogic_1_1 = fieldsWithCustomLogic_1.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _m.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (fieldsWithCustomLogic_1_1 && !fieldsWithCustomLogic_1_1.done && (_l = fieldsWithCustomLogic_1.return)) _l.call(fieldsWithCustomLogic_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    });
}
export function eventChecker(event, name, args) {
    var _a;
    if (args === void 0) { args = []; }
    expect(event.event).to.be.equal(name, "Incorrect event emitted");
    expect(((_a = event.args) === null || _a === void 0 ? void 0 : _a.length) || 0 / 2).to.be.equal(args.length, name + " signature are wrong");
    args.forEach(function (arg, index) {
        expect(event.args && event.args[index].toString()).to.be.equal(arg.toString(), name + " has incorrect value on position " + index);
    });
}
//# sourceMappingURL=comparator-engine.js.map