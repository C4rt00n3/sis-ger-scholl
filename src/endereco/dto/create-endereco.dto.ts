import { IsNotEmpty, IsOptional, IsInt, IsString, MaxLength, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoBrasil } from '@prisma/client';

export class CreateEnderecoDto {
  @ApiProperty({ description: 'Logradouro do endereço', type: String })
  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @ApiProperty({ description: 'Número do endereço', type: String })
  @IsNotEmpty()
  @IsString()
  numero: string;

  @ApiProperty({ description: 'Complemento do endereço', type: String, required: false })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({ description: 'Bairro do endereço', type: String })
  @IsNotEmpty()
  @IsString()
  bairro: string;

  @ApiProperty({ description: 'Cidade do endereço', type: String })
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ApiProperty({ description: 'Estado do endereço', type: String })
  @IsNotEmpty()
  @IsEnum(EstadoBrasil)
  estado: EstadoBrasil;

  @ApiProperty({ description: 'CEP do endereço', type: String })
  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  cep: string;
}
