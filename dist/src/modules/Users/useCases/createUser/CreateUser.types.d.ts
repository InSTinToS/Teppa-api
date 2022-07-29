import { RequestHandler } from 'express';
import { IUserModel } from '@modules/Users/models/IUserModel';
interface ICreateUserResponse {
    createdUser: IUserModel;
}
declare type TCreateUserRequest = Omit<IUserModel, 'id'>;
declare type THandle = RequestHandler<void, ICreateUserResponse, TCreateUserRequest, void>;
declare type TExecute = (data: TCreateUserRequest) => Promise<ICreateUserResponse>;
export type { THandle, TExecute, ICreateUserResponse, TCreateUserRequest };
