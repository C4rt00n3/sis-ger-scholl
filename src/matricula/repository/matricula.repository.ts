import { Matricula } from "@prisma/client";
import { CreateMatriculaDto } from "../dto/create-matricula.dto";
import { UpdateMatriculaDto } from "../dto/update-matricula.dto";

export abstract class MatriculaRepository {
    abstract create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula>

    abstract finOnde(id: number): Promise<Matricula>

    abstract update(id: number, upadateMatr: UpdateMatriculaDto): Promise<Matricula>

    abstract findAll(filters: {}): Promise<Matricula[]>

    abstract delete(id: number): Promise<void>
}