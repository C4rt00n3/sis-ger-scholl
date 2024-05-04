import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UseGuards } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usuarios } from '@prisma/client';
import { GetUser } from '@SRC/auth/get-user.decorator';
import { AuthGuard } from '@SRC/auth/auth.guard';

@Controller('turma')
@ApiTags("Turmas")
@ApiBearerAuth()
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createTurmaDto: CreateTurmaDto,  @GetUser() user: Usuarios) {
    return this.turmaService.create(createTurmaDto, user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@GetUser() user: Usuarios) {
    return this.turmaService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @GetUser() user: Usuarios) {
    return this.turmaService.findOne(+id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto, @GetUser() user: Usuarios) {
    return this.turmaService.update(+id, updateTurmaDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @GetUser() user: Usuarios) {
    return this.turmaService.remove(+id, user);
  }
}
