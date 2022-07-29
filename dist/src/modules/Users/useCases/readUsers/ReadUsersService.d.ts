import { TExecute } from './ReadUsers.types';
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types';
declare class ReadUsersService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute: TExecute;
}
export { ReadUsersService };
