import request from 'supertest'

import { ICreateUserResponse } from '../createUser/CreateUser.types'
import { IReadUsersResponse } from '../readUsers/ReadUsers.types'
import { IUpdateUserResponse } from './UpdateUser.types'

import { app } from '@shared/routes'
import type { ISuperResponse } from '@shared/types/supertest'
import createUserData from '@shared/utils/tests/createUserData'

let createdUser: ICreateUserResponse['createdUser']

describe('UpdateUserController', () => {
  beforeEach(async () => {
    const response: ISuperResponse<ICreateUserResponse> = await request(app)
      .post('/users')
      .send(createUserData)

    createdUser = response.body.createdUser
  })

  afterEach(async () => {
    await request(app).delete(`/users/${createdUser.id}`)
  })

  it('should be able to update user using e-mail', async () => {
    const updatedUserResponse: ISuperResponse<IUpdateUserResponse> =
      await request(app)
        .patch(`/users/${createdUser.id}`)
        .send({ full_name: 'UPDATED_FULL_NAME' })

    const {
      body: { user }
    }: ISuperResponse<IReadUsersResponse> = await request(app).get(
      `/users/${createdUser.id}`
    )

    expect(user.id).toBe(updatedUserResponse.body.updatedUser.id)
    expect(user.full_name).toBe(updatedUserResponse.body.updatedUser.full_name)
    expect(user.full_name).toBe('UPDATED_FULL_NAME')
  })
})
