import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IResponse {
  deletedUser: IUserModel
}

type THandle = RequestHandler<{ id: IUserModel['id'] }, IResponse, void, void>

type TExecute = (id: IUserModel['id']) => Promise<IResponse>

export type { THandle, TExecute }