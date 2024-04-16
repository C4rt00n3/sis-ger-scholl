import { EstadoBrasil } from '@prisma/client';
import { IsOptional, IsString, IsEnum, IsNotEmpty, MaxLength, MinLength, IsDate, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { formatarDataParaBancoDeDados } from 'src/utils';

export class CreateRgDto {
  @ApiProperty({ description: 'Número do RG' })
  @IsString()
  @IsNotEmpty()
  rg: string;

  @ApiProperty({ description: 'Número do CPF' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @ApiProperty({ description: 'Data de expedição do RG' })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dataExpedicao: Date;

  @ApiProperty({ description: 'Data de nascimento' })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dataNascimento: Date;

  @ApiProperty({ description: 'Órgão emissor do RG' })
  @IsString()
  @IsNotEmpty()
  orgaoEmissor: string;

  @ApiProperty({ description: 'UF do RG' })
  @IsNotEmpty()
  @IsEnum(EstadoBrasil)
  UF: EstadoBrasil;

  @ApiProperty({ description: 'Nome da mãe' })
  @IsString()
  @IsNotEmpty()
  mae: string;

  @ApiPropertyOptional({ description: 'Nome do pai (opcional)' })
  @IsString()
  @IsOptional()
  pai?: string;

  @ApiProperty({ description: 'Naturalidade' })
  @IsString()
  @IsNotEmpty()
  naturalidade: string;

  @ApiProperty({ description: 'Documento de origem' })
  @IsString()
  @IsNotEmpty()
  docOrigem: string;

  //   images: ImagesDTO[];
}

