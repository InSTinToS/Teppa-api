import { RequestHandler } from 'express';
import { IUserModel } from '@modules/Users/models/IUserModel';
interface IDeleteUserResponse {
    deletedUser: IUserModel;
}
declare type THandle = RequestHandler<{
    id: IUserModel['id'];
}, IDeleteUserResponse, void, void>;
declare type TExecute = (id: IUserModel['id']) => Promise<IDeleteUserResponse>;
export type { THandle, TExecute, IDeleteUserResponse };
