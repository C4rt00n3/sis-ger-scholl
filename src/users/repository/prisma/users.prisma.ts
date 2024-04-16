import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { UsersRepository } from "../users.repository";
import { Usuarios } from "@prisma/client";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

export class UsersPrismaRepository implements UsersRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto): Promise<Usuarios> {
        const user = {} as Usuarios;
        Object.assign(user, createUserDto);

        return await this.prisma.usuarios.create({
            data: user
        })
    }

    async findAll(): Promise<Usuarios[]> {
        return await this.prisma.usuarios.findMany()
    }

    async findOne(id: number): Promise<Usuarios> {
        return await this.prisma.usuarios.findUniqueOrThrow({ where: { id } })
            .catch(_ => { throw new NotFoundException("Usuário não encontrado") })
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuarios> {
        await this.findOne(id)
        return await this.prisma.usuarios.update({
            where: {id},
            data: {...updateUserDto}
        })
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.usuarios.delete({
            where: {id}
        })
    }

}