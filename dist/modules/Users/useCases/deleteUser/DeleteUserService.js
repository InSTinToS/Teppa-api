"use strict";

exports.__esModule = true;
exports.DeleteUserService = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("@modules/Error/models/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof IUsersRepository === "undefined" ? Object : IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

    this.execute = async id => {
      const foundUser = await this.usersRepository.findById(id);
      if (!foundUser) throw new _AppError.AppError('User does not exist', 400);
      await this.usersRepository.delete(id);
      return {
        deletedUser: foundUser
      };
    };
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteUserService = DeleteUserService;