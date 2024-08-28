"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("./db/mongoose");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, mongoose_1.dataBase)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.listen(process.env.PORT, () => {
    console.log("All Done");
});
