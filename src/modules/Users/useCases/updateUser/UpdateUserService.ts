import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute = async dataToUpdate => {
    const user = await this.usersRepository.findById(dataToUpdate.id)

    if (!user) throw new AppError('User not found', 404)

    if (
      dataToUpdate.email &&
      (await this.usersRepository.findByEmail(dataToUpdate.email))
    )
      throw new AppError('Email already exists')

    const updatedUser = await this.usersRepository.update(dataToUpdate)

    return { updatedUser }
  }
}

export { UpdateUserService }
