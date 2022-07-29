"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowAppErrorService = void 0;
const AppError_1 = require("../../models/AppError");
class ThrowAppErrorService {
    constructor() {
        this.execute = error => {
            return error instanceof AppError_1.AppError
                ? { error: error.message, statusCode: error.statusCode }
                : { error: 'Internal server error - ' + error.message, statusCode: 500 };
        };
    }
}
exports.ThrowAppErrorService = ThrowAppErrorService;
