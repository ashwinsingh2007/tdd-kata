"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculateString_1 = require("../src/calculateString");
describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        (0, chai_1.expect)((0, calculateString_1.add)("")).to.equal(0);
    });
});
