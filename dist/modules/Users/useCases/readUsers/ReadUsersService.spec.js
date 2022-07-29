"use strict";

var _CreateUserService = require("../createUser/CreateUserService");

var _ReadUsersService = require("./ReadUsersService");

var _UserRepositoryInMemory = require("@modules/Users/repositories/User/UserRepositoryInMemory");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let usersRepository;
let readUsersService;
let createUserService;
describe('ReadUsersService', () => {
  beforeEach(() => {
    usersRepository = new _UserRepositoryInMemory.UsersRepositoryInMemory();
    readUsersService = new _ReadUsersService.ReadUsersService(usersRepository);
    createUserService = new _CreateUserService.CreateUserService(usersRepository);
  });
  it('should be able to read a user using id', async () => {
    const createdUserResponse = await createUserService.execute(_createUserData.default);
    const foundUser = await readUsersService.execute(createdUserResponse.createdUser.id);
    expect(foundUser.user.email).toBe(_createUserData.default.email);
  });
  it('should be able to read all users without use id', async () => {
    createUserService.execute(_createUserData.default);
    await createUserService.execute({ ..._createUserData.default,
      email: 'TEST2'
    });
    const foundUsers = await readUsersService.execute();
    expect(foundUsers.users[0].email).toBe(_createUserData.default.email);
    expect(foundUsers.users[1].email).toBe('TEST2');
  });
});