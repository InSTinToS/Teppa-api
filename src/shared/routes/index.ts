import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'

import { usersRoutes } from './users.routes'

import { ThrowAppErrorController } from '@modules/Error/useCases/throwError/ThrowAppErrorController'

const app = express()

const errorHandler = new ThrowAppErrorController().handle

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(usersRoutes)

app.use(errorHandler)

export { app }
