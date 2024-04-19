import { CreateEscolaDto } from "src/escola/dto/create-escola.dto";
import { UpdateEscolaDto } from "src/escola/dto/update-escola.dto";
import { Escola } from "@prisma/client";

export abstract class EscolaRepository {
    /**
     * Cria uma nova escola com base nos dados fornecidos em `createEscolaDto`.
     * @param createEscolaDto Um objeto contendo os dados necessários para criar uma nova escola.
     * @returns Uma Promise que resolve com o objeto de escola criado.
     */
    abstract create(createEscolaDto: CreateEscolaDto): Promise<Escola>;

    /**
     * Encontra todas as escolas com base nos filtros fornecidos.
     * @param filters Um objeto contendo os critérios de filtro para a busca das escolas.
     * @returns Uma Promise que resolve com uma matriz de objetos de escola que correspondem aos critérios de filtro.
     */
    abstract findAll(filters: {}): Promise<Escola[]>;

    /**
     * Encontra uma escola pelo ID.
     * @param id O ID da escola a ser encontrada.
     * @returns Uma Promise que resolve com o objeto de escola encontrado. Se nenhuma escola for encontrada, retorna null.
     */
    abstract findOne(id: number): Promise<Escola>;

    /**
     * Atualiza uma escola existente com base nos dados fornecidos em `updateEscolaDto`.
     * @param updateEscolaDto Um objeto contendo os dados a serem atualizados na escola.
     * @param id indentificador da escola há ser atualizada.
     * @returns Uma Promise que resolve com o objeto de escola atualizado. Se nenhuma escola for encontrada com o ID fornecido, retorna null.
     */
    abstract update(id: number, updateEscolaDto: UpdateEscolaDto): Promise<Escola>;

    /**
     * Remove uma escola com base no ID.
     * @param id O ID da escola a ser removida.
     * @returns Uma Promise que resolve após a remoção da escola. Se nenhuma escola for encontrada com o ID fornecido, retorna null.
     */
    abstract remove(id: number): Promise<void>;
}
