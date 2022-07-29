"use strict";

exports.__esModule = true;
exports.UsersRepositoryInMemory = void 0;

var _uuid = require("uuid");

class UsersRepositoryInMemory {
  constructor() {
    this.users = [];

    this.create = async data => {
      const id = (0, _uuid.v4)();
      this.users.push({ ...data,
        id
      });
      return this.users.find(user => user.id === id);
    };

    this.delete = async id => {
      const indexToDelete = this.users.findIndex(user => user.id === id);
      this.users.splice(indexToDelete, 1);
    };

    this.update = async data => {
      const foundIndex = this.users.findIndex(({
        id
      }) => id === data.id);
      let userToBeUpdated = this.users[foundIndex];
      userToBeUpdated = { ...userToBeUpdated,
        ...data
      };
      return userToBeUpdated;
    };

    this.findById = async id => this.users.find(user => user.id === id);

    this.findByEmail = async email => this.users.find(user => user.email.toLowerCase() === email.toLowerCase());

    this.findAll = async () => this.users;
  }

}

exports.UsersRepositoryInMemory = UsersRepositoryInMemory;