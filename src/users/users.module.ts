import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersInMemoryRepository } from './repositories/users-in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersInMemoryRepository],
})
export class UsersModule {}
