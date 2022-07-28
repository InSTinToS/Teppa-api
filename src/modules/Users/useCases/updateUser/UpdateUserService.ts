import { inject, injectable } from 'tsyringe'

import { TExecute } from './UpdateUser.types'

import { AppError } from '@modules/Error/models/AppError'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute: TExecute = async dataToUpdate => {
    const user = await this.usersRepository.findById(dataToUpdate.id)

    if (!user) throw new AppError('User not found', 404)

    const foundByEmail = await this.usersRepository.findByEmail(
      dataToUpdate.email
    )

    const emailAlreadyExists =
      dataToUpdate.email && foundByEmail && foundByEmail.id !== dataToUpdate.id

    if (emailAlreadyExists) throw new AppError('Email already exists')

    const updatedUser = await this.usersRepository.update(dataToUpdate)

    return { updatedUser }
  }
}

export { UpdateUserService }
