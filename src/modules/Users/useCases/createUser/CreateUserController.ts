import { container } from 'tsyringe'

import { THandle } from './CreateUser.types'
import { CreateUserService } from './CreateUserService'

class CreateUserController {
  handle: THandle = async (req, res) => {
    const createUserService = container.resolve(CreateUserService)

    const response = await createUserService.execute(req.body)

    return res.status(201).json(response)
  }
}

export { CreateUserController }
