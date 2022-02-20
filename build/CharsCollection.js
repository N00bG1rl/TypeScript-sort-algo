"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        const left = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = left;
        this.data = chars.join('');
    }
}
exports.CharCollection = CharCollection;
