"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _routes = require("@shared/routes");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let response;
describe('CreateUserController', () => {
  beforeEach(async () => {
    response = await (0, _supertest.default)(_routes.app).post('/users').send(_createUserData.default);
  });
  afterEach(async () => {
    await (0, _supertest.default)(_routes.app).delete(`/users/${response.body.createdUser.id}`);
  });
  it('should be able to create a user', async () => {
    expect(response.statusCode).toBe(201);
    expect(response.body.createdUser.email).toBe(_createUserData.default.email);
  });
  it('should not be able to create a user if email already exists', async () => {
    const responseCreateSecondUser = await (0, _supertest.default)(_routes.app).post('/users').send(_createUserData.default);
    expect(responseCreateSecondUser.statusCode).toBe(400);
    expect(responseCreateSecondUser.body.error).toBe('E-mail already exists');
  });
});