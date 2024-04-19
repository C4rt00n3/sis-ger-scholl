import { CreateEnderecoDto } from "src/endereco/dto/create-endereco.dto";
import { UpdateEnderecoDto } from "src/endereco/dto/update-endereco.dto";
import { Endereco } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { EnderecoRepository } from "src/endereco/repository/endereco.repository";

/**
 * Implementação da interface `EnderecoRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class EnderecoRepositoryPrisma implements EnderecoRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria um novo endereço com base nos dados fornecidos no objeto `createEnderecoDto`.
     * @param createEnderecoDto Um objeto contendo os dados necessários para criar um novo endereço.
     * @returns Uma Promise que resolve com o objeto de endereço criado.
     */
    async create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
        const data = {} as Endereco;
        Object.assign(data, createEnderecoDto);

        return await this.prisma.endereco.create({ data });
    }

    /**
     * Encontra um endereço pelo ID.
     * @param id O ID do endereço a ser encontrado.
     * @returns Uma Promise que resolve com o objeto de endereço encontrado. Se nenhum endereço for encontrado, lança uma exceção `NotFoundException`.
     */
    async findOne(id: number): Promise<Endereco> {
        return await this.prisma.endereco.findUniqueOrThrow({ where: { id } }).catch(_ => { throw new NotFoundException("Endereco não encontrado") });
    }

    /**
     * Encontra vários endereços com base em uma consulta.
     * @param query Um objeto contendo os critérios de consulta.
     * @returns Uma Promise que resolve com uma matriz de objetos de endereço que correspondem aos critérios de consulta.
     */
    async findMany(query: {}): Promise<Endereco[]> {
        return await this.prisma.endereco.findMany({ where: query });
    }

    /**
     * Atualiza um endereço existente com base no ID e nos dados fornecidos em `updateEnderecoDto`.
     * @param id O ID do endereço a ser atualizado.
     * @param updateEnderecoDto Um objeto contendo os dados a serem atualizados no endereço.
     * @returns Uma Promise que resolve com o objeto de endereço atualizado. Se nenhum endereço for encontrado com o ID fornecido, lança uma exceção `NotFoundException`.
     */
    async update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
        await this.findOne(id);
        return await this.prisma.endereco.update({
            where: { id },
            data: updateEnderecoDto
        });
    }

    /**
     * Remove um endereço com base no ID.
     * @param id O ID do endereço a ser removido.
     * @returns Uma Promise que resolve após a remoção do endereço. Se nenhum endereço for encontrado com o ID fornecido, lança uma exceção `NotFoundException`.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.prisma.endereco.delete({ where: { id } });
    }
}
