"use strict";

var _CreateUserService = require("../createUser/CreateUserService");

var _DeleteUserService = require("../deleteUser/DeleteUserService");

var _ReadUsersService = require("../readUsers/ReadUsersService");

var _UpdateUserService = require("./UpdateUserService");

var _UserRepositoryInMemory = require("@modules/Users/repositories/User/UserRepositoryInMemory");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let usersRepository;
let createUserService;
let updateUserService;
let deleteUserService;
let createdUser;
describe('UpdateUserService', () => {
  beforeEach(async () => {
    usersRepository = new _UserRepositoryInMemory.UsersRepositoryInMemory();
    createUserService = new _CreateUserService.CreateUserService(usersRepository);
    updateUserService = new _UpdateUserService.UpdateUserService(usersRepository);
    createdUser = (await createUserService.execute(_createUserData.default)).createdUser;
  });
  afterEach(async () => {
    deleteUserService = new _DeleteUserService.DeleteUserService(usersRepository);
    deleteUserService.execute(createdUser.id);
  });
  it('should be able to update full_name', async () => {
    const readUsersService = new _ReadUsersService.ReadUsersService(usersRepository);
    const {
      updatedUser
    } = await updateUserService.execute({
      id: createdUser.id,
      ...createdUser,
      full_name: 'UPDATED_FULL_NAME'
    });
    const {
      user
    } = await readUsersService.execute(createdUser.id);
    expect(user.id).toBe(updatedUser.id);
    expect(updatedUser.full_name).toBe('UPDATED_FULL_NAME');
  });
  it('should not be able to update if user does not found', async () => {
    try {
      await updateUserService.execute({ ..._createUserData.default,
        id: 'UNDEFINED_ID'
      });
    } catch (error) {
      expect(error.message).toBe('User not found');
    }
  });
  it('should not be able to update if e-mail already exists', async () => {
    await createUserService.execute({ ..._createUserData.default,
      email: 'TEST2'
    });

    try {
      await updateUserService.execute({ ...createdUser,
        email: 'TEST2'
      });
    } catch (error) {
      expect(error.message).toBe('Email already exists');
    }
  });
});