"use strict";

exports.__esModule = true;
exports.UpdateUserController = void 0;

var _tsyringe = require("tsyringe");

var _UpdateUserService = require("./UpdateUserService");

class UpdateUserController {
  constructor() {
    this.handle = async (req, res) => {
      const updateUserService = _tsyringe.container.resolve(_UpdateUserService.UpdateUserService);

      const response = await updateUserService.execute({ ...req.body,
        id: req.params.id
      });
      res.json(response).status(200);
    };
  }

}

exports.UpdateUserController = UpdateUserController;