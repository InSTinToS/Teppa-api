import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IResponse {
  user?: IUserModel
  users?: IUserModel[]
}

type THandle = RequestHandler<{ id?: IUserModel['id'] }, IResponse, void, void>

type TExecute = (id?: IUserModel['id']) => Promise<IResponse>

export type { THandle, TExecute }
