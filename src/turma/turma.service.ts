import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Turma, Usuarios } from '@prisma/client';
import { TurmaRepository } from './repository/turma.repository';

@Injectable()
export class TurmaService {
  constructor(private readonly turmaRepo: TurmaRepository) {}

  /**
   * Cria uma nova turma com base nos dados fornecidos em `createTurmaDto`.
   * @param createTurmaDto Um objeto contendo os dados necessários para criar uma nova turma.
   * @returns Uma Promise que resolve com o objeto de turma criado.
   */
  async create(createTurmaDto: CreateTurmaDto, user: Usuarios): Promise<Turma> {
    return await this.turmaRepo.create(createTurmaDto, user);
  }

  /**
   * Retorna todas as turmas.
   * @returns Uma Promise que resolve com uma matriz de objetos de turma.
   */
  async findAll(user: Usuarios): Promise<Turma[]> {
    return await this.turmaRepo.findAll({}, user);
  }

  /**
   * Retorna uma turma com base no ID fornecido.
   * @param id O ID da turma a ser encontrada.
   * @returns Uma Promise que resolve com o objeto de turma encontrado. Se nenhuma turma for encontrada com o ID fornecido, retorna null.
   */
  async findOne(id: number,user: Usuarios) {
    return await this.turmaRepo.findOne(id, user);
  }

  /**
   * Atualiza uma turma existente com base no ID e nos dados fornecidos em `updateTurmaDto`.
   * @param id O ID da turma a ser atualizada.
   * @param updateTurmaDto Um objeto contendo os dados a serem atualizados na turma.
   * @returns Uma Promise que resolve com o objeto de turma atualizado.
   */
  async update(id: number, updateTurmaDto: UpdateTurmaDto, user: Usuarios): Promise<Turma> {
    return await this.turmaRepo.update(id, updateTurmaDto, user);
  }

  /**
   * Remove uma turma com base no ID fornecido.
   * @param id O ID da turma a ser removida.
   */
  async remove(id: number, user: Usuarios): Promise<void> {
    await this.turmaRepo.remove(id, user)
  }
}