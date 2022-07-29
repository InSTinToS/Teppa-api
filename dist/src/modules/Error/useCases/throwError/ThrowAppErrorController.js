"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowAppErrorController = void 0;
const ThrowAppErrorService_1 = require("./ThrowAppErrorService");
class ThrowAppErrorController {
    constructor() {
        this.handle = (error, _req, res, _next) => {
            const throwAppErrorService = new ThrowAppErrorService_1.ThrowAppErrorService();
            const response = throwAppErrorService.execute(error);
            return res.status(response.statusCode).json({ error: response.error });
        };
    }
}
exports.ThrowAppErrorController = ThrowAppErrorController;
