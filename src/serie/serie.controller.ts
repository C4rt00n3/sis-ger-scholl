import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@SRC/auth/auth.guard';
import { Usuarios } from '@prisma/client';
import { GetUser } from '@SRC/auth/get-user.decorator';

@Controller('serie')
@ApiTags("Serie")
@ApiBearerAuth()
export class SerieController {
  constructor(private readonly serieService: SerieService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createSerieDto: CreateSerieDto, @GetUser() user: Usuarios) {
    return this.serieService.create(createSerieDto, user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll( @GetUser() user: Usuarios) {
    return this.serieService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @GetUser() user: Usuarios) {
    return this.serieService.findOne(+id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto, @GetUser() user: Usuarios) {
    return this.serieService.update(+id, updateSerieDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @GetUser() user: Usuarios) {
    return this.serieService.remove(+id, user);
  }
}
