import { IUserModel } from '@modules/Users/models/IUserModel';
declare type TCreate = (data: Omit<IUserModel, 'id'>) => Promise<IUserModel>;
declare type TFindById = (id: IUserModel['id']) => Promise<IUserModel>;
declare type TFindAll = () => Promise<IUserModel[]>;
declare type TFindByEmail = (email: IUserModel['email']) => Promise<IUserModel | undefined>;
declare type TDelete = (id: IUserModel['id']) => Promise<void>;
declare type TUpdate = (data: Partial<IUserModel>) => Promise<IUserModel>;
interface IUsersRepository {
    update: TUpdate;
    create: TCreate;
    delete: TDelete;
    findAll: TFindAll;
    findById: TFindById;
    findByEmail: TFindByEmail;
}
export type { IUsersRepository };
