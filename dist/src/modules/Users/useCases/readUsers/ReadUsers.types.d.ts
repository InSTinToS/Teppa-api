import { RequestHandler } from 'express';
import { IUserModel } from '@modules/Users/models/IUserModel';
interface IReadUsersResponse {
    user?: IUserModel;
    users?: IUserModel[];
}
declare type THandle = RequestHandler<{
    id?: IUserModel['id'];
}, IReadUsersResponse, void, void>;
declare type TExecute = (id?: IUserModel['id']) => Promise<IReadUsersResponse>;
export type { THandle, TExecute, IReadUsersResponse };
