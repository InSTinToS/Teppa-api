"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUserService_1 = require("./CreateUserService");
class CreateUserController {
    constructor() {
        this.handle = async (req, res) => {
            const createUserService = tsyringe_1.container.resolve(CreateUserService_1.CreateUserService);
            const response = await createUserService.execute(req.body);
            return res.status(201).json(response);
        };
    }
}
exports.CreateUserController = CreateUserController;
