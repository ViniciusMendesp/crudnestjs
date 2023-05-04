import { UserService } from './users.service';
import { User } from '../types/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: User): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, user: User): User;
    remove(id: string): User;
}
