"use strict";

exports.__esModule = true;
exports.UpdateUserService = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../../dist/modules/Error/models/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof IUsersRepository === "undefined" ? Object : IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

    this.execute = async dataToUpdate => {
      const user = await this.usersRepository.findById(dataToUpdate.id);
      if (!user) throw new _AppError.AppError('User not found', 404);
      const foundByEmail = await this.usersRepository.findByEmail(dataToUpdate.email);
      const emailAlreadyExists = dataToUpdate.email && foundByEmail && foundByEmail.id !== dataToUpdate.id;
      if (emailAlreadyExists) throw new _AppError.AppError('Email already exists');
      const updatedUser = await this.usersRepository.update(dataToUpdate);
      return {
        updatedUser
      };
    };
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateUserService = UpdateUserService;