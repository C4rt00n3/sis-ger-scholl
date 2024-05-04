import { Injectable } from '@nestjs/common';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update/update-documento.dto';
import { DocumentosRepository } from './repository/documentos.repository';
import { CreateRgDto } from './dto/create-rgDoc.dto';
import { Documento, Usuarios } from '@prisma/client';

@Injectable()
export class DocumentosService {
  constructor(private readonly documentosService: DocumentosRepository) { }

  /**
   * Cria um novo documento com base nos dados fornecidos.
   * @param createDocumentoDto O DTO contendo os dados para criar o documento.
   * @returns O documento criado.
   */
  create(createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.create(createDocumentoDto);
  }

  /**
   * Retorna todos os documentos.
   * @returns Uma lista de documentos.
   */
  findAll() {
    return this.documentosService.findMany({});
  }

  /**
   * Retorna um documento com base no ID fornecido.
   * @param id O ID do documento a ser retornado.
   * @returns O documento correspondente ao ID fornecido.
   */
  findOne(id: number) {
    return this.documentosService.findOne(id);
  }

  /**
   * Atualiza um documento com base no ID fornecido e nos dados fornecidos.
   * @param id O ID do documento a ser atualizado.
   * @param updateDocumentoDto O DTO contendo os dados para atualizar o documento.
   * @returns O documento atualizado.
   */
  update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    return this.documentosService.update(id, updateDocumentoDto);
  }

  /**
   * Remove um documento com base no ID fornecido.
   * @param id O ID do documento a ser removido.
   * @returns Uma mensagem indicando a remoção bem-sucedida.
   */
  remove(id: number) {
    return this.documentosService.remove(id);
  }

  async createRG(createRgDto: CreateRgDto) {
    return await this.documentosService.createRG(createRgDto)
  }

  async rollbackData(documentoData: Documento, user: Usuarios): Promise<void> {
    await this.documentosService.rollbackData(documentoData)
  }
}
