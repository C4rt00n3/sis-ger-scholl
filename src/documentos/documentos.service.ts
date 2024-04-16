import { Injectable } from '@nestjs/common';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update/update-documento.dto';
import { DocumentosRepository } from './repository/documentos.repository';

@Injectable()
export class DocumentosService {
  constructor(private readonly documentosService: DocumentosRepository){}
  create(createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.create(createDocumentoDto);
  }

  findAll() {
    return `This action returns all documentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documento`;
  }

  update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    return `This action updates a #${id} documento`;
  }

  remove(id: number) {
    return `This action removes a #${id} documento`;
  }
}
