import { RequestHandler } from 'express'

import { IUserModel } from '@modules/Users/models/IUserModel'

interface IReadUsersResponse {
  user?: IUserModel
  users?: IUserModel[]
}

type THandle = RequestHandler<
  { id?: IUserModel['id'] },
  IReadUsersResponse,
  void,
  void
>

type TExecute = (id?: IUserModel['id']) => Promise<IReadUsersResponse>

export type { THandle, TExecute, IReadUsersResponse }
