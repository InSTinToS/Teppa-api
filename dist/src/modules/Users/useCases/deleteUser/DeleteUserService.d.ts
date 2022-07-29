import { TExecute } from './DeleteUser.types';
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types';
declare class DeleteUserService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute: TExecute;
}
export { DeleteUserService };
