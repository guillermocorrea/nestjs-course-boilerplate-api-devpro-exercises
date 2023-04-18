import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { GenericInMemoryRepository } from '../../infrastructure';
import { UsersRepositoryInterface } from '../interfaces/users.repository.interface';

@Injectable()
export class UsersInMemoryRepository implements UsersRepositoryInterface {
  private genericInMemoryRepository: GenericInMemoryRepository<string, User>;

  constructor() {
    this.genericInMemoryRepository = new GenericInMemoryRepository();
  }

  async create(user: User): Promise<User> {
    return this.genericInMemoryRepository.create(user);
  }

  async update(id: string, data: User): Promise<User> {
    const user = await this.genericInMemoryRepository.findOne(id);
    if (data.firstName) {
      user.firstName = data.firstName;
    }
    if (data.lastName) {
      user.lastName = data.lastName;
    }
    return user;
  }

  async delete(id: string): Promise<User> {
    return await this.genericInMemoryRepository.delete(id);
  }

  async findAll(): Promise<User[]> {
    return await this.genericInMemoryRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return await this.genericInMemoryRepository.findOne(id);
  }
}
