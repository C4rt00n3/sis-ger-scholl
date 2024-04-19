import { FiliacaoAluno } from "@prisma/client";
import { CreateFiliacaoAlunoDto } from "../dto/create-filiacao-aluno.dto";
import { UpdateFiliacaoAlunoDto } from "../dto/update-filiacao-aluno.dto";

/**
 * Classe abstrata que define a interface para um repositório de dados para a entidade FiliacaoAluno.
 */
export abstract class FiliacaoAlunoRepository {
    /**
     * Cria uma nova entidade FiliacaoAluno com base nos dados fornecidos.
     * @param createFiliacaoAlunoDto Objeto contendo os dados para criar a entidade.
     * @returns Uma promessa que resolve com a nova entidade criada.
     */
    abstract create(createFiliacaoAlunoDto: CreateFiliacaoAlunoDto): Promise<FiliacaoAluno>;

    /**
     * Atualiza uma entidade FiliacaoAluno existente com base no ID fornecido e nos dados fornecidos.
     * @param id O ID da entidade que deve ser atualizada.
     * @param updateFiliacaoAluno Objeto contendo os dados que devem ser atualizados na entidade.
     * @returns Uma promessa que resolve com a entidade atualizada.
     */
    abstract update(id: number, updateFiliacaoAluno: UpdateFiliacaoAlunoDto): Promise<FiliacaoAluno>;

    /**
     * Encontra e retorna uma entidade FiliacaoAluno com base no ID fornecido.
     * @param id O ID da entidade que deve ser encontrada.
     * @returns Uma promessa que resolve com a entidade encontrada, ou undefined se não encontrada.
     */
    abstract findOne(id: number): Promise<FiliacaoAluno | undefined>;

    /**
     * Retorna todas as entidades FiliacaoAluno com base nos filtros fornecidos.
     * @param filters Objeto contendo os filtros a serem aplicados à consulta.
     * @returns Uma promessa que resolve com um array contendo todas as entidades que correspondem aos filtros fornecidos.
     */
    abstract findAll(filters: {}): Promise<FiliacaoAluno[]>;

    /**
     * Remove uma entidade FiliacaoAluno com base no ID fornecido.
     * @param id O ID da entidade que deve ser removida.
     * @returns Uma promessa que resolve quando a entidade é removida com sucesso.
     */
    abstract remove(id: number): Promise<void>;
}
