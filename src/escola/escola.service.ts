import { Injectable } from '@nestjs/common';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';
import { EscolaRepository } from './repository/escola.repository';
import { Escola } from '@prisma/client';

@Injectable()
export class EscolaService {
  constructor(private readonly escolaRepo: EscolaRepository) {}

  /**
   * Cria uma nova escola com base nos dados fornecidos em `createEscolaDto`.
   * @param createEscolaDto Um objeto contendo os dados necessários para criar uma nova escola.
   * @returns Uma Promise que resolve com o objeto de escola criado.
   */
  async create(createEscolaDto: CreateEscolaDto): Promise<Escola> {
    return await this.escolaRepo.create(createEscolaDto);
  }

  /**
   * Retorna todas as escolas.
   * @returns Uma Promise que resolve com uma matriz de objetos de escola.
   */
  async findAll(): Promise<Escola[]> {
    return await this.escolaRepo.findAll({});
  }

  /**
   * Retorna uma escola com base no ID fornecido.
   * @param id O ID da escola a ser encontrada.
   * @returns Uma Promise que resolve com o objeto de escola encontrado. Se nenhuma escola for encontrada, retorna null.
   */
  async findOne(id: number): Promise<Escola> {
    return await this.escolaRepo.findOne(id);
  }

  /**
   * Atualiza uma escola existente com base no ID e nos dados fornecidos em `updateEscolaDto`.
   * @param id O ID da escola a ser atualizada.
   * @param updateEscolaDto Um objeto contendo os dados a serem atualizados na escola.
   * @returns Uma Promise que resolve com o objeto de escola atualizado. Se nenhuma escola for encontrada com o ID fornecido, retorna null.
   */
  async update(id: number, updateEscolaDto: UpdateEscolaDto): Promise<Escola> {
    return await this.escolaRepo.update(id, updateEscolaDto);
  }

  /**
   * Remove uma escola com base no ID fornecido.
   * @param id O ID da escola a ser removida.
   * @returns Uma Promise que resolve após a remoção da escola. Se nenhuma escola for encontrada com o ID fornecido, retorna null.
   */
  async remove(id: number): Promise<void> {
    await this.escolaRepo.remove(id)
  }
}
