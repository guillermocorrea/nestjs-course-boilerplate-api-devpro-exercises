import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersInMemoryRepository } from './repositories/users-in-memory.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersInMemoryRepository) {}

  private convertToUserDto(createUserDto: CreateUserDto): User {
    const user = new User();
    user.username = createUserDto.username;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const user = this.convertToUserDto(createUserDto);
    user.id = randomUUID();
    return this.usersRepository.create(user);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    return this.usersRepository.update(id, user);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
