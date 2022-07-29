"use strict";

var _CreateUserService = require("../createUser/CreateUserService");

var _AppError = require("@modules/Error/models/AppError");

var _UserRepositoryInMemory = require("@modules/Users/repositories/User/UserRepositoryInMemory");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let usersRepository;
let createUserService;
describe('CreateUserService', () => {
  beforeEach(() => {
    usersRepository = new _UserRepositoryInMemory.UsersRepositoryInMemory();
    createUserService = new _CreateUserService.CreateUserService(usersRepository);
  });
  it('should be able to create a user', async () => {
    const {
      createdUser
    } = await createUserService.execute(_createUserData.default);
    const foundUser = await usersRepository.findById(createdUser.id);
    expect(foundUser.email).toBe(createdUser.email);
  });
  it('should not be able to create a user if email already exists', async () => {
    await createUserService.execute(_createUserData.default);
    expect(createUserService.execute(_createUserData.default)).rejects.toBeInstanceOf(_AppError.AppError);
  });
});