"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _routes = require("../../../../../dist/shared/routes");

var _createUserData = _interopRequireDefault(require("../../../../../dist/shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DeleteUserController', () => {
  it('should be able to delete a user', async () => {
    const createdResponse = await (0, _supertest.default)(_routes.app).post('/users').send(_createUserData.default);
    const deletedResponse = await (0, _supertest.default)(_routes.app).delete(`/users/${createdResponse.body.createdUser.id}`);
    const foundDeletedUser = await (0, _supertest.default)(_routes.app).get(`/users/${deletedResponse.body.deletedUser.id}`);
    expect(foundDeletedUser.body.user).toBeFalsy();
  });
  it('should not be able to delete a non-existing user', async () => {
    const {
      statusCode
    } = await (0, _supertest.default)(_routes.app).delete('/users/0000');
    expect(statusCode).toBe(400);
  });
});