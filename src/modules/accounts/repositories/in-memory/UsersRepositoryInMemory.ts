import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from '@modules/accounts/infra/typeorm/entities/User'

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const selectedUser = this.users.find((user) => user.email === email);

    if (!selectedUser) {
      throw new Error('User name not found!')
    }

    return selectedUser
  }

  async findById(id: string): Promise<User> {
    const selectedUser = this.users.find((user) => user.id === id);

    if (!selectedUser) {
      throw new Error('User name not found!')
    }

    return selectedUser
  }
}

export { UsersRepositoryInMemory };
