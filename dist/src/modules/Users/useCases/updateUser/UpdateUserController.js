"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateUserService_1 = require("./UpdateUserService");
class UpdateUserController {
    constructor() {
        this.handle = async (req, res) => {
            const updateUserService = tsyringe_1.container.resolve(UpdateUserService_1.UpdateUserService);
            const response = await updateUserService.execute({
                ...req.body,
                id: req.params.id
            });
            res.json(response).status(200);
        };
    }
}
exports.UpdateUserController = UpdateUserController;
