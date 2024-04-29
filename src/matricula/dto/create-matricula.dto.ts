import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NivelEscolar, Status, Turno } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsEnum, ValidateNested, IsDefined, IsObject, IsDate, IsNotEmpty } from 'class-validator';
import { CreateAlunoDto } from 'src/aluno/dto/create-aluno.dto';

export class CreateMatriculaDto {
  @ApiProperty({ description: 'Ano letivo da matrícula' })
  @IsInt()
  anoLetivo: number;

  @ApiProperty({ description: 'Nível da matrícula', required: true })
  @IsNotEmpty()
  @IsEnum(NivelEscolar)
  nivel?: string;

  @ApiPropertyOptional({ description: 'Horas anuais da matrícula', required: false })
  @IsOptional()
  @IsString()
  horasAnual?: string;

  @ApiPropertyOptional({ description: 'Frequência da matrícula', required: false })
  @IsOptional()
  @IsInt()
  frequencia?: number;

  @ApiPropertyOptional({ description: 'Data de saída da matrícula', required: false })
  @IsOptional()
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataSaida?: Date;

  @ApiProperty({ description: 'Resultado final da matrícula', required: false })
  @IsOptional()
  @IsString()
  resultadoFinal?: string;

  @ApiPropertyOptional({ description: 'Local da foto do aluno', required: false })
  @IsOptional()
  @IsString()
  localFotoAluno?: string;

  @ApiProperty({ enum: Turno, description: 'Turno da matrícula', default: "Matutino" })
  @IsEnum(Turno)
  turno: Turno;

  @ApiPropertyOptional({ enum: Status, description: 'Status da matrícula', required: false })
  @IsOptional()
  @IsEnum(Status)
  status?: Status = "EM_ANDAMENTO";

   // JSON objects to receive
   @ApiProperty({ description: 'Aluno referente a matricula', type: CreateAlunoDto, required: false })
   @ValidateNested()
   @IsDefined()
   @IsObject()
   @Type(() => CreateAlunoDto)
   Aluno: CreateAlunoDto
}