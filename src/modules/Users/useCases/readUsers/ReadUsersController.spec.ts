import { create } from 'domain'
import request from 'supertest'

import { ICreateUserResponse } from '../createUser/CreateUser.types'
import { IReadUsersResponse } from './ReadUsers.types'

import { app } from '@shared/routes'
import type { ISuperResponse } from '@shared/types/supertest'
import createUserData from '@shared/utils/tests/createUserData'

let createdUser: ICreateUserResponse['createdUser']

describe('ReadUserController', () => {
  beforeEach(async () => {
    const createdUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send(createUserData)

    createdUser = createdUserResponse.body.createdUser
  })

  afterEach(async () => {
    await request(app).delete(`/users/${createdUser.id}`)
  })

  it('should be able to read a user using id', async () => {
    const readUserResponse: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get(`/users/${createdUser.id}`)

    expect(createdUser).toStrictEqual(readUserResponse.body.user)
  })

  it('should be able to read all users', async () => {
    const createdSecondUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app)
        .post('/users')
        .send({ ...createUserData, email: 'TEST2' })

    const createdSecondUser = createdSecondUserResponse.body.createdUser

    const readUserResponse: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get('/users')

    expect(
      readUserResponse.body.users.find(user => user.id === createdUser.id)
    ).toStrictEqual(createdUser)

    expect(
      readUserResponse.body.users.find(user => user.id === createdSecondUser.id)
    ).toStrictEqual(createdSecondUser)

    await request(app).delete(`/users/${createdSecondUser.id}`)
  })
})
