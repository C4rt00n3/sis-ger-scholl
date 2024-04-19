import { CreateTurmaDto } from "src/turma/dto/create-turma.dto";
import { UpdateTurmaDto } from "src/turma/dto/update-turma.dto";
import { TurmaRepository } from "../turma.repository";
import { Prisma, Turma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { DefaultArgs } from "@prisma/client/runtime/library";

@Injectable()
export class TurmaRepositoryPrisma implements TurmaRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria uma nova turma com base nos dados fornecidos em `createTurmaDto`.
     * @param createTurmaDto Um objeto contendo os dados necessários para criar uma nova turma.
     * @returns Uma Promise que resolve com o objeto de turma criado.
     */
    async create(createTurmaDto: CreateTurmaDto): Promise<Turma> {
        const data = {} as Turma;
        Object.assign(data, createTurmaDto);
        const turma = await this.searchWithParmas({
            where: {
                Nome_Turmas: createTurmaDto.nomeTurma,
                escolaId: data.escolaId
            }
        })

        if (!turma)
            return await this.prisma.turma.create({ data });
        
        return turma[0]
    }

    async searchWithParmas(
        query: Prisma.TurmaFindManyArgs
    ): Promise<Turma[]> {
        return await this.prisma.turma.findMany({
            ...query
        })
    }
    /**
     * Atualiza uma turma existente com base no ID e nos dados fornecidos em `updateTurmaDto`.
     * @param id O ID da turma a ser atualizada.
     * @param updateTurmadto Um objeto contendo os dados a serem atualizados na turma.
     * @returns Uma Promise que resolve com o objeto de turma atualizado.
     */
    async update(id: number, updateTurmadto: UpdateTurmaDto): Promise<Turma> {
        await this.findOne(id);
        return await this.prisma.turma.update({
            where: { id },
            data: updateTurmadto
        });
    }


    /**
     * Retorna uma turma com base no ID fornecido.
     * @param id O ID da turma a ser encontrada.
     * @returns Uma Promise que resolve com o objeto de turma encontrado. Se nenhuma turma for encontrada com o ID fornecido, lança uma exceção `NotFoundException`.
     */
    async findOne(id: number): Promise<Turma> {
        return await this.prisma.turma.findUniqueOrThrow({ where: { id } }).catch(_ => { throw new NotFoundException("Turma não encontrada"); });
    }

    /**
     * Retorna todas as turmas de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das turmas.
     * @returns Uma Promise que resolve com uma matriz de objetos de turma que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}): Promise<Turma[]> {
        return await this.prisma.turma.findMany({ where: filters });
    }

    /**
     * Remove uma turma com base no ID fornecido.
     * @param id O ID da turma a ser removida.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.turma.delete({ where: { id } });
    }
}
