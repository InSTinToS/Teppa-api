import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types';
declare class UsersRepositoryInMemory implements IUsersRepository {
    private users;
    create: IUsersRepository['create'];
    delete: IUsersRepository['delete'];
    update: IUsersRepository['update'];
    findById: IUsersRepository['findById'];
    findByEmail: IUsersRepository['findByEmail'];
    findAll: IUsersRepository['findAll'];
}
export { UsersRepositoryInMemory };
