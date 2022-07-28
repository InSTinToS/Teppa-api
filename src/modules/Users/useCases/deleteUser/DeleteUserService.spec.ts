import { DeleteUserService } from './DeleteUserService'

import { AppError } from '@modules/Error/models/AppError'
import { UsersRepository } from '@modules/Users/repositories/User/UserRepository'
import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'

import createUserData from '@shared/utils/tests/createUserData'

let usersRepository: UsersRepository
let deleteUserService: DeleteUserService

describe('DeleteUserService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    deleteUserService = new DeleteUserService(usersRepository)
  })

  it('should be able to delete a user', async () => {
    const { id } = await usersRepository.create(createUserData)

    const { deletedUser } = await deleteUserService.execute(id)

    const foundUser = await usersRepository.findById(id)

    expect(foundUser).toBe(undefined)
    expect(deletedUser).toMatchObject(createUserData)
  })

  it('should not be able to delete a not found user', async () => {
    expect(deleteUserService.execute('0')).rejects.toBeInstanceOf(AppError)
  })
})
