import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IResponse {
  updatedUser: IUserModel
}

type THandle = RequestHandler<
  { id: IUserModel['id'] },
  IResponse,
  IUserModel,
  void
>

type TExecute = (dataToUpdate: IUserModel) => Promise<IResponse>

export type { THandle, TExecute }
