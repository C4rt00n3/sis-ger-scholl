import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  /**
   * Cria um novo usuário com base nos dados fornecidos.
   * @param createUserDto Os dados para criar o usuário.
   * @returns O usuário criado.
   */
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  /**
   * Retorna todos os usuários.
   * @returns Uma lista de todos os usuários.
   */
  findAll() {
    return this.userRepository.findAll();
  }

  /**
   * Retorna um usuário pelo ID.
   * @param id O ID do usuário a ser retornado.
   * @returns O usuário encontrado.
   */
  findOne(id: number) {
    return this.userRepository.findOne(id)
  }

  /**
   * Atualiza um usuário pelo ID com base nos dados fornecidos.
   * @param id O ID do usuário a ser atualizado.
   * @param updateUserDto Os dados para atualizar o usuário.
   * @returns O usuário atualizado.
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
  }

  /**
   * Remove um usuário pelo ID.
   * @param id O ID do usuário a ser removido.
   */
  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
