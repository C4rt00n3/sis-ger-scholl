import { $Enums, Aluno } from "@prisma/client";
import { CreateAlunoDto } from "src/aluno/dto/create-aluno.dto";
import { UpdateAlunoDto } from "src/aluno/dto/update-aluno.dto";
import { AlunoRepository } from "../aluno.repository";
import { PrismaService } from "src/prisma.service";
import { NotFoundException } from "@nestjs/common";

export class AlunoRepositoryPrimsa implements AlunoRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
        const aluno = {} as Aluno;
        Object.assign(aluno, createAlunoDto);

        return await this.prisma.aluno.create({
            data: aluno
        })
    }

    async findOne(id: number): Promise<Aluno> {
        return await this.prisma.aluno.findUniqueOrThrow({where: {id}})
        .catch(_=> {throw new NotFoundException("Aluno não encontrado")})
    }

    async findMany(query: {}): Promise<Aluno[]> {
        return await this.prisma.aluno.findMany({
            where: {...query}
        })
    }

    async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
        await this.findOne(id)
        return this.prisma.aluno.update({
            where: {id},
            data: updateAlunoDto
        })
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.aluno.delete({where: {id}})
    }

}