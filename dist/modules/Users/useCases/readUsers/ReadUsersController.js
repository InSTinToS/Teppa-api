"use strict";

exports.__esModule = true;
exports.ReadUsersController = void 0;

var _tsyringe = require("tsyringe");

var _ReadUsersService = require("./ReadUsersService");

var _AppError = require("../../../../../dist/modules/Error/models/AppError");

class ReadUsersController {
  constructor() {
    this.handle = async (req, res) => {
      const id = req.params.id;

      const readUsersService = _tsyringe.container.resolve(_ReadUsersService.ReadUsersService);

      const response = await readUsersService.execute(id);
      if (!response) throw new _AppError.AppError('User or users Not found', 404);
      res.json(response).status(200);
    };
  }

}

exports.ReadUsersController = ReadUsersController;