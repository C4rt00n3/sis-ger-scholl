import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoRepository } from './repositori/aluno.repository';
import { Aluno, Usuarios } from '@prisma/client';

@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepo: AlunoRepository) {}
  /**
   * Cria um novo aluno com base nos dados fornecidos.
   * @param createAlunoDto Os dados do aluno a ser criado.
   * @returns O aluno criado.
   */
  async create(createAlunoDto: CreateAlunoDto, user: Usuarios): Promise<Aluno> {
    return await this.alunoRepo.create(createAlunoDto, user)
  }

  /**
   * Retorna todos os alunos existentes.
   * @returns Uma lista contendo todos os alunos.
   */
  async findAll(): Promise<Aluno[]> {
    return await this.alunoRepo.findMany({})
  }

  /**
   * Retorna um aluno específico com base no ID fornecido.
   * @param id O ID do aluno a ser buscado.
   * @returns O aluno encontrado.
   * @throws NotFoundException Se o aluno com o ID fornecido não for encontrado.
   */
  async findOne(id: number): Promise<Aluno> {
    return await this.alunoRepo.findOne(id)
  }

  /**
   * Atualiza os dados de um aluno existente com base no ID fornecido.
   * @param id O ID do aluno a ser atualizado.
   * @param updateAlunoDto Os novos dados do aluno.
   * @returns O aluno atualizado.
   * @throws NotFoundException Se o aluno com o ID fornecido não for encontrado.
   */
  async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    return await this.alunoRepo.update(id, updateAlunoDto)
  }

  /**
   * Remove um aluno com base no ID fornecido.
   * @param id O ID do aluno a ser removido.
   * @returns Nada.
   * @throws NotFoundException Se o aluno com o ID fornecido não for encontrado.
   */
  async remove(id: number): Promise<void> {
     await this.alunoRepo.remove(id)
  }
}
