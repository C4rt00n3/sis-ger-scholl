import { Documento, RG } from "@prisma/client";
import { CreateDocumentoDto } from "../dto/create-documento.dto";
import { UpdateDocumentoDto } from "../dto/update/update-documento.dto";
import { CreateRgDto } from "../dto/create-rgDoc.dto";

/**
 * Interface para um repositório de documentos.
 * Define métodos para criar, encontrar, atualizar e remover documentos.
 */
export abstract class DocumentosRepository {
    /**
     * Cria um novo documento com base nos dados fornecidos no DTO.
     * @param createDocumentoDto O DTO contendo os dados para criar o documento.
     * @returns O documento criado.
     */
    abstract create(createDocumentoDto: CreateDocumentoDto): Promise<Documento>;

    /**
     * Busca vários documentos com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de documentos encontrados.
     */
    abstract findMany(query: {}): Promise<Documento[]>;

    /**
     * Busca um documento pelo ID.
     * @param id O ID do documento a ser buscado.
     * @returns O documento encontrado.
     */
    abstract findOne(id: number): Promise<Documento>;

    /**
     * Atualiza um documento existente.
     * @param id O ID do documento a ser atualizado.
     * @param updateDocumentoDto Os dados atualizados do documento.
     * @returns O documento atualizado.
     */
    abstract update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento>;

    /**
     * Remove um documento pelo ID.
     * @param id O ID do documento a ser removido.
     */
    abstract remove(id: number): Promise<void>;

    abstract createRG(createRgDto: CreateRgDto): Promise<RG>

    abstract rollbackData(documentoData: Documento): Promise<void>
}
