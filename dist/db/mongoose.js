"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dataBase = () => {
    mongoose_1.default.connect(process.env.DB).then(() => {
        console.log(`connected to port ${process.env.DB}`);
    }).catch((e) => console.log(e));
};
exports.dataBase = dataBase;
