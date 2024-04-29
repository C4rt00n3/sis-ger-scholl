import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usuarios } from '@prisma/client';
import { AuthGuard } from '@SRC/auth/auth.guard';
import { GetUser } from '@SRC/auth/get-user.decorator';

@ApiTags("Aluno")
@Controller('aluno')
@ApiBearerAuth()
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createAlunoDto: CreateAlunoDto, @GetUser() user: Usuarios) {
    return this.alunoService.create(createAlunoDto, user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@GetUser() user: Usuarios) {
    return this.alunoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.alunoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunoService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.alunoService.remove(+id);
  }
}
