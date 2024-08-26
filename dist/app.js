"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB).then(() => {
    console.log(`connected to port ${process.env.DB}`);
}).catch((e) => console.log(e));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});
app.listen(process.env.PORT);
