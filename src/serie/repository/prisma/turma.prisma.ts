import { Serie } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
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
    async create(createSerieDto: CreateSerieDto): Promise<Serie> {
        const data = {} as Serie;
        Object.assign(data, createSerieDto);
        return await this.prisma.serie.create({ data });
    }

    /**
     * Atualiza uma serie existente com base no ID e nos dados fornecidos em `updateSerieDto`.
     * @param id O ID da serie a ser atualizada.
     * @param updateseriedto Um objeto contendo os dados a serem atualizados na serie.
     * @returns Uma Promise que resolve com o objeto de serie atualizado.
     */
    async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
        await this.findOne(id);
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
    async findOne(id: number): Promise<Serie> {
        return await this.prisma.serie.findUniqueOrThrow({ where: { id } }).catch(_ => { throw new NotFoundException("Turma não encontrada"); });
    }

    /**
     * Retorna todas as series de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das series.
     * @returns Uma Promise que resolve com uma matriz de objetos de turma que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}): Promise<Serie[]> {
        return await this.prisma.serie.findMany({ where: filters });
    }

    /**
     * Remove uma serie com base no ID fornecido.
     * @param id O ID da serie a ser removida.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.serie.delete({ where: { id } });
    }
}
