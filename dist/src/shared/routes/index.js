"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const users_routes_1 = require("./users.routes");
const ThrowAppErrorController_1 = require("@modules/Error/useCases/throwError/ThrowAppErrorController");
const app = (0, express_1.default)();
exports.app = app;
const errorHandler = new ThrowAppErrorController_1.ThrowAppErrorController().handle;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(users_routes_1.usersRoutes);
app.use(errorHandler);
