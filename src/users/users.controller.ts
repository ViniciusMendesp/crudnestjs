import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from '../types/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get('/')
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(+id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() user: User): User {
    return this.userService.update(+id, user);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): User {
    return this.userService.remove(+id);
  }
}
