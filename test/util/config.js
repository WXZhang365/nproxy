"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cConfig = exports.sConfig = void 0;
const fs = require("node:fs");
const node_path_1 = require("node:path");
function Read(file) {
    const str = file.toString('utf-8');
    const obj = {};
    str.split('\n').forEach((item) => {
        const [key, value] = [[item.split('=')[0]], item.split('=')[1]];
        obj[`${key}`] = value;
    });
    return obj;
}
const dirname = (0, node_path_1.resolve)(__dirname, '..');
const sConfig = () => {
    return Read(fs.readFileSync((0, node_path_1.resolve)(dirname, '../s.ini')));
};
exports.sConfig = sConfig;
const cConfig = () => {
    return Read(fs.readFileSync((0, node_path_1.resolve)(dirname, '../c.ini')));
};
exports.cConfig = cConfig;
//# sourceMappingURL=config.js.map