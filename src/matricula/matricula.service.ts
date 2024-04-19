import { Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { MatriculaRepository } from './repository/matricula.repository';
import { Matricula } from '@prisma/client';

@Injectable()
export class MatriculaService {
  constructor(private readonly matriculaRepo: MatriculaRepository) {}

  /**
   * Cria uma nova matrícula com base nos dados fornecidos no DTO.
   * @param createMatriculaDto O DTO contendo os dados para criar a matrícula.
   * @returns A matrícula criada.
   */
  async create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula> {
    return await this.matriculaRepo.create(createMatriculaDto);
  }

  /**
   * Retorna todas as matrículas.
   * @returns Uma lista de matrículas.
   */
  async findAll(): Promise<Matricula[]> {
    return await this.matriculaRepo.findAll({});
  }

  /**
   * Retorna uma única matrícula com base no ID fornecido.
   * @param id O ID da matrícula a ser encontrada.
   * @returns A matrícula encontrada.
   */
  async findOne(id: number): Promise<Matricula> {
    return await this.matriculaRepo.findOne(id);
  }

  /**
   * Atualiza uma matrícula existente com base no ID fornecido e nos novos dados.
   * @param id O ID da matrícula a ser atualizada.
   * @param updateMatriculaDto O DTO contendo os novos dados da matrícula.
   * @returns A matrícula atualizada.
   */
  async update(id: number, updateMatriculaDto: UpdateMatriculaDto): Promise<Matricula> {
    return await this.matriculaRepo.update(id, updateMatriculaDto);
  }

  /**
   * Remove uma matrícula com base no ID fornecido.
   * @param id O ID da matrícula a ser removida.
   */
  async remove(id: number): Promise<void> {
    await this.matriculaRepo.delete(id);
  }
}
