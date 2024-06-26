import { Injectable } from '@nestjs/common';
import { Serie, Turma, Usuarios } from '@prisma/client';
import { SerieRepository } from './repository/turma.repository';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SerieService {
  constructor(private readonly serieRepo: SerieRepository) {}

  /**
   * Cria uma nova serie com base nos dados fornecidos em `createSerieDto`.
   * @param createSerieDto Um objeto contendo os dados necessários para criar uma nova serie.
   * @returns Uma Promise que resolve com o objeto de serie criado.
   */
  async create(createSerieDto: CreateSerieDto, user: Usuarios): Promise<Serie> {
    return await this.serieRepo.create(createSerieDto, user);
  }

  /**
   * Retorna todas as serie.
   * @returns Uma Promise que resolve com uma matriz de objetos de serie.
   */
  async findAll(user: Usuarios): Promise<Serie[]> {
    return await this.serieRepo.findAll({}, user);
  }

  /**
   * Retorna uma serie com base no ID fornecido.
   * @param id O ID da serie a ser encontrada.
   * @returns Uma Promise que resolve com o objeto de serie encontrado. Se nenhuma turma for encontrada com o ID fornecido, retorna null.
   */
  async findOne(id: number, user: Usuarios) {
    return await this.serieRepo.findOne(id, user);
  }

  /**
   * Atualiza uma serie existente com base no ID e nos dados fornecidos em `updateserieDto`.
   * @param id O ID da serie a ser atualizada.
   * @param updateSerieDto Um objeto contendo os dados a serem atualizados na serie.
   * @returns Uma Promise que resolve com o objeto de turma atualizado.
   */
  async update(id: number, updateSerieDto: UpdateSerieDto, user: Usuarios): Promise<Serie> {
    return await this.serieRepo.update(id, updateSerieDto, user);
  }

  /**
   * Remove uma serie com base no ID fornecido.
   * @param id O ID da serie a ser removida.
   */
  async remove(id: number, user: Usuarios): Promise<void> {
    await this.serieRepo.remove(id, user);
  }
}