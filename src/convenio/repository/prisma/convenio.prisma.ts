import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateConvenioDto } from "src/convenio/dto/create-covenio.dto";
import { UpdateConvenioDto } from "src/convenio/dto/update-covenio.dto";
import { ConvenioRepository } from "../convenio.repository";
import { Convenio } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

/**
 * Implementação da interface `ConvenioRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class ConvenioRepositoryPrisma implements ConvenioRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria um novo convênio.
     * @param createConvenioDto Os dados do convênio a ser criado.
     * @returns O convênio criado.
     */
    async create(createConvenioDto: CreateConvenioDto): Promise<Convenio> {
        const data = {} as Convenio;
        Object.assign(data, createConvenioDto)
        return await this.prisma.convenio.create({ data })
    }

    /**
     * Busca um convênio pelo ID.
     * @param id O ID do convênio a ser buscado.
     * @returns O convênio encontrado.
     * @throws NotFoundException se o convênio não for encontrado.
     */
    async findOne(id: number): Promise<Convenio> {
        return await this.prisma.convenio
            .findUniqueOrThrow({ where: { id } })
            .catch(_ => {
                throw new NotFoundException("Convenio não encontrado")
            })
    }

    /**
     * Busca vários convênios com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de convênios encontrados.
     */
    async findAll(query: {}): Promise<Convenio[]> {
        return await this.prisma.convenio.findMany({ where: query })
    }

    /**
     * Atualiza um convênio existente.
     * @param id O ID do convênio a ser atualizado.
     * @param updateCovenioDto Os dados atualizados do convênio.
     * @returns O convênio atualizado.
     */
    async update(id: number, updateCovenioDto: UpdateConvenioDto): Promise<Convenio> {
        await this.findOne(id)
        return await this.prisma.convenio.update({
            where: { id },
            data: updateCovenioDto
        })
    }

    /**
     * Remove um convênio pelo ID.
     * @param id O ID do convênio a ser removido.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.convenio.delete({ where: { id } })
    }

}
