import { EstadoBrasil } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, IsDate, MaxLength, IsEnum } from 'class-validator';

export class CreateDocumentoDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  NrRegistro?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  livro: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  folha: string;

  @IsOptional()
  @IsDate()
  dataRegistro: Date;

  @IsString()
  @MaxLength(255)
  cartorio: string;
  
  @IsNotEmpty()
  @IsEnum(EstadoBrasil)
  UF_Cartorio?: string;

  @IsOptional()
  @IsString()
  @MaxLength(8)
  RG?: string;

  @IsOptional()
  @IsDate()
  dataExpRG?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  orgaoEmissorRG?: string;

  @IsNotEmpty()
  @IsEnum(EstadoBrasil)
  UF_RG?: string;

  @IsOptional()
  @IsString()
  @MaxLength(11)
  CPF?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  cartaoSUS?: string;

  @IsOptional()
  alunoId?: number;
}
