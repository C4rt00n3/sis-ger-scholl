import { Injectable } from '@nestjs/common';
import { CreateFiliacaoAlunoDto } from './dto/create-filiacao-aluno.dto';
import { UpdateFiliacaoAlunoDto } from './dto/update-filiacao-aluno.dto';
import { FiliacaoAluno } from '@prisma/client';
import { FiliacaoAlunoRepository } from './repository/filiacao-aluno.repository';

@Injectable()
export class FiliacaoAlunoService {
  constructor(private readonly filiacaoAlunoRepo: FiliacaoAlunoRepository) {}

  /**
   * Cria uma nova entidade FiliacaoAluno com base nos dados fornecidos.
   * @param createFiliacaoAlunoDto Objeto contendo os dados para criar a entidade.
   * @returns Uma promessa que resolve com a nova entidade criada.
   */
  async create(createFiliacaoAlunoDto: CreateFiliacaoAlunoDto): Promise<FiliacaoAluno> {
    return await this.filiacaoAlunoRepo.create(createFiliacaoAlunoDto)
  }

  /**
   * Retorna todas as entidades FiliacaoAluno.
   * @returns Uma promessa que resolve com um array contendo todas as entidades FiliacaoAluno.
   */
  async findAll(): Promise<FiliacaoAluno[]> {
    return await this.filiacaoAlunoRepo.findAll({})
  }

  /**
   * Encontra e retorna uma entidade FiliacaoAluno com base no ID fornecido.
   * @param id O ID da entidade que deve ser encontrada.
   * @returns Uma promessa que resolve com a entidade encontrada.
   */
  async findOne(id: number): Promise<FiliacaoAluno> {
    return await this.filiacaoAlunoRepo.findOne(id)
  }

  /**
   * Atualiza uma entidade FiliacaoAluno existente com base no ID fornecido e nos dados fornecidos.
   * @param id O ID da entidade que deve ser atualizada.
   * @param updateFiliacaoAlunoDto Objeto contendo os dados que devem ser atualizados na entidade.
   * @returns Uma promessa que resolve com a entidade atualizada.
   */
  async update(id: number, updateFiliacaoAlunoDto: UpdateFiliacaoAlunoDto): Promise<FiliacaoAluno> {
    return await this.filiacaoAlunoRepo.update(id, updateFiliacaoAlunoDto)
  }

  /**
   * Remove uma entidade FiliacaoAluno com base no ID fornecido.
   * @param id O ID da entidade que deve ser removida.
   * @returns Uma promessa que resolve quando a entidade é removida com sucesso.
   */
  async remove(id: number): Promise<void> {
    return await this.filiacaoAlunoRepo.remove(id)
  }
}
