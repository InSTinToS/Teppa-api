import { container } from 'tsyringe'

import { UpdateUserService } from './UpdateUserService'
import { THandle } from './types'

class UpdateUserController {
  handle: THandle = async (req, res) => {
    const updateUserService = container.resolve(UpdateUserService)

    const response = await updateUserService.execute({
      ...req.body,
      id: req.params.id
    })

    res.json(response).status(200)
  }
}

export { UpdateUserController }
