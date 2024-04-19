import { ApiProperty } from '@nestjs/swagger';
import { Resultado, Turno } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString, IsEnum, ValidateNested, IsDefined, IsObject } from 'class-validator';
import { CreateAlunoDto } from 'src/aluno/dto/create-aluno.dto';
import { CreateEscolaDto } from 'src/escola/dto/create-escola.dto';
import { CreateSerieDto } from 'src/serie/dto/create-serie.dto';
import { CreateTurmaDto } from 'src/turma/dto/create-turma.dto';

export class CreateMatriculaDto {
  @ApiProperty({ description: 'Ano letivo da matrícula' })
  @IsInt()
  anoLetivo: number;

  @ApiProperty({ description: 'Nível da matrícula', required: false })
  @IsOptional()
  @IsString()
  nivel?: string;

  @ApiProperty({ description: 'ID do horário da aula', required: false })
  @IsOptional()
  @IsString()
  horarioAulaID?: string;

  @ApiProperty({ description: 'Horas anuais da matrícula', required: false })
  @IsOptional()
  @IsString()
  horasAnual?: string;

  @ApiProperty({ description: 'Frequência da matrícula', required: false })
  @IsOptional()
  @IsInt()
  frequencia?: number;

  @ApiProperty({ description: 'Data de saída da matrícula', required: false })
  @IsOptional()
  @IsDateString()
  dataSaida?: Date;

  @ApiProperty({ description: 'Resultado final da matrícula', required: false })
  @IsOptional()
  @IsString()
  resultadoFinal?: string;

  @ApiProperty({ description: 'Local da foto do aluno', required: false })
  @IsOptional()
  @IsString()
  localFotoAluno?: string;

  @ApiProperty({ enum: Turno, description: 'Turno da matrícula', default: "Matutino" })
  @IsEnum(Turno)
  turno: Turno;

  @ApiProperty({ enum: Resultado, description: 'Resultado da matrícula' })
  @IsEnum(Resultado)
  resultado: Resultado;

   // JSON objects to receive
   @ApiProperty({ description: 'Aluno referente a matricula', type: CreateAlunoDto, required: false })
   @ValidateNested()
   @IsDefined()
   @IsObject()
   @Type(() => CreateAlunoDto)
   Aluno: CreateAlunoDto

   @ApiProperty({ description: 'Escola referente a matricula', type: CreateEscolaDto, required: false })
   @ValidateNested()
   @IsDefined()
   @IsObject()
   @Type(() => CreateEscolaDto)
   Escola: CreateEscolaDto
}