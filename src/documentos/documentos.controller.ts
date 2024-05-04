import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update/update-documento.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRgDto } from './dto/create-rgDoc.dto';


@Controller('documentos')
@ApiTags('Documentos')
@ApiBearerAuth()
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post()
  create(@Body() createDocumentoDto: CreateDocumentoDto) {
    console.log(createDocumentoDto)
    return this.documentosService.create(createDocumentoDto);
  }

  @Get()
  findAll() {
    return this.documentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
    return this.documentosService.update(+id, updateDocumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentosService.remove(+id);
  }

  @Post("/RG")
  createRG(@Body() createRgDto: CreateRgDto) {
    console.log(createRgDto)
    return this.documentosService.createRG(createRgDto);
  }
}
