import { Injectable } from '@nestjs/common';
import { CreateConvenioDto } from './dto/create-covenio.dto';
import { UpdateConvenioDto } from './dto/update-covenio.dto';
import { ConvenioRepository } from './repository/convenio.repository';

/**
 * Serviço responsável por operações relacionadas a convênios.
 */
@Injectable()
export class ConvenioService {
  constructor(private readonly covenioRepo: ConvenioRepository) {}
  /**
   * Cria um novo convênio.
   * @param createConvenioDto Os dados do convênio a ser criado.
   * @returns Uma mensagem indicando a ação realizada.
   */
  create(createConvenioDto: CreateConvenioDto) {
    return this.covenioRepo.create(createConvenioDto)
  }

  /**
   * Busca todos os convênios.
   * @returns Uma mensagem indicando a ação realizada.
   */
  findAll() {
    return this.covenioRepo.findAll({});
  }

  /**
   * Busca um convênio pelo ID.
   * @param id O ID do convênio a ser buscado.
   * @returns Uma mensagem indicando a ação realizada.
   */
  findOne(id: number) {
    return this.covenioRepo.findOne(id);
  }

  /**
   * Atualiza um convênio existente.
   * @param id O ID do convênio a ser atualizado.
   * @param updateConvenioDto Os dados atualizados do convênio.
   * @returns Uma mensagem indicando a ação realizada.
   */
  update(id: number, updateConvenioDto: UpdateConvenioDto) {
    return this.covenioRepo.update(id, updateConvenioDto);
  }

  /**
   * Remove um convênio.
   * @param id O ID do convênio a ser removido.
   * @returns Uma mensagem indicando a ação realizada.
   */
  remove(id: number) {
    return this.covenioRepo.remove(id);
  }
}
