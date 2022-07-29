"use strict";

exports.__esModule = true;
exports.CreateUserController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserService = require("./CreateUserService");

class CreateUserController {
  constructor() {
    this.handle = async (req, res) => {
      const createUserService = _tsyringe.container.resolve(_CreateUserService.CreateUserService);

      const response = await createUserService.execute(req.body);
      return res.status(201).json(response);
    };
  }

}

exports.CreateUserController = CreateUserController;