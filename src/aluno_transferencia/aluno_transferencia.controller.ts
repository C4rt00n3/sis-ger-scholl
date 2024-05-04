import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunoTransferenciaService } from './aluno_transferencia.service';
import { CreateAlunoTransferenciaDto } from './dto/create-aluno_transferencia.dto';
import { UpdateAlunoTransferenciaDto } from './dto/update-aluno_transferencia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('aluno-transferencia')
@ApiTags("Aluno-Transferência")
@ApiBearerAuth()
export class AlunoTransferenciaController {
  constructor(private readonly alunoTransferenciaService: AlunoTransferenciaService) {}

  @Post()
  create(@Body() createAlunoTransferenciaDto: CreateAlunoTransferenciaDto) {
    return this.alunoTransferenciaService.create(createAlunoTransferenciaDto);
  }

  @Get()
  findAll() {
    return this.alunoTransferenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoTransferenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoTransferenciaDto: UpdateAlunoTransferenciaDto) {
    return this.alunoTransferenciaService.update(+id, updateAlunoTransferenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunoTransferenciaService.remove(+id);
  }
}
