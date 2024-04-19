import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvenioService } from './convenio.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateConvenioDto } from './dto/create-covenio.dto';
import { UpdateConvenioDto } from './dto/update-covenio.dto';

/**
 * Controlador responsável por endpoints relacionados a convênios.
 */
@Controller('convenio')
@ApiTags("Convenio")
@ApiBearerAuth()
export class ConvenioController {
  constructor(private readonly convenioService: ConvenioService) {}

  /**
   * Endpoint para criar um novo convênio.
   * @param createConvenioDto Os dados do convênio a ser criado.
   * @returns O convênio criado.
   */
  @Post()
  create(@Body() createConvenioDto: CreateConvenioDto) {
    return this.convenioService.create(createConvenioDto);
  }

  /**
   * Endpoint para buscar todos os convênios.
   * @returns Uma lista de todos os convênios.
   */
  @Get()
  findAll() {
    return this.convenioService.findAll();
  }

  /**
   * Endpoint para buscar um convênio pelo ID.
   * @param id O ID do convênio a ser buscado.
   * @returns O convênio encontrado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convenioService.findOne(+id);
  }

  /**
   * Endpoint para atualizar um convênio existente.
   * @param id O ID do convênio a ser atualizado.
   * @param updateConvenioDto Os dados atualizados do convênio.
   * @returns O convênio atualizado.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvenioDto: UpdateConvenioDto) {
    return this.convenioService.update(+id, updateConvenioDto);
  }

  /**
   * Endpoint para remover um convênio pelo ID.
   * @param id O ID do convênio a ser removido.
   * @returns Uma mensagem de confirmação da remoção do convênio.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convenioService.remove(+id);
  }
}
