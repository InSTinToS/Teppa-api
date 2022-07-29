"use strict";

var _DeleteUserService = require("./DeleteUserService");

var _AppError = require("@modules/Error/models/AppError");

var _UserRepositoryInMemory = require("@modules/Users/repositories/User/UserRepositoryInMemory");

var _createUserData = _interopRequireDefault(require("@shared/utils/tests/createUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let usersRepository;
let deleteUserService;
describe('DeleteUserService', () => {
  beforeEach(() => {
    usersRepository = new _UserRepositoryInMemory.UsersRepositoryInMemory();
    deleteUserService = new _DeleteUserService.DeleteUserService(usersRepository);
  });
  it('should be able to delete a user', async () => {
    const {
      id
    } = await usersRepository.create(_createUserData.default);
    const {
      deletedUser
    } = await deleteUserService.execute(id);
    const foundUser = await usersRepository.findById(id);
    expect(foundUser).toBe(undefined);
    expect(deletedUser).toMatchObject(_createUserData.default);
  });
  it('should not be able to delete a not found user', async () => {
    expect(deleteUserService.execute('0')).rejects.toBeInstanceOf(_AppError.AppError);
  });
});