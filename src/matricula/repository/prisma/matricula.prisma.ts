import { Aluno, Matricula, Usuarios } from "@prisma/client";
import { CreateMatriculaDto } from "src/matricula/dto/create-matricula.dto";
import { UpdateMatriculaDto } from "src/matricula/dto/update-matricula.dto";
import { MatriculaRepository } from "../matricula.repository"
import { PrismaService } from "src/prisma.service";
import { AlunoService } from "src/aluno/aluno.service";
import { Injectable, NotFoundException } from "@nestjs/common";

/**
 * Implementação da interface `MatriculaRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class MatriculaPrismaRepository implements MatriculaRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly alunoService: AlunoService,
    ) { }

    /**
     * Cria uma nova matrícula com base nos dados fornecidos no DTO.
     * @param createMatriculaDto O DTO contendo os dados para criar a matrícula.
     * @returns A matrícula criada.
     */
    async create(createMatriculaDto: CreateMatriculaDto, user: Usuarios): Promise<Matricula> {
        let aluno: Aluno | null = null
        try {
            const {Aluno, ...data} = createMatriculaDto;
            const matricula = data as Matricula;
            aluno = await this.alunoService.create(createMatriculaDto.Aluno, user)
            return await this.prisma.matricula.create({
                data: {
                    ...matricula,
                    alunoId: aluno.id,
                    escolaId: user.escolaId
                },
                include: {
                    Aluno: {
                        select:{
                            Documentos: true,
                            Endereco: true,
                            Convenio: true,
                            AlunoTransferencia: true,
                            Serie: true,
                            Turma: true,
                            filiacao: true
                        }
                    },
                    Escola: true
                }
            });
        } catch (error) {
            if(aluno) await this.alunoService.remove(aluno.id)
            throw error
        }
    }

    /**
     * Encontra uma matrícula pelo ID.
     * @param id O ID da matrícula a ser encontrada.
     * @returns A matrícula encontrada.
     */
    async findOne(id: number): Promise<Matricula> {
        return await this.prisma.matricula.findUniqueOrThrow({
            where: { id }
        }).then(e=>e).catch(_=> {throw new NotFoundException("Matricula não encontrada")});
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
            where: filters,
            include: {
                Aluno: {
                    include:{
                        Serie: true,
                        Turma: true,
                        Documentos: {
                            include: {
                                SUS: true,
                                RG: true,
                                SituacaoMilitar: true,
                                TituloEleitor: true
                            }
                        }
                    }
                },
                Materia: {
                    select: {
                        faltas: true
                    }
                }
            }
        });
    }

    /**
     * Remove uma matrícula pelo ID.
     * @param id O ID da matrícula a ser removida.
     */
    async delete(id: number): Promise<void> {
        const matricula = await this.findOne(id)
        await this.alunoService.remove(matricula.alunoId)
    }
}
