"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteUserService_1 = require("./DeleteUserService");
class DeleteUserController {
    constructor() {
        this.handle = async (req, res) => {
            const id = req.params.id;
            const deleteUserService = tsyringe_1.container.resolve(DeleteUserService_1.DeleteUserService);
            const response = await deleteUserService.execute(id);
            return res.status(200).json(response);
        };
    }
}
exports.DeleteUserController = DeleteUserController;
