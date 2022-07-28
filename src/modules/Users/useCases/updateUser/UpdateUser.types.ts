import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IUpdateUserResponse {
  updatedUser: IUserModel
}

type THandle = RequestHandler<
  { id: IUserModel['id'] },
  IUpdateUserResponse,
  IUserModel,
  void
>

type TExecute = (dataToUpdate: IUserModel) => Promise<IUpdateUserResponse>

export type { THandle, TExecute, IUpdateUserResponse }
