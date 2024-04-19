import { $Enums, Aluno, Escola, Matricula } from "@prisma/client";
import { CreateMatriculaDto } from "src/matricula/dto/create-matricula.dto";
import { UpdateMatriculaDto } from "src/matricula/dto/update-matricula.dto";
import { MatriculaRepository } from "../matricula.repository"
import { PrismaService } from "src/prisma.service";
import { AlunoService } from "src/aluno/aluno.service";
import { EscolaService } from "src/escola/escola.service";

/**
 * Implementação da interface `MatriculaRepository` utilizando o Prisma como ORM.
 */
export class MatriculaPrismaRepository implements MatriculaRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly alunoService: AlunoService,
        private readonly escolaSerice: EscolaService
    ) {}

    /**
     * Cria uma nova matrícula com base nos dados fornecidos no DTO.
     * @param createMatriculaDto O DTO contendo os dados para criar a matrícula.
     * @returns A matrícula criada.
     */
    async create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula> {
        const matricula = {} as Matricula;
        Object.assign(matricula, createMatriculaDto);

        const aluno = await this.alunoService.create(createMatriculaDto.Aluno)
        const escola = await this.escolaSerice.create(createMatriculaDto.Escola)
        
        matricula.alunoId = aluno.id
        matricula.escolaId = escola.id
        
        return await this.prisma.matricula.create({
            data: matricula
        });
    }

    /**
     * Encontra uma matrícula pelo ID.
     * @param id O ID da matrícula a ser encontrada.
     * @returns A matrícula encontrada.
     */
    async findOne(id: number): Promise<Matricula> {
        return await this.prisma.matricula.findUnique({
            where: { id }
        });
    }

    /**
     * Atualiza uma matrícula pelo ID com base nos dados fornecidos no DTO de atualização.
     * @param id O ID da matrícula a ser atualizada.
     * @param updateMatriculaDto O DTO contendo os dados para atualizar a matrícula.
     * @returns A matrícula atualizada.
     */
    async update(id: number, updateMatriculaDto: UpdateMatriculaDto): Promise<Matricula> {
        const matricula = await this.findOne(id);
        Object.assign(matricula, updateMatriculaDto)
        return await this.prisma.matricula.update({
            where: { id },
            data: {
                ...matricula,
            }
        });
    }

    /**
     * Encontra todas as matrículas com base nos filtros fornecidos.
     * @param filters Os filtros para a busca das matrículas.
     * @returns Uma lista de matrículas que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}): Promise<Matricula[]> {
        return await this.prisma.matricula.findMany({
            where: filters
        });
    }

    /**
     * Remove uma matrícula pelo ID.
     * @param id O ID da matrícula a ser removida.
     */
    async delete(id: number): Promise<void> {
        await this.prisma.matricula.delete({
            where: { id }
        });
    }

}
