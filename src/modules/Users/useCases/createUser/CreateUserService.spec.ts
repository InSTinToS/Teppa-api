import { CreateUserService } from '../createUser/CreateUserService'

import { AppError } from '@modules/Error/models/AppError'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'

import createUserData from '@shared/utils/tests/createUserData'

let usersRepository: IUsersRepository
let createUserService: CreateUserService

describe('CreateUserService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    createUserService = new CreateUserService(usersRepository)
  })

  it('should be able to create a user', async () => {
    const { createdUser } = await createUserService.execute(createUserData)

    const foundUser = await usersRepository.findById(createdUser.id)

    expect(foundUser.email).toBe(createdUser.email)
  })

  it('should not be able to create a user if email already exists', async () => {
    await createUserService.execute(createUserData)

    expect(createUserService.execute(createUserData)).rejects.toBeInstanceOf(
      AppError
    )
  })
})
