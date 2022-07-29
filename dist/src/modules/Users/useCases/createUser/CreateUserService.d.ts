import { TExecute } from './CreateUser.types';
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types';
declare class CreateUserService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute: TExecute;
}
export { CreateUserService };
