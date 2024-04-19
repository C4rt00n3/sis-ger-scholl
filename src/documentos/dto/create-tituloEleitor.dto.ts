import { IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateTituloEleitorDTO {
  @ApiProperty({ description: 'Nome completo', example: 'João da Silva', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  nome: string;

  @ApiProperty({ description: 'Número de inscrição', example: '123456789012', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  inscricao: string;

  @ApiProperty({ description: 'Data de nascimento', example: '1990-01-01', required: true })
  @IsNotEmpty()
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataNascimento: Date;

  @ApiProperty({ description: 'Data de emissão', example: '2020-01-01', required: true })
  @IsNotEmpty()
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataEmissao: Date;

  @ApiProperty({ description: 'Nome completo do pai', example: 'José da Silva', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  pai?: string;

  @ApiProperty({ description: 'Nome completo da mãe', example: 'Maria da Silva', required: true })
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(255)
  mae: string;

  @ApiProperty({ description: 'Número da zona eleitoral', example: 123, required: true })
  @IsNotEmpty()
  @IsInt()
  zona: number;

  @ApiProperty({ description: 'Número da seção eleitoral', example: 456, required: true })
  @IsNotEmpty()
  @IsInt()
  secao: number;

  // Images: ImagesDTO[];
}
