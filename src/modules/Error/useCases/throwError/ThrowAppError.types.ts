import { ErrorRequestHandler } from 'express'

import { AppError } from '@modules/Error/models/AppError'

type THandle = ErrorRequestHandler<any, { error: string }>

type TExecute = (error: Error | AppError) => {
  statusCode: number
  error: string
}

export type { THandle, TExecute }
