import { Injectable } from '@nestjs/common';
import { CreateAlunoTransferenciaDto } from './dto/create-aluno_transferencia.dto';
import { UpdateAlunoTransferenciaDto } from './dto/update-aluno_transferencia.dto';
import { AlunoTransferenciaRepository } from './repository/aluno_transferencia';

@Injectable()
export class AlunoTransferenciaService {
  constructor(private readonly alunoTransferenciaService: AlunoTransferenciaRepository) {}
  
  /**
     * Cria uma nova transferência de aluno.
     * @param createAlunoTransferenciaDto Os dados da transferência a ser criada.
     * @returns A transferência de aluno criada.
     */
  create(createAlunoTransferenciaDto: CreateAlunoTransferenciaDto) {
    return this.alunoTransferenciaService.create(createAlunoTransferenciaDto);
  }

  /**
     * Busca uma transferência de aluno pelo ID.
     * @param id O ID da transferência de aluno a ser buscada.
     * @returns A transferência de aluno encontrada.
     * @throws NotFoundException caso a transferência de aluno não seja encontrada.
     */
  findAll() {
    return this.alunoTransferenciaService.findMany({});
  }

    /**
     * Busca várias transferências de aluno com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de transferências de aluno encontradas.
     */
  findOne(id: number) {
    return this.alunoTransferenciaService.findOne(id);
  }

  /**
     * Atualiza uma transferência de aluno existente.
     * @param id O ID da transferência de aluno a ser atualizada.
     * @param updateAlunoTransferenciaDto Os dados atualizados da transferência de aluno.
     * @returns A transferência de aluno atualizada.
     */
  update(id: number, updateAlunoTransferenciaDto: UpdateAlunoTransferenciaDto) {
    return this.alunoTransferenciaService.update(id, updateAlunoTransferenciaDto);
  }

    /**
     * Remove uma transferência de aluno.
     * @param id O ID da transferência de aluno a ser removida.
     */
  remove(id: number) {
    return this.alunoTransferenciaService.delete(id);
  }
}
