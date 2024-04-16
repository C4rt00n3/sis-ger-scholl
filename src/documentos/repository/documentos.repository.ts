import { Documento } from "@prisma/client";
import { CreateDocumentoDto } from "../dto/create-documento.dto";
import { UpdateDocumentoDto } from "../dto/update/update-documento.dto";

export abstract class DocumentosRepository {
    abstract create(createDocumentoDto: CreateDocumentoDto): Promise<Documento>

    abstract findMany(query: {}): Promise<Documento[]>

    abstract findOne(id: number): Promise<Documento>

    abstract update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento>

    abstract remove(id: number): Promise<void>
}