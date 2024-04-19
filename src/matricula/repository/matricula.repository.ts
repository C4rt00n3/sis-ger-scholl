import { Matricula } from "@prisma/client";
import { CreateMatriculaDto } from "../dto/create-matricula.dto";
import { UpdateMatriculaDto } from "../dto/update-matricula.dto";

export abstract class MatriculaRepository {
    /**
     * Cria uma nova matrícula com base nos dados fornecidos no DTO.
     * @param createMatriculaDto O DTO contendo os dados para criar a matrícula.
     * @returns A matrícula criada.
     */
    abstract create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula>;

    /**
     * Retorna uma única matrícula com base no ID fornecido.
     * @param id O ID da matrícula a ser encontrada.
     * @returns A matrícula encontrada.
     */
    abstract findOne(id: number): Promise<Matricula>;

    /**
     * Atualiza uma matrícula existente com base no ID fornecido e nos novos dados.
     * @param id O ID da matrícula a ser atualizada.
     * @param updateMatr O DTO contendo os novos dados da matrícula.
     * @returns A matrícula atualizada.
     */
    abstract update(id: number, updateMatr: UpdateMatriculaDto): Promise<Matricula>;

    /**
     * Retorna todas as matrículas com base nos filtros fornecidos.
     * @param filters Filtros para a busca das matrículas.
     * @returns Uma lista de matrículas.
     */
    abstract findAll(filters: {}): Promise<Matricula[]>;

    /**
     * Remove uma matrícula com base no ID fornecido.
     * @param id O ID da matrícula a ser removida.
     */
    abstract delete(id: number): Promise<void>;
}
