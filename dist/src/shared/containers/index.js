"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserRepository_1 = require("@modules/Users/repositories/User/UserRepository");
tsyringe_1.container.registerSingleton('UsersRepository', UserRepository_1.UsersRepository);
