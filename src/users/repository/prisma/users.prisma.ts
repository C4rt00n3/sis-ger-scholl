import { Usuarios } from "@prisma/client";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { UsersRepository } from "../users.repository";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

/**
 * Implementação da interface `UsersRepository` utilizando o Prisma como ORM.
 */
export class UsersPrismaRepository implements UsersRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria um novo usuário com base nos dados fornecidos no DTO.
     * @param createUserDto O DTO contendo os dados para criar o usuário.
     * @returns O usuário criado.
     */
    async create(createUserDto: CreateUserDto): Promise<Usuarios> {
        const user = {} as Usuarios;
        Object.assign(user, createUserDto);

        return await this.prisma.usuarios.create({
            data: user
        });
    }

    /**
     * Encontra todos os usuários.
     * @returns Uma lista de todos os usuários.
     */
    async findAll(): Promise<Usuarios[]> {
        return await this.prisma.usuarios.findMany();
    }

    /**
     * Encontra um usuário pelo ID.
     * @param id O ID do usuário a ser encontrado.
     * @returns O usuário encontrado.
     * @throws NotFoundException se o usuário não for encontrado.
     */
    async findOne(id: number): Promise<Usuarios> {
        return await this.prisma.usuarios.findUniqueOrThrow({
            where: { id }
        }).catch(_ => {
            throw new NotFoundException("Usuário não encontrado");
        });
    }

    /**
     * Atualiza um usuário pelo ID com base nos dados fornecidos no DTO de atualização.
     * @param id O ID do usuário a ser atualizado.
     * @param updateUserDto O DTO contendo os dados para atualizar o usuário.
     * @returns O usuário atualizado.
     */
    async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuarios> {
        await this.findOne(id);
        return await this.prisma.usuarios.update({
            where: { id },
            data: { ...updateUserDto }
        });
    }

    /**
     * Remove um usuário pelo ID.
     * @param id O ID do usuário a ser removido.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.prisma.usuarios.delete({
            where: { id }
        });
    }
}
