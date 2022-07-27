import { container } from 'tsyringe'

import { UpdateUserService } from './UpdateUserService'

class UpdateUserController {
  handle = async (req, res) => {
    const updateUserService = container.resolve(UpdateUserService)

    console.log(req)

    const response = await updateUserService.execute({
      ...req.body,
      id: req.params.id
    })

    res.json(response).status(200)
  }
}

export { UpdateUserController }
