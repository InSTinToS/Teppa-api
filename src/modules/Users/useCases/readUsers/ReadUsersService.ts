import { inject, injectable } from 'tsyringe'

import { TExecute } from './ReadUsers.types'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class ReadUsersService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  execute: TExecute = async id => {
    if (id) {
      const user = await this.usersRepository.findById(id)

      return user ? { user } : undefined
    }

    const users = await this.usersRepository.findAll()

    return { users }
  }
}

export { ReadUsersService }
