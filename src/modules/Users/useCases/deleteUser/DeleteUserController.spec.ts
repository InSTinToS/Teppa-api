import request from 'supertest'

import { ICreateUserResponse } from '../createUser/CreateUser.types'
import { IReadUsersResponse } from '../readUsers/ReadUsers.types'
import { IDeleteUserResponse } from './DeleteUser.types'

import { app } from '@shared/routes'
import type { ISuperResponse } from '@shared/types/supertest'
import createUserData from '@shared/utils/tests/createUserData'

describe('DeleteUserController', () => {
  it('should be able to delete a user', async () => {
    const createdResponse: ISuperResponse<ICreateUserResponse> = await request(
      app
    )
      .post('/users')
      .send(createUserData)

    const deletedResponse: ISuperResponse<IDeleteUserResponse> = await request(
      app
    ).delete(`/users/${createdResponse.body.createdUser.id}`)

    const foundDeletedUser: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get(`/users/${deletedResponse.body.deletedUser.id}`)

    expect(foundDeletedUser.body.user).toBeFalsy()
  })

  it('should not be able to delete a non-existing user', async () => {
    const { statusCode } = await request(app).delete('/users/0000')

    expect(statusCode).toBe(400)
  })
})
