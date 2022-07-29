import { RequestHandler } from 'express';
import { IUserModel } from '@modules/Users/models/IUserModel';
interface IUpdateUserResponse {
    updatedUser: IUserModel;
}
declare type THandle = RequestHandler<{
    id: IUserModel['id'];
}, IUpdateUserResponse, IUserModel, void>;
declare type TExecute = (dataToUpdate: IUserModel) => Promise<IUpdateUserResponse>;
export type { THandle, TExecute, IUpdateUserResponse };
