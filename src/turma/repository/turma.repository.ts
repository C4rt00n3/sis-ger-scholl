import { Turma } from "@prisma/client";
import { CreateTurmaDto } from "../dto/create-turma.dto";
import { UpdateTurmaDto } from "../dto/update-turma.dto";

export abstract class TurmaRepository {
    /**
     * Cria uma nova turma com base nos dados fornecidos em `createTurmaDto`.
     * @param createTurmaDto Um objeto contendo os dados necessários para criar uma nova turma.
     * @returns Uma Promise que resolve com o objeto de turma criado.
     */
    abstract create(createTurmaDto: CreateTurmaDto): Promise<Turma>

    /**
     * Atualiza uma turma existente com base no ID e nos dados fornecidos em `updateTurmaDto`.
     * @param id O ID da turma a ser atualizada.
     * @param updateTurmaDto Um objeto contendo os dados a serem atualizados na turma.
     * @returns Uma Promise que resolve com o objeto de turma atualizado.
     */
    abstract update(id: number, updateTurmaDto: UpdateTurmaDto): Promise<Turma>

    /**
     * Retorna uma turma com base no ID fornecido.
     * @param id O ID da turma a ser encontrada.
     * @returns Uma Promise que resolve com o objeto de turma encontrado. Se nenhuma turma for encontrada com o ID fornecido, retorna null.
     */
    abstract findOne(id: number): Promise<Turma>

    /**
     * Retorna todas as turmas de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das turmas.
     * @returns Uma Promise que resolve com uma matriz de objetos de turma que correspondem aos filtros fornecidos.
     */
    abstract findAll(filters: {}): Promise<Turma[]>

    /**
     * Remove uma turma com base no ID fornecido.
     * @param id O ID da turma a ser removida.
     * @returns Uma Promise que resolve após a remoção da turma. Se nenhuma turma for encontrada com o ID fornecido, retorna null.
     */
    abstract remove(id: number): Promise<void>
}
