import { Provider } from "@nestjs/common";
import { Convenio } from "@prisma/client";
import { CreateConvenioDto } from "../dto/create-covenio.dto";
import { UpdateConvenioDto } from "../dto/update-covenio.dto";

/**
 * Interface que define os métodos para manipulação de convênios.
 */
export abstract class ConvenioRepository {
    /**
     * Cria um novo convênio.
     * @param createConvenioDto Os dados do convênio a ser criado.
     * @returns O convênio criado.
     */
    abstract create(createConvenioDto: CreateConvenioDto): Promise<Convenio>;

    /**
     * Busca um convênio pelo ID.
     * @param id O ID do convênio a ser buscado.
     * @returns O convênio encontrado.
     */
    abstract findOne(id: number): Promise<Convenio>;

    /**
     * Busca vários convênios com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de convênios encontrados.
     */
    abstract findAll(query: {}): Promise<Convenio[]>;

    /**
     * Atualiza um convênio existente.
     * @param id O ID do convênio a ser atualizado.
     * @param updateConvenioDto Os dados atualizados do convênio.
     * @returns O convênio atualizado.
     */
    abstract update(id: number, updateConvenioDto: UpdateConvenioDto): Promise<Convenio>;

    /**
     * Remove um convênio.
     * @param id O ID do convênio a ser removido.
     */
    abstract remove(id: number): Promise<void>;
}
