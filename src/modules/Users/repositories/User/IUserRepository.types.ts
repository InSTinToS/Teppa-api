import { IUserModel } from '@modules/Users/models/IUserModel'

type TCreate = (data: Omit<IUserModel, 'id'>) => Promise<IUserModel>

type TFindById = (id: IUserModel['id']) => Promise<IUserModel>

type TFindAll = () => Promise<IUserModel[]>

type TFindByEmail = (
  email: IUserModel['email']
) => Promise<IUserModel | undefined>

type TDelete = (id: IUserModel['id']) => Promise<void>

type TUpdate = (data: Partial<IUserModel>) => Promise<IUserModel>

interface IUsersRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
  findByEmail: TFindByEmail
}

export type { IUsersRepository }
