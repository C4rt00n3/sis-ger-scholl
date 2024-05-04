import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Request } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usuarios } from '@prisma/client';
import { AuthGuard } from '@SRC/auth/auth.guard';
import { GetUser } from '@SRC/auth/get-user.decorator';

@ApiTags("Matricula")
@Controller('matricula')
@ApiBearerAuth()
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMatriculaDto: CreateMatriculaDto, @GetUser() user: Usuarios) {
    return this.matriculaService.create(createMatriculaDto, user);
  }

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matriculaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatriculaDto: UpdateMatriculaDto) {
    return this.matriculaService.update(+id, updateMatriculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matriculaService.remove(+id);
  }
}
