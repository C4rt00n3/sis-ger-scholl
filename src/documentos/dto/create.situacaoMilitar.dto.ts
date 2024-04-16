import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateSituacaoMilitarDTO {
  @ApiProperty({ description: 'Tipo de documento', example: 'Reservista', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  tipoDeDocumento: string;

  @ApiProperty({ description: 'RA (Registro de Alistamento)', example: '123456789', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(12)
  ra: string;

  @ApiProperty({ description: 'CPF', example: '12345678901', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;

  @ApiProperty({ description: 'Nome completo', example: 'João da Silva', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  nome: string;

  @ApiProperty({ description: 'Nome completo do pai', example: 'José da Silva', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  pai: string;

  @ApiProperty({ description: 'Nome completo da mãe', example: 'Maria da Silva', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  mae: string;

  @ApiProperty({ description: 'Local de nascimento', example: 'São Paulo/SP', required: false })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  localNacimento: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Data de nascimento', example: '1990-01-01', required: false })
  @IsDate()
  @Transform(({value}) => new Date(value))
  dataNascimento: Date;

  @ApiProperty({ description: 'Situação do serviço militar', example: 'Dispensado', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  situacaoServicoMilitar: string;

  @ApiProperty({ description: 'Validade do documento', example: '2025-01-01', required: false })
  @IsOptional()
  @IsDate()
  @Transform(({value}) => new Date(value))
  validade?: Date;

  // Images: ImagesDTO[];
}