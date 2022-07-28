import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface ICreateUserResponse {
  createdUser: IUserModel
}

type TCreateUserRequest = Omit<IUserModel, 'id'>

type THandle = RequestHandler<
  void,
  ICreateUserResponse,
  TCreateUserRequest,
  void
>

type TExecute = (data: TCreateUserRequest) => Promise<ICreateUserResponse>

export type { THandle, TExecute, ICreateUserResponse, TCreateUserRequest }
