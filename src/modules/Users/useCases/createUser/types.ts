import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IResponse {
  createdUser: IUserModel
}

type THandle = RequestHandler<void, IResponse, IUserModel, void>

type TExecute = (data: IUserModel) => Promise<IResponse>

export type { THandle, TExecute }
