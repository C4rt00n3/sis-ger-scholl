import { Sexo } from "@prisma/client";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from "class-transformer";
import { formatarDataParaBancoDeDados } from "src/utils";

export class CreateSusDto {
  @ApiProperty({ description: 'O nome do paciente' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'A data de nascimento do paciente' })
  @IsNotEmpty()
  @IsDate()
  @Transform(({value}) => new Date(value))
  nacimento: Date;

  @ApiProperty({ description: 'O sexo do paciente' })
  @IsNotEmpty()
  @IsEnum(Sexo)
  sexo: Sexo;

  @ApiPropertyOptional({ description: 'O número do SUS do paciente (opcional)' })
  @IsString()
  @IsOptional()
  @MaxLength(15)
  @MinLength(15)
  numero?: string;

}