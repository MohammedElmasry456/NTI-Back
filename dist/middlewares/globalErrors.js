"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrors = (error, req, res, next) => {
    error.status = error.status || "Error";
    error.statusCode = error.statusCode || 500;
    if (process.env.ENV_D == "development") {
        res.status(error.statusCode).json({
            error: error,
            message: error.message,
            stack: error.stack
        });
    }
    else {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
        });
    }
};
exports.default = globalErrors;
