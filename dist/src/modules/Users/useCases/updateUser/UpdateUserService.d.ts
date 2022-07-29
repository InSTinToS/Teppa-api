import { TExecute } from './UpdateUser.types';
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types';
declare class UpdateUserService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute: TExecute;
}
export { UpdateUserService };
