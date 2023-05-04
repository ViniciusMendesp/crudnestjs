import { Injectable } from '@nestjs/common';
import { User } from '../types/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User): User {
    const id = this.users.length + 1;
    const newUser = { id, ...user };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, user: User): User {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { id, ...user };
    return this.users[index];
  }

  remove(id: number): User {
    const index = this.users.findIndex((user) => user.id === id);
    const deletedUser = this.users[index];
    this.users.splice(index, 1);
    return deletedUser;
  }
}
