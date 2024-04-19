import { CreateAlunoTransferenciaDto } from "src/aluno_transferencia/dto/create-aluno_transferencia.dto";
import { UpdateAlunoTransferenciaDto } from "src/aluno_transferencia/dto/update-aluno_transferencia.dto";
import { AlunoTransferenciaRepository } from "../aluno_transferencia";
import { AlunoTransferencia } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";

/**
 * Implementação da interface `AlunoTransferenciaRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class AlunoTransferenciaRepositoryPrisma implements AlunoTransferenciaRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria uma nova transferência de aluno.
     * @param createAlunoTransferenciaDto Os dados da transferência do aluno a ser criada.
     * @returns A transferência do aluno criada.
     */
    async create(createAlunoTransferenciaDto: CreateAlunoTransferenciaDto): Promise<AlunoTransferencia> {
        const data = {} as AlunoTransferencia;
        Object.assign(data, createAlunoTransferenciaDto);

        return await this.prisma.alunoTransferencia.create({ data });
    }

    /**
     * Busca uma transferência de aluno pelo ID.
     * @param id O ID da transferência do aluno a ser buscada.
     * @returns A transferência do aluno encontrada.
     * @throws NotFoundException se a transferência do aluno não for encontrada.
     */
    async findOne(id: number): Promise<AlunoTransferencia> {
        return await this.prisma.alunoTransferencia
            .findUniqueOrThrow({ where: { id } })
            .catch(_ => { throw new NotFoundException("Transferencia não encontrada!") });
    }

    /**
     * Busca várias transferências de aluno com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de transferências de aluno encontradas.
     */
    async findMany(query: {}): Promise<AlunoTransferencia[]> {
        return await this.prisma.alunoTransferencia.findMany({ where: query });
    }

    /**
     * Atualiza uma transferência de aluno existente.
     * @param id O ID da transferência do aluno a ser atualizada.
     * @param updateAlunoTransferenciaDto Os dados atualizados da transferência do aluno.
     * @returns A transferência do aluno atualizada.
     */
    async update(id: number, updateAlunoTransferenciaDto: UpdateAlunoTransferenciaDto): Promise<AlunoTransferencia> {
        const existingTransferencia = await this.findOne(id); // Verifica se a transferência existe

        return await this.prisma.alunoTransferencia.update({
            where: { id },
            data: { ...existingTransferencia, ...updateAlunoTransferenciaDto }
        });
    }

    /**
     * Remove uma transferência de aluno pelo ID.
     * @param id O ID da transferência do aluno a ser removida.
     */
    async delete(id: number): Promise<void> {
        await this.prisma.alunoTransferencia.delete({ where: { id } });
    }
}
