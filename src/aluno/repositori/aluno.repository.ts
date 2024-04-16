import { Aluno } from "@prisma/client";
import { CreateAlunoDto } from "../dto/create-aluno.dto";
import { UpdateAlunoDto } from "../dto/update-aluno.dto";

export abstract class AlunoRepository {
    abstract create(CreateAlunoDto: CreateAlunoDto): Promise<Aluno>

    abstract findOne(id: number): Promise<Aluno>

    abstract findMany(query: {}): Promise<Aluno[]>

    abstract update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno>

    abstract remove(id: number): Promise<void>
}