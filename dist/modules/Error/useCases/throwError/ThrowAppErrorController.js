"use strict";

exports.__esModule = true;
exports.ThrowAppErrorController = void 0;

var _ThrowAppErrorService = require("./ThrowAppErrorService");

class ThrowAppErrorController {
  constructor() {
    this.handle = (error, _req, res, _next) => {
      const throwAppErrorService = new _ThrowAppErrorService.ThrowAppErrorService();
      const response = throwAppErrorService.execute(error);
      return res.status(response.statusCode).json({
        error: response.error
      });
    };
  }

}

exports.ThrowAppErrorController = ThrowAppErrorController;