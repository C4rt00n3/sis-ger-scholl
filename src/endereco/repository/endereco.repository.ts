import { Endereco } from "@prisma/client";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";


export abstract class EnderecoRepository {
    /**
     * Cria um novo endereço.
     * @param createEnderecoDto Os dados do endereço a ser criado.
     * @returns O endereço criado.
     */
    abstract create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco>

    /**
     * Busca um endereço pelo ID.
     * @param id O ID do endereço a ser buscado.
     * @returns O endereço encontrado.
     * @throws NotFoundException caso o endereço não seja encontrado.
     */
    abstract findOne(id: number): Promise<Endereco>

    /**
     * Busca vários endereços com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de endereços encontrados.
     */
    abstract findMany(query: {}): Promise<Endereco[]> 

    /**
     * Atualiza um endereço existente.
     * @param id O ID do endereço a ser atualizado.
     * @param updateEnderecoDto Os dados atualizados do endereço.
     * @returns O endereço atualizado.
     */
    abstract update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco>

    /**
     * Remove um endereço.
     * @param id O ID do endereço a ser removido.
     * @throws NotFoundException caso o endereço não seja encontrado.
     */
    abstract remove(id: number): Promise<void>
}