"use strict";

exports.__esModule = true;
exports.DeleteUserController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteUserService = require("./DeleteUserService");

class DeleteUserController {
  constructor() {
    this.handle = async (req, res) => {
      const id = req.params.id;

      const deleteUserService = _tsyringe.container.resolve(_DeleteUserService.DeleteUserService);

      const response = await deleteUserService.execute(id);
      return res.status(200).json(response);
    };
  }

}

exports.DeleteUserController = DeleteUserController;