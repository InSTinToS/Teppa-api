import { ErrorRequestHandler } from 'express';
import { AppError } from '@modules/Error/models/AppError';
declare type THandle = ErrorRequestHandler<any, {
    error: string;
}>;
declare type TExecute = (error: Error | AppError) => {
    statusCode: number;
    error: string;
};
export type { THandle, TExecute };
