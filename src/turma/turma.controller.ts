import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usuarios } from '@prisma/client';
import { GetUser } from '@SRC/auth/get-user.decorator';

@Controller('turma')
@ApiTags("Turmas")
@ApiBearerAuth()
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()

  create(@Body() createTurmaDto: CreateTurmaDto,  @GetUser() user: Usuarios) {
    return this.turmaService.create(createTurmaDto, user);
  }

  @Get()
  findAll() {
    return this.turmaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmaService.update(+id, updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmaService.remove(+id);
  }
}
