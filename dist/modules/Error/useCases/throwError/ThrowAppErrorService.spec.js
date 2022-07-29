"use strict";

var _ThrowAppErrorService = require("./ThrowAppErrorService");

var _AppError = require("../../../../../dist/modules/Error/models/AppError");

let throwAppErrorService;
describe('ThrowAppErrorService', () => {
  beforeEach(() => {
    throwAppErrorService = new _ThrowAppErrorService.ThrowAppErrorService();
  });
  it('should return error message if error is instanceof AppError', () => {
    const errorMessage = 'Its a test error';
    const statusCode = 400;

    try {
      throw new _AppError.AppError(errorMessage, statusCode);
    } catch (error) {
      const response = throwAppErrorService.execute(error);
      expect(response.error).toBe(errorMessage);
      expect(response.statusCode).toBe(statusCode);
    }
  });
  it('should return error message "Internal server error" if error is not instanceof AppError', () => {
    const errorMessage = 'Its a test error';

    try {
      throw new Error(errorMessage);
    } catch (error) {
      const response = throwAppErrorService.execute(error);
      expect(response.error).toBe('Internal server error - ' + errorMessage);
      expect(response.statusCode).toBe(500);
    }
  });
});