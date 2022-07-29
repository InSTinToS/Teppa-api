import type { IUsersRepository } from './IUserRepository.types';
declare class UsersRepository implements IUsersRepository {
    create: IUsersRepository['create'];
    update: IUsersRepository['update'];
    delete: IUsersRepository['delete'];
    findAll: IUsersRepository['findAll'];
    findById: IUsersRepository['findById'];
    findByEmail: IUsersRepository['findByEmail'];
}
export { UsersRepository };
