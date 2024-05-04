import { Serie, Usuarios } from "@prisma/client";
import { CreateSerieDto } from "../dto/create-serie.dto";
import { UpdateSerieDto } from "../dto/update-serie.dto";

export abstract class SerieRepository {
    /**
     * Cria uma nova serie com base nos dados fornecidos em `CreateSerieDto`.
     * @param CreateSerieDto Um objeto contendo os dados necessários para criar uma nova serie.
     * @returns Uma Promise que resolve com o objeto de serie criado.
     */
    abstract create(createSerieDto: CreateSerieDto, user: Usuarios): Promise<Serie>

    /**
     * Atualiza uma serie existente com base no ID e nos dados fornecidos em `UpdateSUpdateSerieDto`.
     * @param id O ID da serie a ser atualizada.
     * @paramUpdateSerieDto Um objeto contendo os dados a serem atualizados na serie.
     * @returns Uma Promise que resolve com o objeto de serie atualizado.
     */
    abstract update(id: number,updateSerieDto:UpdateSerieDto, user: Usuarios): Promise<Serie>

    /**
     * Retorna uma serie com base no ID fornecido.
     * @param id O ID da serie a ser encontrada.
     * @returns Uma Promise que resolve com o objeto de serie encontrado. Se nenhuma serie for encontrada com o ID fornecido, retorna null.
     */
    abstract findOne(id: number, user: Usuarios): Promise<Serie>

    /**
     * Retorna todas as series de acordo com os filtros fornecidos.
     * @param filters Um objeto contendo os filtros para a busca das series.
     * @returns Uma Promise que resolve com uma matriz de objetos de serie que correspondem aos filtros fornecidos.
     */
    abstract findAll(filters: {}, user: Usuarios): Promise<Serie[]>

    /**
     * Remove uma serie com base no ID fornecido.
     * @param id O ID da serie a ser removida.
     * @returns Uma Promise que resolve após a remoção da serie. Se nenhuma serie for encontrada com o ID fornecido, retorna null.
     */
    abstract remove(id: number, user: Usuarios): Promise<void>
}
