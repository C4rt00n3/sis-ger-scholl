import { IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsInt, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateConvenioDto {
  @ApiProperty({ description: 'Nome do convênio', type: String })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Descrição do convênio', type: String, required: false })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({ description: 'Data de início do convênio', type: String })
  @IsNotEmpty()
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataInicio: Date;

  @ApiProperty({ description: 'Data de fim do convênio', type: String })
  @IsNotEmpty()
  @IsDate()
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataFim: Date;

  @ApiProperty({ description: 'Indica se o convênio está ativo', type: Boolean, default: true })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
