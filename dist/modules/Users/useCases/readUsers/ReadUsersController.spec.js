"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _routes = require("@shared/routes");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let createdUser;
describe('ReadUserController', () => {
  beforeEach(async () => {
    const createdUserResponse = await (0, _supertest.default)(_routes.app).post('/users').send(_createUserData.default);
    createdUser = createdUserResponse.body.createdUser;
  });
  afterEach(async () => {
    await (0, _supertest.default)(_routes.app).delete(`/users/${createdUser.id}`);
  });
  it('should be able to read a user using id', async () => {
    const readUserResponse = await (0, _supertest.default)(_routes.app).get(`/users/${createdUser.id}`);
    expect(createdUser).toStrictEqual(readUserResponse.body.user);
  });
  it('should be able to read all users', async () => {
    const createdSecondUserResponse = await (0, _supertest.default)(_routes.app).post('/users').send({ ..._createUserData.default,
      email: 'TEST2'
    });
    const createdSecondUser = createdSecondUserResponse.body.createdUser;
    const readUserResponse = await (0, _supertest.default)(_routes.app).get('/users');
    expect(readUserResponse.body.users.find(user => user.id === createdUser.id)).toStrictEqual(createdUser);
    expect(readUserResponse.body.users.find(user => user.id === createdSecondUser.id)).toStrictEqual(createdSecondUser);
    await (0, _supertest.default)(_routes.app).delete(`/users/${createdSecondUser.id}`);
  });
});