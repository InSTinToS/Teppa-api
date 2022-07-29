"use strict";

exports.__esModule = true;
exports.ReadUsersService = void 0;

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ReadUsersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof IUsersRepository === "undefined" ? Object : IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ReadUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

    this.execute = async id => {
      if (id) {
        const user = await this.usersRepository.findById(id);
        return user ? {
          user
        } : undefined;
      }

      const users = await this.usersRepository.findAll();
      return {
        users
      };
    };
  }

}) || _class) || _class) || _class) || _class);
exports.ReadUsersService = ReadUsersService;