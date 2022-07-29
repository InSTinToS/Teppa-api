"use strict";

var _tsyringe = require("tsyringe");

var _UserRepository = require("../../../dist/modules/Users/repositories/User/UserRepository");

_tsyringe.container.registerSingleton('UsersRepository', _UserRepository.UsersRepository);