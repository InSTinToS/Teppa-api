"use strict";

exports.__esModule = true;
exports.usersRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("@modules/Users/useCases/createUser/CreateUserController");

var _DeleteUserController = require("@modules/Users/useCases/deleteUser/DeleteUserController");

var _ReadUsersController = require("@modules/Users/useCases/readUsers/ReadUsersController");

var _UpdateUserController = require("@modules/Users/useCases/updateUser/UpdateUserController");

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const readUsersController = new _ReadUsersController.ReadUsersController();
const createUserController = new _CreateUserController.CreateUserController();
const updateUserController = new _UpdateUserController.UpdateUserController();
const deleteUserController = new _DeleteUserController.DeleteUserController();
usersRoutes.get('/user', readUsersController.handle);
usersRoutes.post('/users', createUserController.handle);
usersRoutes.get('/users/:id?', readUsersController.handle);
usersRoutes.patch('/users/:id', updateUserController.handle);
usersRoutes.delete('/users/:id', deleteUserController.handle);