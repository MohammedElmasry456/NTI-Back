"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriesRoute_1 = __importDefault(require("./categoriesRoute"));
const subCategoriesRoute_1 = __importDefault(require("./subCategoriesRoute"));
const errors_1 = __importDefault(require("../utils/errors"));
const globalErrors_1 = __importDefault(require("../middlewares/globalErrors"));
const Routes = (app) => {
    app.use('/api/v1/categories', categoriesRoute_1.default);
    app.use('/api/v1/subCategories', subCategoriesRoute_1.default);
    app.all("*", (req, res, next) => {
        next(new errors_1.default(`The Route ${req.originalUrl} Not Found`, 400));
    });
    app.use(globalErrors_1.default);
};
exports.default = Routes;
