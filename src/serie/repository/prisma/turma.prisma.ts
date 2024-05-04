import { Serie, Usuarios } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { SerieRepository } from "../turma.repository";
import { CreateSerieDto } from "src/serie/dto/create-serie.dto";
import { UpdateSerieDto } from "src/serie/dto/update-serie.dto";

@Injectable()
export class SerieRepositoryPrisma implements SerieRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria uma nova serie com base nos dados fornecidos em `createSerieDto`.
     * @param createserieDto Um objeto contendo os dados necessários para criar uma nova serie.
     * @returns Uma Promise que resolve com o objeto de serie criado.
     */
    async create(createSerieDto: CreateSerieDto, { escolaId }: Usuarios): Promise<Serie> {
        const data = {} as Serie;
        Object.assign(data, { ...createSerieDto, escolaId });
        const get = await this.prisma.serie
            .findFirst({ where: { nomeSerie: data.nomeSerie, escolaId } })

        if (get) {
            throw new ConflictException("Já exesite uma serie com este nome")
        }

        return await this.prisma.serie.create({ data });
    }

    /**
     * Atualiza uma serie existente com base no ID e nos dados fornecidos em `updateSerieDto`.
     * @param id O ID da serie a ser atualizada.
     * @param updateseriedto Um objeto contendo os dados a serem atualizados na serie.
     * @returns Uma Promise que resolve com o objeto de serie atualizado.
     */
    async update(id: number, updateSerieDto: UpdateSerieDto, user: Usuarios): Promise<Serie> {
        await this.findOne(id, user);
        return await this.prisma.serie.update({
            where: { id },
            data: updateSerieDto
        });
    }

    /**
     * Retorna uma serie com base no ID fornecido.
     * @param id O ID da serie a ser encontrada.
     * @returns Uma Promise que resolve com o objeto de serie encontrado. Se nenhuma turma for encontrada com o ID fornecido, lança uma exceção `NotFoundException`.
     */
    async findOne(id: number, user: Usuarios): Promise<Serie> {
        return await this.prisma.serie.findUniqueOrThrow({ where: { id } }).catch(_ => { throw new NotFoundException("Turma não encontrada"); });
    }

    /**
     * Retorna todas as series de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das series.
     * @returns Uma Promise que resolve com uma matriz de objetos de turma que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}, user: Usuarios): Promise<Serie[]> {
        return await this.prisma.serie.findMany({
            where: {
                ...filters,
                escolaId: user.escolaId,
            },
            include: {
                turmas: {
                    include: {
                        Alunos: true
                    }
                }
            }
        });
    }

    /**
     * Remove uma serie com base no ID fornecido.
     * @param id O ID da serie a ser removida.
     */
    async remove(id: number, user: Usuarios): Promise<void> {
        await this.findOne(id, user)
        await this.prisma.serie.delete({ where: { id } });
    }
}
