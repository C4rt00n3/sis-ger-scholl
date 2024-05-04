import { CreateTurmaDto } from "src/turma/dto/create-turma.dto";
import { UpdateTurmaDto } from "src/turma/dto/update-turma.dto";
import { TurmaRepository } from "../turma.repository";
import { Prisma, Turma, Usuarios } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class TurmaRepositoryPrisma implements TurmaRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria uma nova turma com base nos dados fornecidos em `createTurmaDto`.
     * @param createTurmaDto Um objeto contendo os dados necessários para criar uma nova turma.
     * @returns Uma Promise que resolve com o objeto de turma criado.
     */
    async create(createTurmaDto: CreateTurmaDto, user: Usuarios): Promise<Turma> {
        const data = {} as Turma;
        Object.assign(data, createTurmaDto);
        const turma = await this.searchWithParmas({
            where: {
                nome: createTurmaDto.nome,
                Serie: {
                    id: data.id,
                    escolaId: user.escolaId
                }
            }
        })

        if (turma.length != 0)
            throw new ConflictException("Essa turma já existe")

        return await this.prisma.turma.create({ data });
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
    async update(id: number, updateTurmadto: UpdateTurmaDto, user: Usuarios): Promise<Turma> {
        await this.findOne(id, user);
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
    async findOne(id: number, user: Usuarios): Promise<Turma> {
        return await this.prisma.turma.findUniqueOrThrow({
            where: {
                id,
                Serie: {
                    escolaId: user.escolaId
                }
            },
            include: {
                Serie: true,
                Alunos: true
            }
        }).catch(_ => { throw new NotFoundException("Turma não encontrada"); });
    }

    /**
     * Retorna todas as turmas de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das turmas.
     * @returns Uma Promise que resolve com uma matriz de objetos de turma que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}, user: Usuarios): Promise<Turma[]> {
        return await this.prisma.turma.findMany({
            where: {
                ...filters,
                Serie: {
                    escolaId: user.escolaId
                }
            },
            include: {
                Serie: true,
                Alunos: true
            }
        });
    }

    /**
     * Remove uma turma com base no ID fornecido.
     * @param id O ID da turma a ser removida.
     */
    async remove(id: number, user: Usuarios): Promise<void> {
        await this.findOne(id, user)
        await this.prisma.turma.delete({ where: { id } });
    }

    /**
     * Calcula estatísticas relacionadas aos alunos, como total de alunos com documentos específicos preenchidos,
     * total de alunos, total de turmas e total de filiações de alunos.
     * @returns Um objeto contendo as estatísticas calculadas.
     */
    async analytics() {
        // Conta o total de alunos que têm o RG, SUS, Título de Eleitor ou situação militar pendente
        const doc = await this.prisma.documento.count({
            where: {
                OR: [
                    { RG: { NOT: { documentoId: null } } },
                    { SUS: { NOT: { Documento: null } } },
                    { TituloEleitor: { NOT: { Documento: null } } },
                    { SituacaoMilitar: { NOT: { Documento: null } } }
                ]
            }
        });

        // Conta o total de alunos
        const alunosTotal = await this.prisma.aluno.count();

        // Conta o total de turmas
        const turmasTotal = await this.prisma.turma.count();

        // Conta o total de filiações de alunos
        const filiacoesTotal = await this.prisma.filiacaoAluno.count();

        // Retorna um objeto com as estatísticas calculadas
        return {
            docCount: doc,
            totalAlunos: alunosTotal,
            totalTurmas: turmasTotal,
            totalFiliacoes: filiacoesTotal
        };
    }

}
