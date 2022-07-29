"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUsersController = void 0;
const tsyringe_1 = require("tsyringe");
const ReadUsersService_1 = require("./ReadUsersService");
const AppError_1 = require("@modules/Error/models/AppError");
class ReadUsersController {
    constructor() {
        this.handle = async (req, res) => {
            const id = req.params.id;
            const readUsersService = tsyringe_1.container.resolve(ReadUsersService_1.ReadUsersService);
            const response = await readUsersService.execute(id);
            if (!response)
                throw new AppError_1.AppError('User or users Not found', 404);
            res.json(response).status(200);
        };
    }
}
exports.ReadUsersController = ReadUsersController;
