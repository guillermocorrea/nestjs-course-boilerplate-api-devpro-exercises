import { UserInterface } from '../interfaces';

export class User implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  salt: string;
  active: boolean;
}
