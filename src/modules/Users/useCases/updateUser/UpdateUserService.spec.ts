import { ICreateUserResponse } from '../createUser/CreateUser.types'
import { CreateUserService } from '../createUser/CreateUserService'
import { DeleteUserService } from '../deleteUser/DeleteUserService'
import { IReadUsersResponse } from '../readUsers/ReadUsers.types'
import { ReadUsersService } from '../readUsers/ReadUsersService'
import { UpdateUserService } from './UpdateUserService'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'

import createUserData from '@shared/utils/tests/createUserData'

let usersRepository: IUsersRepository
let createUserService: CreateUserService
let updateUserService: UpdateUserService
let deleteUserService: DeleteUserService

let createdUser: ICreateUserResponse['createdUser']

describe('UpdateUserService', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepositoryInMemory()
    createUserService = new CreateUserService(usersRepository)
    updateUserService = new UpdateUserService(usersRepository)

    createdUser = (await createUserService.execute(createUserData)).createdUser
  })

  afterEach(async () => {
    deleteUserService = new DeleteUserService(usersRepository)

    deleteUserService.execute(createdUser.id)
  })

  it('should be able to update full_name', async () => {
    const readUsersService = new ReadUsersService(usersRepository)

    const { updatedUser } = await updateUserService.execute({
      id: createdUser.id,
      ...createdUser,
      full_name: 'UPDATED_FULL_NAME'
    })

    const { user }: IReadUsersResponse = await readUsersService.execute(
      createdUser.id
    )

    expect(user.id).toBe(updatedUser.id)
    expect(updatedUser.full_name).toBe('UPDATED_FULL_NAME')
  })

  it('should not be able to update if user does not found', async () => {
    try {
      await updateUserService.execute({
        ...createUserData,
        id: 'UNDEFINED_ID'
      })
    } catch (error) {
      expect(error.message).toBe('User not found')
    }
  })

  it('should not be able to update if e-mail already exists', async () => {
    await createUserService.execute({ ...createUserData, email: 'TEST2' })

    try {
      await updateUserService.execute({
        ...createdUser,
        email: 'TEST2'
      })
    } catch (error) {
      expect(error.message).toBe('Email already exists')
    }
  })
})
