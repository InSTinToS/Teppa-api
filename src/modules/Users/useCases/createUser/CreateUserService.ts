import { inject, injectable } from 'tsyringe'

import { TExecute } from './CreateUser.types'

import { AppError } from '@modules/Error/models/AppError'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute: TExecute = async data => {
    const foundByEmail = await this.usersRepository.findByEmail(data.email)

    if (foundByEmail) throw new AppError('E-mail already exists', 400)

    const createdUser = await this.usersRepository.create({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })

    return { createdUser }
  }
}

export { CreateUserService }
