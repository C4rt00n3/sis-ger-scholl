import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiliacaoAlunoService } from './filiacao-aluno.service';
import { CreateFiliacaoAlunoDto } from './dto/create-filiacao-aluno.dto';
import { UpdateFiliacaoAlunoDto } from './dto/update-filiacao-aluno.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('filiacao-aluno')
@ApiTags("Filiação Aluno")
@ApiBearerAuth()
export class FiliacaoAlunoController {
  constructor(private readonly filiacaoAlunoService: FiliacaoAlunoService) {}

  @Post()
  create(@Body() createFiliacaoAlunoDto: CreateFiliacaoAlunoDto) {
    return this.filiacaoAlunoService.create(createFiliacaoAlunoDto);
  }

  @Get()
  findAll() {
    return this.filiacaoAlunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filiacaoAlunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiliacaoAlunoDto: UpdateFiliacaoAlunoDto) {
    return this.filiacaoAlunoService.update(+id, updateFiliacaoAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filiacaoAlunoService.remove(+id);
  }
}
