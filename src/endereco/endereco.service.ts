import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { EnderecoRepository } from './repository/endereco.repository';

/**
 * Serviço responsável por operações relacionadas a endereços.
 */
@Injectable()
export class EnderecoService {
  constructor(private readonly enderecoClient: EnderecoRepository) {}

  /**
   * Cria um novo endereço.
   * @param createEnderecoDto Os dados do endereço a ser criado.
   * @returns O endereço criado.
   */
  create(createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoClient.create(createEnderecoDto);
  }

  /**
   * Busca todos os endereços.
   * @returns Uma lista de todos os endereços.
   */
  findAll() {
    return this.enderecoClient.findMany({});
  }

  /**
   * Busca um endereço pelo ID.
   * @param id O ID do endereço a ser buscado.
   * @returns O endereço encontrado.
   */
  findOne(id: number) {
    return this.enderecoClient.findOne(id);
  }

  /**
   * Atualiza um endereço existente.
   * @param id O ID do endereço a ser atualizado.
   * @param updateEnderecoDto Os dados atualizados do endereço.
   * @returns O endereço atualizado.
   */
  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoClient.update(id, updateEnderecoDto);
  }

  /**
   * Remove um endereço.
   * @param id O ID do endereço a ser removido.
   */
  remove(id: number) {
    return this.enderecoClient.remove(id);
  }
}
