"use strict";

exports.__esModule = true;
exports.ThrowAppErrorService = void 0;

var _AppError = require("../../models/AppError");

class ThrowAppErrorService {
  constructor() {
    this.execute = error => {
      return error instanceof _AppError.AppError ? {
        error: error.message,
        statusCode: error.statusCode
      } : {
        error: 'Internal server error - ' + error.message,
        statusCode: 500
      };
    };
  }

}

exports.ThrowAppErrorService = ThrowAppErrorService;