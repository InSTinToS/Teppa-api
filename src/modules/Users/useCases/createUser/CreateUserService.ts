import { inject, injectable } from 'tsyringe'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute = async data => {
    const createdUser = await this.usersRepository.create({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })

    return { createdUser }
  }
}

export { CreateUserService }
