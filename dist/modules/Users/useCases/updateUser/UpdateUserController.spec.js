"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _routes = require("../../../../../dist/shared/routes");

var _createUserData = _interopRequireDefault(require("../../../../../dist/shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let createdUser;
describe('UpdateUserController', () => {
  beforeEach(async () => {
    const response = await (0, _supertest.default)(_routes.app).post('/users').send(_createUserData.default);
    createdUser = response.body.createdUser;
  });
  afterEach(async () => {
    await (0, _supertest.default)(_routes.app).delete(`/users/${createdUser.id}`);
  });
  it('should be able to update user using e-mail', async () => {
    const updatedUserResponse = await (0, _supertest.default)(_routes.app).patch(`/users/${createdUser.id}`).send({
      full_name: 'UPDATED_FULL_NAME'
    });
    const {
      body: {
        user
      }
    } = await (0, _supertest.default)(_routes.app).get(`/users/${createdUser.id}`);
    expect(user.id).toBe(updatedUserResponse.body.updatedUser.id);
    expect(user.full_name).toBe(updatedUserResponse.body.updatedUser.full_name);
    expect(user.full_name).toBe('UPDATED_FULL_NAME');
  });
});