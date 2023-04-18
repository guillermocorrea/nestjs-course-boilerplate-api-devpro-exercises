import { GenericRepositoryInterface } from 'src/core/interfaces/generic-repository.interface';
import { User } from '../entities/user.entity';

export type UsersRepositoryInterface = GenericRepositoryInterface<string, User>;
