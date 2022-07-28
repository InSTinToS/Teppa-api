import request from 'supertest'

import { ICreateUserResponse } from './CreateUser.types'

import { app } from '@shared/routes'
import type { ISuperResponse } from '@shared/types/supertest'
import createUserData from '@shared/utils/tests/createUserData'

let response: ISuperResponse<ICreateUserResponse>

describe('CreateUserController', () => {
  beforeEach(async () => {
    response = await request(app).post('/users').send(createUserData)
  })

  afterEach(async () => {
    await request(app).delete(`/users/${response.body.createdUser.id}`)
  })

  it('should be able to create a user', async () => {
    expect(response.statusCode).toBe(201)
    expect(response.body.createdUser.email).toBe(createUserData.email)
  })

  it('should not be able to create a user if email already exists', async () => {
    const responseCreateSecondUser: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send(createUserData)

    expect(responseCreateSecondUser.statusCode).toBe(400)
    expect(responseCreateSecondUser.body.error).toBe('E-mail already exists')
  })
})
