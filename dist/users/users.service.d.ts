import { User } from '../types/user.interface';
export declare class UserService {
    private readonly users;
    create(user: User): User;
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, user: User): User;
    remove(id: number): User;
}
