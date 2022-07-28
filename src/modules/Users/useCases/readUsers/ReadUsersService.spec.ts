import { CreateUserService } from '../createUser/CreateUserService'
import { ReadUsersService } from './ReadUsersService'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'

import createUserData from '@shared/utils/tests/createUserData'

let usersRepository: IUsersRepository
let readUsersService: ReadUsersService
let createUserService: CreateUserService

describe('ReadUsersService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    readUsersService = new ReadUsersService(usersRepository)
    createUserService = new CreateUserService(usersRepository)
  })

  it('should be able to read a user using id', async () => {
    const createdUserResponse = await createUserService.execute(createUserData)

    const foundUser = await readUsersService.execute(
      createdUserResponse.createdUser.id
    )

    expect(foundUser.user.email).toBe(createUserData.email)
  })

  it('should be able to read all users without use id', async () => {
    createUserService.execute(createUserData)

    await createUserService.execute({ ...createUserData, email: 'TEST2' })

    const foundUsers = await readUsersService.execute()

    expect(foundUsers.users[0].email).toBe(createUserData.email)
    expect(foundUsers.users[1].email).toBe('TEST2')
  })
})
