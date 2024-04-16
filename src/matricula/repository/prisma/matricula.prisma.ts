import { $Enums, Matricula } from "@prisma/client";
import { CreateMatriculaDto } from "src/matricula/dto/create-matricula.dto";
import { UpdateMatriculaDto } from "src/matricula/dto/update-matricula.dto";
import { MatriculaRepository } from "../matricula.repository"
import { PrismaService } from "src/prisma.service";

export class MatriculaPrismaRepository implements MatriculaRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula> {
        const matricula = {} as Matricula;
        Object.assign(matricula, createMatriculaDto);
        return await this.prisma.matricula.create({
            data: matricula
        })
    }

    async finOnde(id: number): Promise<Matricula> {
        throw new Error("Method not implemented.");
    }

    async update(id: number, upadateMatr: UpdateMatriculaDto): Promise<Matricula> {
        throw new Error("Method not implemented.");
    }

    async findAll(fltesr: {}): Promise<Matricula[]> {
        throw new Error("Method not implemented.");
    }

    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}