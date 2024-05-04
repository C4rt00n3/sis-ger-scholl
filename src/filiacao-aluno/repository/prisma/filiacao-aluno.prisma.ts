import { FiliacaoAluno } from "@prisma/client";
import { CreateFiliacaoAlunoDto } from "src/filiacao-aluno/dto/create-filiacao-aluno.dto";
import { UpdateFiliacaoAlunoDto } from "src/filiacao-aluno/dto/update-filiacao-aluno.dto";
import { FiliacaoAlunoRepository } from "../filiacao-aluno.repository";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class FiliacaoAlunoRepositoryPrisma implements FiliacaoAlunoRepository {
    constructor(private readonly prisma: PrismaService) {}

    /**
     * Cria uma nova entidade FiliacaoAluno com base nos dados fornecidos.
     * @param createFiliacaoAlunoDto Objeto contendo os dados para criar a entidade.
     * @returns Uma promessa que resolve com a nova entidade criada.
     */
    async create(createFiliacaoAlunoDto: CreateFiliacaoAlunoDto): Promise<FiliacaoAluno> {
        const data = {} as FiliacaoAluno;
        Object.assign(data, createFiliacaoAlunoDto)

        return await this.prisma.filiacaoAluno.create({
            data
        })
    }
    
    /**
     * Atualiza uma entidade FiliacaoAluno existente com base no ID fornecido e nos dados fornecidos.
     * @param id O ID da entidade que deve ser atualizada.
     * @param updateFiliacaoAluno Objeto contendo os dados que devem ser atualizados na entidade.
     * @returns Uma promessa que resolve com a entidade atualizada.
     */
    async update(id: number, updateFiliacaoAluno: UpdateFiliacaoAlunoDto): Promise<FiliacaoAluno> {
        await this.findOne(id)
        return await this.prisma.filiacaoAluno.update({
            where: {id},
            data: updateFiliacaoAluno
        })
    }
    
    /**
     * Encontra e retorna uma entidade FiliacaoAluno com base no ID fornecido.
     * @param id O ID da entidade que deve ser encontrada.
     * @returns Uma promessa que resolve com a entidade encontrada, ou lança uma exceção NotFoundException se não encontrada.
     */
    async findOne(id: number): Promise<FiliacaoAluno> {
        return await this.prisma.filiacaoAluno
        .findUniqueOrThrow({where: {id}})
        .catch(_=> {throw new NotFoundException("Filiação não encontrada.")})
    }
    
    /**
     * Retorna todas as entidades FiliacaoAluno com base nos filtros fornecidos.
     * @param filters Objeto contendo os filtros a serem aplicados à consulta.
     * @returns Uma promessa que resolve com um array contendo todas as entidades que correspondem aos filtros fornecidos.
     */
    async findAll(filters: {}): Promise<FiliacaoAluno[]> {
        return await this.prisma.filiacaoAluno.findMany({where: filters})
    }
    
    /**
     * Remove uma entidade FiliacaoAluno com base no ID fornecido.
     * @param id O ID da entidade que deve ser removida.
     * @returns Uma promessa que resolve quando a entidade é removida com sucesso.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.filiacaoAluno.delete({where: {id}})
    }
}
