import { container } from 'tsyringe'

import { ReadUsersService } from './ReadUsersService'

import { AppError } from '@modules/Error/models/AppError'

class ReadUsersController {
  handle = async (req, res) => {
    const id = req.params.id || res.locals.user?.id

    const readUsersService = container.resolve(ReadUsersService)

    const response = await readUsersService.execute(id)

    if (!response) throw new AppError('User or users Not found', 404)

    res.json(response).status(200)
  }
}

export { ReadUsersController }
