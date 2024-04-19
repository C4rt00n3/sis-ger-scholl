import { AlunoTransferencia } from "@prisma/client";
import { UpdateAlunoTransferenciaDto } from "../dto/update-aluno_transferencia.dto";
import { CreateAlunoTransferenciaDto } from "../dto/create-aluno_transferencia.dto";

export abstract class AlunoTransferenciaRepository {
    /**
     * Cria uma nova transferência de aluno.
     * @param createAlunoTransferenciaDto Os dados da transferência a ser criada.
     * @returns A transferência de aluno criada.
     */
    abstract create(createAlunoTransferenciaDto: CreateAlunoTransferenciaDto): Promise<AlunoTransferencia>

     /**
     * Busca uma transferência de aluno pelo ID.
     * @param id O ID da transferência de aluno a ser buscada.
     * @returns A transferência de aluno encontrada.
     * @throws NotFoundException caso a transferência de aluno não seja encontrada.
     */
    abstract findOne(id: number): Promise<AlunoTransferencia>

    /**
     * Busca várias transferências de aluno com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de transferências de aluno encontradas.
     */
    abstract findMany(query: {}): Promise<AlunoTransferencia[]>

    /**
     * Atualiza uma transferência de aluno existente.
     * @param id O ID da transferência de aluno a ser atualizada.
     * @param updateAlunoTransferenciaDto Os dados atualizados da transferência de aluno.
     * @returns A transferência de aluno atualizada.
     */
    abstract update(id: number, updateAlunoTransferenciaDto: UpdateAlunoTransferenciaDto): Promise<AlunoTransferencia>

    /**
     * Remove uma transferência de aluno.
     * @param id O ID da transferência de aluno a ser removida.
     */
    abstract delete(id: number): Promise<void>
}